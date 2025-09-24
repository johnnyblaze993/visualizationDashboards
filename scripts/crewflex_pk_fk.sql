USE NAVPORT;
GO
    /* =========================
     1) TYPE KEY COLUMNS (GUARDED)
     ========================= */
    -- COMPANY (typed earlier; enforce)
    IF OBJECT_ID('creflex.Company') IS NOT NULL BEGIN IF COL_LENGTH('creflex.Company', 'CompanyId') IS NOT NULL
ALTER TABLE creflex.Company
ALTER COLUMN [CompanyId] UNIQUEIDENTIFIER NOT NULL;
END -- BRANCH (typed earlier; enforce, CompanyId FK can be NULL)
IF OBJECT_ID('creflex.Branch') IS NOT NULL BEGIN IF COL_LENGTH('creflex.Branch', 'BranchId') IS NOT NULL
ALTER TABLE creflex.Branch
ALTER COLUMN [BranchId] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.Branch', 'CompanyId') IS NOT NULL
ALTER TABLE creflex.Branch
ALTER COLUMN [CompanyId] UNIQUEIDENTIFIER NULL;
END -- [Location]
IF OBJECT_ID('creflex.[Location]') IS NOT NULL BEGIN IF COL_LENGTH('creflex.[Location]', 'LocationID') IS NOT NULL
ALTER TABLE creflex.[Location]
ALTER COLUMN [LocationID] UNIQUEIDENTIFIER NOT NULL;
ELSE IF COL_LENGTH('creflex.[Location]', 'LocationId') IS NOT NULL
ALTER TABLE creflex.[Location]
ALTER COLUMN [LocationId] UNIQUEIDENTIFIER NOT NULL;
END -- [Level]
IF OBJECT_ID('creflex.[Level]') IS NOT NULL BEGIN IF COL_LENGTH('creflex.[Level]', 'LevelID') IS NOT NULL
ALTER TABLE creflex.[Level]
ALTER COLUMN [LevelID] UNIQUEIDENTIFIER NOT NULL;
ELSE IF COL_LENGTH('creflex.[Level]', 'LevelId') IS NOT NULL
ALTER TABLE creflex.[Level]
ALTER COLUMN [LevelId] UNIQUEIDENTIFIER NOT NULL;
END -- SOC
IF OBJECT_ID('creflex.SOC') IS NOT NULL BEGIN IF COL_LENGTH('creflex.SOC', 'SOCID') IS NOT NULL
ALTER TABLE creflex.SOC
ALTER COLUMN [SOCID] UNIQUEIDENTIFIER NOT NULL;
END -- GOVPOC
IF OBJECT_ID('creflex.GOVPOC') IS NOT NULL BEGIN IF COL_LENGTH('creflex.GOVPOC', 'GovPOCID') IS NOT NULL
ALTER TABLE creflex.GOVPOC
ALTER COLUMN [GovPOCID] UNIQUEIDENTIFIER NOT NULL;
END -- PWSTaskArea
IF OBJECT_ID('creflex.PWSTaskArea') IS NOT NULL BEGIN IF COL_LENGTH('creflex.PWSTaskArea', 'PWSID') IS NOT NULL
ALTER TABLE creflex.PWSTaskArea
ALTER COLUMN [PWSID] UNIQUEIDENTIFIER NOT NULL;
END -- PID
IF OBJECT_ID('creflex.PID') IS NOT NULL BEGIN IF COL_LENGTH('creflex.PID', 'PID_ID') IS NOT NULL
ALTER TABLE creflex.PID
ALTER COLUMN [PID_ID] UNIQUEIDENTIFIER NOT NULL;
END -- Personnel (PK + nullable FKs)
IF OBJECT_ID('creflex.Personnel') IS NOT NULL BEGIN IF COL_LENGTH('creflex.Personnel', 'PersonnelID') IS NOT NULL
ALTER TABLE creflex.Personnel
ALTER COLUMN [PersonnelID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.Personnel', 'CompanyID') IS NOT NULL
ALTER TABLE creflex.Personnel
ALTER COLUMN [CompanyID] UNIQUEIDENTIFIER NULL;
IF COL_LENGTH('creflex.Personnel', 'BranchID') IS NOT NULL
ALTER TABLE creflex.Personnel
ALTER COLUMN [BranchID] UNIQUEIDENTIFIER NULL;
IF COL_LENGTH('creflex.Personnel', 'LocationID') IS NOT NULL
ALTER TABLE creflex.Personnel
ALTER COLUMN [LocationID] UNIQUEIDENTIFIER NULL;
IF COL_LENGTH('creflex.Personnel', 'PWSID') IS NOT NULL
ALTER TABLE creflex.Personnel
ALTER COLUMN [PWSID] UNIQUEIDENTIFIER NULL;
END -- Junctions
IF OBJECT_ID('creflex.PersonnelPID') IS NOT NULL BEGIN IF COL_LENGTH('creflex.PersonnelPID', 'PersonnelPIDID') IS NOT NULL
ALTER TABLE creflex.PersonnelPID
ALTER COLUMN [PersonnelPIDID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelPID', 'PersonnelID') IS NOT NULL
ALTER TABLE creflex.PersonnelPID
ALTER COLUMN [PersonnelID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelPID', 'PID_ID') IS NOT NULL
ALTER TABLE creflex.PersonnelPID
ALTER COLUMN [PID_ID] UNIQUEIDENTIFIER NOT NULL;
END IF OBJECT_ID('creflex.PersonnelSOC') IS NOT NULL BEGIN IF COL_LENGTH('creflex.PersonnelSOC', 'PersonnelSOCID') IS NOT NULL
ALTER TABLE creflex.PersonnelSOC
ALTER COLUMN [PersonnelSOCID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelSOC', 'PersonnelID') IS NOT NULL
ALTER TABLE creflex.PersonnelSOC
ALTER COLUMN [PersonnelID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelSOC', 'SOCID') IS NOT NULL
ALTER TABLE creflex.PersonnelSOC
ALTER COLUMN [SOCID] UNIQUEIDENTIFIER NOT NULL;
END IF OBJECT_ID('creflex.PersonnelLevel') IS NOT NULL BEGIN IF COL_LENGTH('creflex.PersonnelLevel', 'PersonnelLevelID') IS NOT NULL
ALTER TABLE creflex.PersonnelLevel
ALTER COLUMN [PersonnelLevelID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelLevel', 'PersonnelID') IS NOT NULL
ALTER TABLE creflex.PersonnelLevel
ALTER COLUMN [PersonnelID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelLevel', 'LevelID') IS NOT NULL
ALTER TABLE creflex.PersonnelLevel
ALTER COLUMN [LevelID] UNIQUEIDENTIFIER NOT NULL;
END IF OBJECT_ID('creflex.PersonnelGovPOC') IS NOT NULL BEGIN IF COL_LENGTH('creflex.PersonnelGovPOC', 'PersonnelGovPOCID') IS NOT NULL
ALTER TABLE creflex.PersonnelGovPOC
ALTER COLUMN [PersonnelGovPOCID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelGovPOC', 'PersonnelID') IS NOT NULL
ALTER TABLE creflex.PersonnelGovPOC
ALTER COLUMN [PersonnelID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.PersonnelGovPOC', 'GovPOCID') IS NOT NULL
ALTER TABLE creflex.PersonnelGovPOC
ALTER COLUMN [GovPOCID] UNIQUEIDENTIFIER NOT NULL;
END -- Notes
IF OBJECT_ID('creflex.Notes') IS NOT NULL BEGIN IF COL_LENGTH('creflex.Notes', 'NoteID') IS NOT NULL
ALTER TABLE creflex.Notes
ALTER COLUMN [NoteID] UNIQUEIDENTIFIER NOT NULL;
IF COL_LENGTH('creflex.Notes', 'PersonnelID') IS NOT NULL
ALTER TABLE creflex.Notes
ALTER COLUMN [PersonnelID] UNIQUEIDENTIFIER NOT NULL;
END
/* =========================
 2) PRIMARY KEYS (GUARDED)
 ========================= */
IF OBJECT_ID('creflex.Company') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_Company'
)
ALTER TABLE creflex.Company
ADD CONSTRAINT PK_Company PRIMARY KEY ([CompanyId]);
IF OBJECT_ID('creflex.Branch') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_Branch'
)
ALTER TABLE creflex.Branch
ADD CONSTRAINT PK_Branch PRIMARY KEY ([BranchId]);
IF OBJECT_ID('creflex.[Location]') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_Location'
) BEGIN IF COL_LENGTH('creflex.[Location]', 'LocationID') IS NOT NULL
ALTER TABLE creflex.[Location]
ADD CONSTRAINT PK_Location PRIMARY KEY ([LocationID]);
ELSE IF COL_LENGTH('creflex.[Location]', 'LocationId') IS NOT NULL
ALTER TABLE creflex.[Location]
ADD CONSTRAINT PK_Location PRIMARY KEY ([LocationId]);
END IF OBJECT_ID('creflex.[Level]') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_Level'
) BEGIN IF COL_LENGTH('creflex.[Level]', 'LevelID') IS NOT NULL
ALTER TABLE creflex.[Level]
ADD CONSTRAINT PK_Level PRIMARY KEY ([LevelID]);
ELSE IF COL_LENGTH('creflex.[Level]', 'LevelId') IS NOT NULL
ALTER TABLE creflex.[Level]
ADD CONSTRAINT PK_Level PRIMARY KEY ([LevelId]);
END IF OBJECT_ID('creflex.SOC') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_SOC'
)
ALTER TABLE creflex.SOC
ADD CONSTRAINT PK_SOC PRIMARY KEY ([SOCID]);
IF OBJECT_ID('creflex.GOVPOC') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_GOVPOC'
)
ALTER TABLE creflex.GOVPOC
ADD CONSTRAINT PK_GOVPOC PRIMARY KEY ([GovPOCID]);
IF OBJECT_ID('creflex.PWSTaskArea') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_PWSTaskArea'
)
ALTER TABLE creflex.PWSTaskArea
ADD CONSTRAINT PK_PWSTaskArea PRIMARY KEY ([PWSID]);
IF OBJECT_ID('creflex.PID') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_PID'
)
ALTER TABLE creflex.PID
ADD CONSTRAINT PK_PID PRIMARY KEY ([PID_ID]);
IF OBJECT_ID('creflex.Personnel') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_Personnel'
)
ALTER TABLE creflex.Personnel
ADD CONSTRAINT PK_Personnel PRIMARY KEY ([PersonnelID]);
IF OBJECT_ID('creflex.PersonnelPID') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_PersonnelPID'
)
ALTER TABLE creflex.PersonnelPID
ADD CONSTRAINT PK_PersonnelPID PRIMARY KEY ([PersonnelPIDID]);
IF OBJECT_ID('creflex.PersonnelSOC') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_PersonnelSOC'
)
ALTER TABLE creflex.PersonnelSOC
ADD CONSTRAINT PK_PersonnelSOC PRIMARY KEY ([PersonnelSOCID]);
IF OBJECT_ID('creflex.PersonnelLevel') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_PersonnelLevel'
)
ALTER TABLE creflex.PersonnelLevel
ADD CONSTRAINT PK_PersonnelLevel PRIMARY KEY ([PersonnelLevelID]);
IF OBJECT_ID('creflex.PersonnelGovPOC') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_PersonnelGovPOC'
)
ALTER TABLE creflex.PersonnelGovPOC
ADD CONSTRAINT PK_PersonnelGovPOC PRIMARY KEY ([PersonnelGovPOCID]);
IF OBJECT_ID('creflex.Notes') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.key_constraints
    WHERE name = 'PK_Notes'
)
ALTER TABLE creflex.Notes
ADD CONSTRAINT PK_Notes PRIMARY KEY ([NoteID]);
/* =========================
 3) FOREIGN KEYS + INDEXES
 ========================= */
