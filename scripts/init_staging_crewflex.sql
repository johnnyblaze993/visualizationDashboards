USE NAVPORT;
GO
    /* ========= 1. Ensure schemas exist ========= */
    IF NOT EXISTS (
        SELECT 1
        FROM sys.schemas
        WHERE name = 'staging'
    ) EXEC('CREATE SCHEMA staging;');
IF NOT EXISTS (
    SELECT 1
    FROM sys.schemas
    WHERE name = 'crewflex'
) EXEC('CREATE SCHEMA crewflex;');
/* ========= 2. Create staging tables for CSV imports ========= */
IF OBJECT_ID('staging.Branch_raw') IS NULL CREATE TABLE staging.Branch_raw (
    BranchID NVARCHAR(255),
    BranchName NVARCHAR(255)
);
IF OBJECT_ID('staging.Company_raw') IS NULL CREATE TABLE staging.Company_raw (
    CompanyID NVARCHAR(255),
    CompanyName NVARCHAR(255)
);
IF OBJECT_ID('staging.GOVPOC_raw') IS NULL CREATE TABLE staging.GOVPOC_raw (
    GovPOCID NVARCHAR(255),
    GovPOCName NVARCHAR(255)
);
IF OBJECT_ID('staging.Level_raw') IS NULL CREATE TABLE staging.Level_raw (
    LevelID NVARCHAR(255),
    LevelName NVARCHAR(255)
);
IF OBJECT_ID('staging.Location_raw') IS NULL CREATE TABLE staging.Location_raw (
    LocationID NVARCHAR(255),
    LocationName NVARCHAR(255)
);
IF OBJECT_ID('staging.Notes_raw') IS NULL CREATE TABLE staging.Notes_raw (
    NoteID NVARCHAR(255),
    PersonnelID NVARCHAR(255),
    NoteText NVARCHAR(MAX)
);
IF OBJECT_ID('staging.PID_raw') IS NULL CREATE TABLE staging.PID_raw (
    PID_ID NVARCHAR(255),
    PIDName NVARCHAR(255)
);
IF OBJECT_ID('staging.PWSTaskArea_raw') IS NULL CREATE TABLE staging.PWSTaskArea_raw (
    PWSID NVARCHAR(255),
    TaskArea NVARCHAR(255)
);
IF OBJECT_ID('staging.Personnel_raw') IS NULL CREATE TABLE staging.Personnel_raw (
    PersonnelID NVARCHAR(255),
    CompanyID NVARCHAR(255),
    BranchID NVARCHAR(255),
    LocationID NVARCHAR(255),
    PWSID NVARCHAR(255),
    FirstName NVARCHAR(255),
    LastName NVARCHAR(255)
);
IF OBJECT_ID('staging.PersonnelGovPOC_raw') IS NULL CREATE TABLE staging.PersonnelGovPOC_raw (
    PersonnelGovPOCID NVARCHAR(255),
    PersonnelID NVARCHAR(255),
    GovPOCID NVARCHAR(255)
);
IF OBJECT_ID('staging.PersonnelLevel_raw') IS NULL CREATE TABLE staging.PersonnelLevel_raw (
    PersonnelLevelID NVARCHAR(255),
    PersonnelID NVARCHAR(255),
    LevelID NVARCHAR(255)
);
IF OBJECT_ID('staging.PersonnelPID_raw') IS NULL CREATE TABLE staging.PersonnelPID_raw (
    PersonnelPIDID NVARCHAR(255),
    PersonnelID NVARCHAR(255),
    PID_ID NVARCHAR(255)
);
IF OBJECT_ID('staging.PersonnelSOC_raw') IS NULL CREATE TABLE staging.PersonnelSOC_raw (
    PersonnelSOCID NVARCHAR(255),
    PersonnelID NVARCHAR(255),
    SOCID NVARCHAR(255)
);
IF OBJECT_ID('staging.SOC_raw') IS NULL CREATE TABLE staging.SOC_raw (
    SOCID NVARCHAR(255),
    SOCName NVARCHAR(255)
);
PRINT '✅ staging schema initialized. Use load_csvs.sh to import data into staging tables.';