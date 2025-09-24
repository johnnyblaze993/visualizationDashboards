#!/usr/bin/env bash
set -euo pipefail

DB_HOST=localhost
DB_USER=sa
DB_PASS='-#password123sdJwnwlk'   # your current compose secret
IMPORT_DIR="./ignored/imports"

# 1) Ensure schemas exist
docker compose exec -T db /opt/mssql-tools18/bin/sqlcmd \
  -S $DB_HOST -U $DB_USER -P "$DB_PASS" -C -b -Q "
IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name='staging') EXEC('CREATE SCHEMA staging');
IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name='crewflex') EXEC('CREATE SCHEMA crewflex');
"

# 2) Loop all CSVs in the import dir
shopt -s nullglob
for path in "$IMPORT_DIR"/*.csv "$IMPORT_DIR"/*.CSV; do
  base="$(basename "$path")"
  name="${base%.*}"                         # e.g., PersonnelPID.csv -> PersonnelPID
  table="staging.${name}_raw"

  # Build column list from header (NVARCHAR(MAX) for safety)
  cols="$(python3 - "$path" <<'PY'
import csv, sys, re
p = sys.argv[1]
with open(p, 'r', encoding='utf-8', newline='') as fh:
    hdr = next(csv.reader(fh))
def sanitize(s):
    s = re.sub(r'[^A-Za-z0-9_]', '_', s.strip())
    if not s or s[0].isdigit():
        s = 'c_' + s
    return s[:120]
print(', '.join(f'[{sanitize(h)}] NVARCHAR(MAX) NULL' for h in hdr))
PY
)"

  echo ">> Loading ${base} -> ${table}"

  # 3) Drop/create staging table and BULK INSERT the file
  docker compose exec -T db /opt/mssql-tools18/bin/sqlcmd \
    -S $DB_HOST -U $DB_USER -P "$DB_PASS" -C -b -Q "
IF OBJECT_ID('$table') IS NOT NULL DROP TABLE $table;
CREATE TABLE $table ( $cols );
BULK INSERT $table
FROM '/var/opt/mssql/imports/${base}'
WITH (
  FORMAT = 'CSV',
  FIRSTROW = 2,          -- skip header
  FIELDQUOTE = '\"',     -- handle quoted fields
  ROWTERMINATOR = '0x0a',
  TABLOCK
);
"
done

echo "✅ All CSVs loaded into staging.*_raw tables."