-- Branch → Company
IF OBJECT_ID('creflex.Branch') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_Branch_Company'
)
ALTER TABLE creflex.Branch WITH CHECK
ADD CONSTRAINT FK_Branch_Company FOREIGN KEY (CompanyId) REFERENCES creflex.Company(CompanyId);
IF OBJECT_ID('creflex.Branch') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_Branch_CompanyId'
        AND object_id = OBJECT_ID('creflex.Branch')
) CREATE INDEX IX_Branch_CompanyId ON creflex.Branch(CompanyId);
-- Personnel → Company/Branch/Location/PWS
IF OBJECT_ID('creflex.Personnel') IS NOT NULL BEGIN IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_Personnel_CompanyID'
        AND object_id = OBJECT_ID('creflex.Personnel')
) CREATE INDEX IX_Personnel_CompanyID ON creflex.Personnel(CompanyID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_Personnel_BranchID'
        AND object_id = OBJECT_ID('creflex.Personnel')
) CREATE INDEX IX_Personnel_BranchID ON creflex.Personnel(BranchID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_Personnel_LocationID'
        AND object_id = OBJECT_ID('creflex.Personnel')
) CREATE INDEX IX_Personnel_LocationID ON creflex.Personnel(LocationID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_Personnel_PWSID'
        AND object_id = OBJECT_ID('creflex.Personnel')
) CREATE INDEX IX_Personnel_PWSID ON creflex.Personnel(PWSID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_Personnel_Company'
)
ALTER TABLE creflex.Personnel WITH CHECK
ADD CONSTRAINT FK_Personnel_Company FOREIGN KEY (CompanyID) REFERENCES creflex.Company(CompanyId);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_Personnel_Branch'
)
ALTER TABLE creflex.Personnel WITH CHECK
ADD CONSTRAINT FK_Personnel_Branch FOREIGN KEY (BranchID) REFERENCES creflex.Branch(BranchId);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_Personnel_Location'
) BEGIN IF COL_LENGTH('creflex.[Location]', 'LocationID') IS NOT NULL
ALTER TABLE creflex.Personnel WITH CHECK
ADD CONSTRAINT FK_Personnel_Location FOREIGN KEY (LocationID) REFERENCES creflex.[Location]([LocationID]);
ELSE IF COL_LENGTH('creflex.[Location]', 'LocationId') IS NOT NULL
ALTER TABLE creflex.Personnel WITH CHECK
ADD CONSTRAINT FK_Personnel_Location FOREIGN KEY (LocationID) REFERENCES creflex.[Location]([LocationId]);
END IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_Personnel_PWS'
)
ALTER TABLE creflex.Personnel WITH CHECK
ADD CONSTRAINT FK_Personnel_PWS FOREIGN KEY (PWSID) REFERENCES creflex.PWSTaskArea(PWSID);
END -- PersonnelPID → Personnel & PID
IF OBJECT_ID('creflex.PersonnelPID') IS NOT NULL BEGIN IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelPID_Personnel'
)
ALTER TABLE creflex.PersonnelPID WITH CHECK
ADD CONSTRAINT FK_PersonnelPID_Personnel FOREIGN KEY (PersonnelID) REFERENCES creflex.Personnel(PersonnelID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelPID_PID'
)
ALTER TABLE creflex.PersonnelPID WITH CHECK
ADD CONSTRAINT FK_PersonnelPID_PID FOREIGN KEY (PID_ID) REFERENCES creflex.PID(PID_ID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_PersonnelPID_PID'
        AND object_id = OBJECT_ID('creflex.PersonnelPID')
) CREATE INDEX IX_PersonnelPID_PID ON creflex.PersonnelPID(PID_ID);
END -- PersonnelSOC → Personnel & SOC
IF OBJECT_ID('creflex.PersonnelSOC') IS NOT NULL BEGIN IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelSOC_Personnel'
)
ALTER TABLE creflex.PersonnelSOC WITH CHECK
ADD CONSTRAINT FK_PersonnelSOC_Personnel FOREIGN KEY (PersonnelID) REFERENCES creflex.Personnel(PersonnelID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelSOC_SOC'
)
ALTER TABLE creflex.PersonnelSOC WITH CHECK
ADD CONSTRAINT FK_PersonnelSOC_SOC FOREIGN KEY (SOCID) REFERENCES creflex.SOC(SOCID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_PersonnelSOC_SOCID'
        AND object_id = OBJECT_ID('creflex.PersonnelSOC')
) CREATE INDEX IX_PersonnelSOC_SOCID ON creflex.PersonnelSOC(SOCID);
END -- PersonnelLevel → Personnel & [Level]
IF OBJECT_ID('creflex.PersonnelLevel') IS NOT NULL BEGIN IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelLevel_Personnel'
)
ALTER TABLE creflex.PersonnelLevel WITH CHECK
ADD CONSTRAINT FK_PersonnelLevel_Personnel FOREIGN KEY (PersonnelID) REFERENCES creflex.Personnel(PersonnelID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelLevel_Level'
) BEGIN IF COL_LENGTH('creflex.[Level]', 'LevelID') IS NOT NULL
ALTER TABLE creflex.PersonnelLevel WITH CHECK
ADD CONSTRAINT FK_PersonnelLevel_Level FOREIGN KEY (LevelID) REFERENCES creflex.[Level]([LevelID]);
ELSE IF COL_LENGTH('creflex.[Level]', 'LevelId') IS NOT NULL
ALTER TABLE creflex.PersonnelLevel WITH CHECK
ADD CONSTRAINT FK_PersonnelLevel_Level FOREIGN KEY (LevelID) REFERENCES creflex.[Level]([LevelId]);
END IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_PersonnelLevel_Level'
        AND object_id = OBJECT_ID('creflex.PersonnelLevel')
) CREATE INDEX IX_PersonnelLevel_Level ON creflex.PersonnelLevel(LevelID);
END -- PersonnelGovPOC → Personnel & GOVPOC
IF OBJECT_ID('creflex.PersonnelGovPOC') IS NOT NULL BEGIN IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelGovPOC_Personnel'
)
ALTER TABLE creflex.PersonnelGovPOC WITH CHECK
ADD CONSTRAINT FK_PersonnelGovPOC_Personnel FOREIGN KEY (PersonnelID) REFERENCES creflex.Personnel(PersonnelID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_PersonnelGovPOC_GOVPOC'
)
ALTER TABLE creflex.PersonnelGovPOC WITH CHECK
ADD CONSTRAINT FK_PersonnelGovPOC_GOVPOC FOREIGN KEY (GovPOCID) REFERENCES creflex.GOVPOC(GovPOCID);
IF NOT EXISTS (
    SELECT 1
    FROM sys.indexes
    WHERE name = 'IX_PersonnelGovPOC_POC'
        AND object_id = OBJECT_ID('creflex.PersonnelGovPOC')
) CREATE INDEX IX_PersonnelGovPOC_POC ON creflex.PersonnelGovPOC(GovPOCID);
END -- Notes → Personnel
IF OBJECT_ID('creflex.Notes') IS NOT NULL
AND NOT EXISTS (
    SELECT 1
    FROM sys.foreign_keys
    WHERE name = 'FK_Notes_Personnel'
)
ALTER TABLE creflex.Notes WITH CHECK
ADD CONSTRAINT FK_Notes_Personnel FOREIGN KEY (PersonnelID) REFERENCES creflex.Personnel(PersonnelID);
-- Final report
PRINT '--- PK/FK summary ---';
SELECT s.name AS schema_name,
    t.name AS table_name,
    kc.name AS pk_name
FROM sys.key_constraints kc
    JOIN sys.tables t ON t.object_id = kc.parent_object_id
    JOIN sys.schemas s ON s.schema_id = t.schema_id
WHERE kc.type = 'PK'
    AND s.name = 'creflex'
ORDER BY t.name;
SELECT s.name AS schema_name,
    t.name AS table_name,
    fk.name AS fk_name
FROM sys.foreign_keys fk
    JOIN sys.tables t ON t.object_id = fk.parent_object_id
    JOIN sys.schemas s ON s.schema_id = t.schema_id
WHERE s.name = 'creflex'
ORDER BY t.name,
    fk.name;