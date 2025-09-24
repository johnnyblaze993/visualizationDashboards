USE NAVPORT;
GO
    /* ========= Promote staging → crewflex ========= */
DECLARE @src sysname,
    @base sysname,
    @sql nvarchar(max);
DECLARE c CURSOR FAST_FORWARD FOR
SELECT t.name
FROM sys.tables t
WHERE t.schema_id = SCHEMA_ID('staging')
    AND t.name LIKE '%[_]raw';
OPEN c;
FETCH NEXT
FROM c INTO @src;
WHILE @@FETCH_STATUS = 0 BEGIN
SET @base = LEFT(@src, LEN(@src) - 4);
-- strip "_raw"
SET @sql = '
        IF OBJECT_ID(''crewflex.' + @base + ''') IS NOT NULL
            DROP TABLE crewflex.' + QUOTENAME(@base) + ';
        SELECT * INTO crewflex.' + QUOTENAME(@base) + ' FROM staging.' + QUOTENAME(@src) + ';';
PRINT @sql;
EXEC (@sql);
FETCH NEXT
FROM c INTO @src;
END CLOSE c;
DEALLOCATE c;
PRINT '✅ crewflex schema refreshed from staging data.';