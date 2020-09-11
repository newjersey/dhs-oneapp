# OneApp Stored Procedures

- [Stored Procedure List](#stored-procedure-list)
- [Method Signatures](#method-signatures)

## Stored Procedure List

| Stored Procedures                          | Migrated |       Ticket |
| :----------------------------------------- | :------: | -----------: |
| OA_PKG_ADMIN.SP_DELETE_USER                |          |              |
| OA_PKG_ADMIN.SP_DELETE_USER_PAGE           |          |              |
| OA_PKG_ADMIN.SP_SELECT_APPLICATION         |          |              |
| OA_PKG_ADMIN.SP_SELECT_APPLICATION_HEADER  |          |              |
| OA_PKG_ADMIN.SP_SELECT_APPLICATION_ITEMS   |          |              |
| OA_PKG_ADMIN.SP_UPDATE_APPLICANT_DETAILS   |          |              |
| OA_PKG_ADMIN.SP_UPDATE_OA_STATUS_OPEN      |          |              |
| OA_PKG_ADMIN.SP_UPDATE_PAAD_IMPORT_COUNT   |          |              |
| OA_PKG_ADMIN.SP_UPDATE_PAAD_PARAMETERS     |          |              |
| OA_PKG_APP.SP_DELETE_APP_CONTACT           |          |              |
| OA_PKG_APP.SP_DELETE_APP_HH_MEMBER         |          |              |
| OA_PKG_APP.SP_DELETE_APP_PAGE_INFO         |          |              |
| OA_PKG_APP.SP_DELETE_APPLICATION_ITEMS     |          |              |
| OA_PKG_APP.SP_DELETE_APPLICATION_PROGRAMS  |          |              |
| OA_PKG_APP.SP_DELETE_AUTHORIZED_REP        |          |              |
| OA_PKG_APP.SP_DELETE_EMERGENCY_CONTACT     |          |              |
| OA_PKG_APP.SP_DELETE_EXPENSE_CA_CARE       |          |              |
| OA_PKG_APP.SP_DELETE_EXPENSE_CSUPPORT      |          |              |
| OA_PKG_APP.SP_DELETE_EXPENSE_MEDICAL       |          |              |
| OA_PKG_APP.SP_DELETE_EXPENSE_SHELTER       |          |              |
| OA_PKG_APP.SP_DELETE_EXPENSE_UTILITY       |          |              |
| OA_PKG_APP.SP_DELETE_FAMILY_CARE_DETAILS   |          |              |
| OA_PKG_APP.SP_DELETE_FAMILY_CARE_HEADER    |          |              |
| OA_PKG_APP.SP_DELETE_FOOD_STAMP_DETAILS    |          |              |
| OA_PKG_APP.SP_DELETE_FOOD_STAMP_HEADER     |          |              |
| OA_PKG_APP.SP_DELETE_FOOD_STAMP_INFO       |          |              |
| OA_PKG_APP.SP_DELETE_HEALTH_INSURANCE      |          |              |
| OA_PKG_APP.SP_DELETE_HHM_BASIC             |          |              |
| OA_PKG_APP.SP_DELETE_HHM_OTHER             |          |              |
| OA_PKG_APP.SP_DELETE_INCOME_EARNED         |          |              |
| OA_PKG_APP.SP_DELETE_INCOME_HISTORY        |          |              |
| OA_PKG_APP.SP_DELETE_INCOME_OTHER          |          |              |
| OA_PKG_APP.SP_DELETE_INCOME_STUDENT        |          |              |
| OA_PKG_APP.SP_DELETE_INCOME_UNEARNED       |          |              |
| OA_PKG_APP.SP_DELETE_OTHER_MEMBER          |          |              |
| OA_PKG_APP.SP_DELETE_PEPW_DETAILS          |          |              |
| OA_PKG_APP.SP_DELETE_PEPW_HEADER           |          |              |
| OA_PKG_APP.SP_DELETE_RES_PENDING_CLAIM     |          |              |
| OA_PKG_APP.SP_DELETE_RES_PERS_PROPERTY     |          |              |
| OA_PKG_APP.SP_DELETE_RES_REAL_ESTATE       |          |              |
| OA_PKG_APP.SP_DELETE_RES_TRADED_ITEM       |          |              |
| OA_PKG_APP.SP_DELETE_RESOURCE              |          |              |
| OA_PKG_APP.SP_DELETE_RESPONSIBLE_RELATIVE  |          |              |
| OA_PKG_APP.SP_DELETE_SAP_APPLICATION       |          |              |
| OA_PKG_APP.SP_DELETE_TANF_GA_HEADER        |          |              |
| OA_PKG_APP.SP_DELETE_VIOLATION             |          |              |
| OA_PKG_APP.SP_EXPORT_FS_DATA               |          |              |
| OA_PKG_APP.SP_INSERT_FEEDBACK              |          |              |
| OA_PKG_APP.SP_SELECT_APP_CONTACT           |          |              |
| OA_PKG_APP.SP_SELECT_APP_HH_MEMBER         |          |              |
| OA_PKG_APP.SP_SELECT_APP_HH_PARENT         |          |              |
| OA_PKG_APP.SP_SELECT_APP_PAGE_INFO         |          |              |
| OA_PKG_APP.SP_SELECT_APPLICATION_ALL       |          |              |
| OA_PKG_APP.SP_SELECT_APPLICATION_ITEMS     |          |              |
| OA_PKG_APP.SP_SELECT_APPLICATION_PROGRAMS  |          |              |
| OA_PKG_APP.SP_SELECT_APPLICATION_STATUS    |          |              |
| OA_PKG_APP.SP_SELECT_AUTHORIZED_REP        |          |              |
| OA_PKG_APP.SP_SELECT_EMERGENCY_CONTACT     |          |              |
| OA_PKG_APP.SP_SELECT_EXPENSE_CA_CARE       |          |              |
| OA_PKG_APP.SP_SELECT_EXPENSE_CSUPPORT      |          |              |
| OA_PKG_APP.SP_SELECT_EXPENSE_MEDICAL       |          |              |
| OA_PKG_APP.SP_SELECT_EXPENSE_SHELTER       |          |              |
| OA_PKG_APP.SP_SELECT_EXPENSE_UTILITY       |          |              |
| OA_PKG_APP.SP_SELECT_FAMILY_CARE_DETAILS   |          |              |
| OA_PKG_APP.SP_SELECT_FAMILY_CARE_HEADER    |          |              |
| OA_PKG_APP.SP_SELECT_FOOD_STAMP_DETAILS    |          |              |
| OA_PKG_APP.SP_SELECT_FOOD_STAMP_HEADER     |          |              |
| OA_PKG_APP.SP_SELECT_FOOD_STAMP_INFO       |          |              |
| OA_PKG_APP.SP_SELECT_HEALTH_INSURANCE      |          |              |
| OA_PKG_APP.SP_SELECT_HHM_BASIC             |          |              |
| OA_PKG_APP.SP_SELECT_HHM_OTHER             |          |              |
| OA_PKG_APP.SP_SELECT_INCOME_EARNED         |          |              |
| OA_PKG_APP.SP_SELECT_INCOME_HISTORY        |          |              |
| OA_PKG_APP.SP_SELECT_INCOME_OTHER          |          |              |
| OA_PKG_APP.SP_SELECT_INCOME_STUDENT        |          |              |
| OA_PKG_APP.SP_SELECT_INCOME_UNEARNED       |          |              |
| OA_PKG_APP.SP_SELECT_OTHER_MEMBER          |          |              |
| OA_PKG_APP.SP_SELECT_PEPW_DETAILS          |          |              |
| OA_PKG_APP.SP_SELECT_PEPW_HEADER           |          |              |
| OA_PKG_APP.SP_SELECT_RES_PENDING_CLAIM     |          |              |
| OA_PKG_APP.SP_SELECT_RES_PERS_PROPERTY     |          |              |
| OA_PKG_APP.SP_SELECT_RES_REAL_ESTATE       |          |              |
| OA_PKG_APP.SP_SELECT_RES_TRADED_ITEM       |          |              |
| OA_PKG_APP.SP_SELECT_RESOURCE              |          |              |
| OA_PKG_APP.SP_SELECT_RESPONSIBLE_RELATIVE  |          |              |
| OA_PKG_APP.SP_SELECT_TANF_GA_HEADER        |          |              |
| OA_PKG_APP.SP_SELECT_VIOLATION             |          |              |
| OA_PKG_APP.SP_SEND_APPLICATION             |          |              |
| OA_PKG_APP.SP_UPDATE_APP_CONTACT           |          |              |
| OA_PKG_APP.SP_UPDATE_APP_HH_MEMBER         |          |              |
| OA_PKG_APP.SP_UPDATE_APP_PAGE_INFO         |          |              |
| OA_PKG_APP.SP_UPDATE_APPLICATION_ITEMS     |          |              |
| OA_PKG_APP.SP_UPDATE_APPLICATION_PROGRAMS  |          |              |
| OA_PKG_APP.SP_UPDATE_AUTHORIZED_REP        |          |              |
| OA_PKG_APP.SP_UPDATE_EMERGENCY_CONTACT     |          |              |
| OA_PKG_APP.SP_UPDATE_EXPENSE_CA_CARE       |          |              |
| OA_PKG_APP.SP_UPDATE_EXPENSE_CSUPPORT      |          |              |
| OA_PKG_APP.SP_UPDATE_EXPENSE_MEDICAL       |          |              |
| OA_PKG_APP.SP_UPDATE_EXPENSE_SHELTER       |          |              |
| OA_PKG_APP.SP_UPDATE_EXPENSE_UTILITY       |          |              |
| OA_PKG_APP.SP_UPDATE_FAMILY_CARE_DETAILS   |          |              |
| OA_PKG_APP.SP_UPDATE_FAMILY_CARE_HEADER    |          |              |
| OA_PKG_APP.SP_UPDATE_FOOD_STAMP_DETAILS    |          |              |
| OA_PKG_APP.SP_UPDATE_FOOD_STAMP_HEADER     |          |              |
| OA_PKG_APP.SP_UPDATE_FOOD_STAMP_INFO       |          |              |
| OA_PKG_APP.SP_UPDATE_HEALTH_INSURANCE      |          |              |
| OA_PKG_APP.SP_UPDATE_HHM_BASIC             |          |              |
| OA_PKG_APP.SP_UPDATE_HHM_OTHER             |          |              |
| OA_PKG_APP.SP_UPDATE_INCOME_EARNED         |          |              |
| OA_PKG_APP.SP_UPDATE_INCOME_HISTORY        |          |              |
| OA_PKG_APP.SP_UPDATE_INCOME_OTHER          |          |              |
| OA_PKG_APP.SP_UPDATE_INCOME_STUDENT        |          |              |
| OA_PKG_APP.SP_UPDATE_INCOME_UNEARNED       |          |              |
| OA_PKG_APP.SP_UPDATE_OTHER_MEMBER          |          |              |
| OA_PKG_APP.SP_UPDATE_PEPW_DETAILS          |          |              |
| OA_PKG_APP.SP_UPDATE_PEPW_HEADER           |          |              |
| OA_PKG_APP.SP_UPDATE_RES_PENDING_CLAIM     |          |              |
| OA_PKG_APP.SP_UPDATE_RES_PERS_PROPERTY     |          |              |
| OA_PKG_APP.SP_UPDATE_RES_REAL_ESTATE       |          |              |
| OA_PKG_APP.SP_UPDATE_RES_TRADED_ITEM       |          |              |
| OA_PKG_APP.SP_UPDATE_RESOURCE              |          |              |
| OA_PKG_APP.SP_UPDATE_RESPONSIBLE_RELATIVE  |          |              |
| OA_PKG_APP.SP_UPDATE_TANF_GA_HEADER        |          |              |
| OA_PKG_APP.SP_UPDATE_VIOLATION             |          |              |
| OA_PKG_APP.SP_VALIDATE_COUNTYWORKER        |          |              |
| OA_PKG_APP.SP_VALIDATE_HCSUA_SELECTION     |          |              |
| OA_PKG_APP.SP_VALIDATE_PAYEE               |          |              |
| OA_PKG_APP.SP_VALIDATE_PROGRAM             |          |              |
| OA_PKG_APP.SP_VALIDATE_ZIPCODE             |          |              |
| OA_PKG_GEN.SP_AUTHENTICATE_APP_USER        |    x     | [#121](i121) |
| OA_PKG_GEN.SP_GET_HINT                     |          | [#121](i121) |
| OA_PKG_GEN.SP_GET_USER_ID                  |          | [#121](i121) |
| OA_PKG_GEN.SP_INSERT_APP_USER              |    x     | [#121](i121) |
| OA_PKG_GEN.SP_INSERT_BROWSER_DETAILS       |          | [#121](i121) |
| OA_PKG_GEN.SP_INSERT_STATISTICS            |          | [#121](i121) |
| OA_PKG_GEN.SP_INSERT_TEMP_USER             |          | [#121](i121) |
| OA_PKG_GEN.SP_RESET_PASSWORD               |          | [#121](i121) |
| OA_PKG_GEN.SP_UPDATE_APP_USER              |          |              |
| OA_PKG_GEN.SP_UPDATE_CONV_LANGUAGE         |          |              |
| OA_PKG_GEN.SP_UPDATE_LAST_PAGE_NUMBER      |          |              |
| OA_PKG_GEN.SP_UPDATE_PASSWORD              |          | [#121](i121) |
| OA_PKG_TOOLS.SP_GENERATE_CONV_LANGUAGE     |          |              |
| OA_PKG_TOOLS.SP_UPDATE_STATISTICS          |          | [#121](i121) |
| OA_PKG_TXRX_EXAG.SP_BATCH_IMPORT_PAAD      |          |              |
| OA_PKG_UTIL.SP_DELETE_FS_ELIGIBILITY_CALCS |          |              |
| OA_PKG_UTIL.SP_SELECT_FC_ELIGIBILITY_CALCS |          |              |
| OA_PKG_UTIL.SP_SELECT_FS_ELIGIBILITY_CALCS |          |              |
| OA_PKG_UTIL.SP_SELECT_GA_ELIGIBILITY_CALCS |          |              |
| OA_PKG_UTIL.SP_SELECT_TF_ELIGIBILITY_CALCS |          |              |
| OA_PKG_UTIL.SP_UPDATE_FS_ELIGIBILITY_CALCS |          |              |

[i121]: https://github.com/newjersey/dhs-oneapp/issues/121

## Method Signatures

```
SELECT object_name, argument_name, in_out, data_type
FROM user_arguments
where object_name IN ('SP_DELETE_USER', 'SP_DELETE_USER_PAGE', 'SP_SELECT_APPLICATION', 'SP_SELECT_APPLICATION_HEADER', 'SP_SELECT_APPLICATION_ITEMS', 'SP_UPDATE_APPLICANT_DETAILS', 'SP_UPDATE_OA_STATUS_OPEN', 'SP_UPDATE_PAAD_IMPORT_COUNT', 'SP_UPDATE_PAAD_PARAMETERS', 'SP_DELETE_APP_CONTACT', 'SP_DELETE_APP_HH_MEMBER', 'SP_DELETE_APP_PAGE_INFO', 'SP_DELETE_APPLICATION_ITEMS', 'SP_DELETE_APPLICATION_PROGRAMS', 'SP_DELETE_AUTHORIZED_REP', 'SP_DELETE_EMERGENCY_CONTACT', 'SP_DELETE_EXPENSE_CA_CARE', 'SP_DELETE_EXPENSE_CSUPPORT', 'SP_DELETE_EXPENSE_MEDICAL', 'SP_DELETE_EXPENSE_SHELTER', 'SP_DELETE_EXPENSE_UTILITY', 'SP_DELETE_FAMILY_CARE_DETAILS', 'SP_DELETE_FAMILY_CARE_HEADER', 'SP_DELETE_FOOD_STAMP_DETAILS', 'SP_DELETE_FOOD_STAMP_HEADER', 'SP_DELETE_FOOD_STAMP_INFO', 'SP_DELETE_HEALTH_INSURANCE', 'SP_DELETE_HHM_BASIC', 'SP_DELETE_HHM_OTHER', 'SP_DELETE_INCOME_EARNED', 'SP_DELETE_INCOME_HISTORY', 'SP_DELETE_INCOME_OTHER', 'SP_DELETE_INCOME_STUDENT', 'SP_DELETE_INCOME_UNEARNED', 'SP_DELETE_OTHER_MEMBER', 'SP_DELETE_PEPW_DETAILS', 'SP_DELETE_PEPW_HEADER', 'SP_DELETE_RES_PENDING_CLAIM', 'SP_DELETE_RES_PERS_PROPERTY', 'SP_DELETE_RES_REAL_ESTATE', 'SP_DELETE_RES_TRADED_ITEM', 'SP_DELETE_RESOURCE', 'SP_DELETE_RESPONSIBLE_RELATIVE', 'SP_DELETE_SAP_APPLICATION', 'SP_DELETE_TANF_GA_HEADER', 'SP_DELETE_VIOLATION', 'SP_EXPORT_FS_DATA', 'SP_INSERT_FEEDBACK', 'SP_SELECT_APP_CONTACT', 'SP_SELECT_APP_HH_MEMBER', 'SP_SELECT_APP_HH_PARENT', 'SP_SELECT_APP_PAGE_INFO', 'SP_SELECT_APPLICATION_ALL', 'SP_SELECT_APPLICATION_ITEMS', 'SP_SELECT_APPLICATION_PROGRAMS', 'SP_SELECT_APPLICATION_STATUS', 'SP_SELECT_AUTHORIZED_REP', 'SP_SELECT_EMERGENCY_CONTACT', 'SP_SELECT_EXPENSE_CA_CARE', 'SP_SELECT_EXPENSE_CSUPPORT', 'SP_SELECT_EXPENSE_MEDICAL', 'SP_SELECT_EXPENSE_SHELTER', 'SP_SELECT_EXPENSE_UTILITY', 'SP_SELECT_FAMILY_CARE_DETAILS', 'SP_SELECT_FAMILY_CARE_HEADER', 'SP_SELECT_FOOD_STAMP_DETAILS', 'SP_SELECT_FOOD_STAMP_HEADER', 'SP_SELECT_FOOD_STAMP_INFO', 'SP_SELECT_HEALTH_INSURANCE', 'SP_SELECT_HHM_BASIC', 'SP_SELECT_HHM_OTHER', 'SP_SELECT_INCOME_EARNED', 'SP_SELECT_INCOME_HISTORY', 'SP_SELECT_INCOME_OTHER', 'SP_SELECT_INCOME_STUDENT', 'SP_SELECT_INCOME_UNEARNED', 'SP_SELECT_OTHER_MEMBER', 'SP_SELECT_PEPW_DETAILS', 'SP_SELECT_PEPW_HEADER', 'SP_SELECT_RES_PENDING_CLAIM', 'SP_SELECT_RES_PERS_PROPERTY', 'SP_SELECT_RES_REAL_ESTATE', 'SP_SELECT_RES_TRADED_ITEM', 'SP_SELECT_RESOURCE', 'SP_SELECT_RESPONSIBLE_RELATIVE', 'SP_SELECT_TANF_GA_HEADER', 'SP_SELECT_VIOLATION', 'SP_SEND_APPLICATION', 'SP_UPDATE_APP_CONTACT', 'SP_UPDATE_APP_HH_MEMBER', 'SP_UPDATE_APP_PAGE_INFO', 'SP_UPDATE_APPLICATION_ITEMS', 'SP_UPDATE_APPLICATION_PROGRAMS', 'SP_UPDATE_AUTHORIZED_REP', 'SP_UPDATE_EMERGENCY_CONTACT', 'SP_UPDATE_EXPENSE_CA_CARE', 'SP_UPDATE_EXPENSE_CSUPPORT', 'SP_UPDATE_EXPENSE_MEDICAL', 'SP_UPDATE_EXPENSE_SHELTER', 'SP_UPDATE_EXPENSE_UTILITY', 'SP_UPDATE_FAMILY_CARE_DETAILS', 'SP_UPDATE_FAMILY_CARE_HEADER', 'SP_UPDATE_FOOD_STAMP_DETAILS', 'SP_UPDATE_FOOD_STAMP_HEADER', 'SP_UPDATE_FOOD_STAMP_INFO', 'SP_UPDATE_HEALTH_INSURANCE', 'SP_UPDATE_HHM_BASIC', 'SP_UPDATE_HHM_OTHER', 'SP_UPDATE_INCOME_EARNED', 'SP_UPDATE_INCOME_HISTORY', 'SP_UPDATE_INCOME_OTHER', 'SP_UPDATE_INCOME_STUDENT', 'SP_UPDATE_INCOME_UNEARNED', 'SP_UPDATE_OTHER_MEMBER', 'SP_UPDATE_PEPW_DETAILS', 'SP_UPDATE_PEPW_HEADER', 'SP_UPDATE_RES_PENDING_CLAIM', 'SP_UPDATE_RES_PERS_PROPERTY', 'SP_UPDATE_RES_REAL_ESTATE', 'SP_UPDATE_RES_TRADED_ITEM', 'SP_UPDATE_RESOURCE', 'SP_UPDATE_RESPONSIBLE_RELATIVE', 'SP_UPDATE_TANF_GA_HEADER', 'SP_UPDATE_VIOLATION', 'SP_VALIDATE_COUNTYWORKER', 'SP_VALIDATE_HCSUA_SELECTION', 'SP_VALIDATE_PAYEE', 'SP_VALIDATE_PROGRAM', 'SP_VALIDATE_ZIPCODE', 'SP_AUTHENTICATE_APP_USER', 'SP_GET_HINT', 'SP_GET_USER_ID', 'SP_INSERT_APP_USER', 'SP_INSERT_BROWSER_DETAILS', 'SP_INSERT_STATISTICS', 'SP_INSERT_TEMP_USER', 'SP_RESET_PASSWORD', 'SP_UPDATE_APP_USER', 'SP_UPDATE_CONV_LANGUAGE', 'SP_UPDATE_LAST_PAGE_NUMBER', 'SP_UPDATE_PASSWORD', 'SP_GENERATE_CONV_LANGUAGE', 'SP_UPDATE_STATISTICS', 'SP_BATCH_IMPORT_PAAD', 'SP_DELETE_FS_ELIGIBILITY_CALCS', 'SP_SELECT_FC_ELIGIBILITY_CALCS', 'SP_SELECT_FS_ELIGIBILITY_CALCS', 'SP_SELECT_GA_ELIGIBILITY_CALCS', 'SP_SELECT_TF_ELIGIBILITY_CALCS', 'SP_UPDATE_FS_ELIGIBILITY_CALCS')
order by object_name, in_out;
```

| OBJECT_NAME                    | ARGUMENT_NAME             | IN_OUT | DATA_TYPE    |
| ------------------------------ | ------------------------- | ------ | ------------ |
| SP_AUTHENTICATE_APP_USER       | P_RT_USER                 | IN     | OBJECT       |
| SP_AUTHENTICATE_APP_USER       | P_MESSAGE                 | OUT    | NUMBER       |
| SP_DELETE_APPLICATION_ITEMS    | P_CODE                    | IN     | VARCHAR2     |
| SP_DELETE_APPLICATION_ITEMS    | P_CODE_TYPE               | IN     | VARCHAR2     |
| SP_DELETE_APPLICATION_ITEMS    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_APPLICATION_ITEMS    | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_APP_CONTACT          | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_APP_CONTACT          | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_APP_HH_MEMBER        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_APP_HH_MEMBER        | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_APP_HH_MEMBER        | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_APP_PAGE_INFO        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_APP_PAGE_INFO        | P_PAGE_ID                 | IN     | VARCHAR2     |
| SP_DELETE_APP_PAGE_INFO        | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_AUTHORIZED_REP       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_AUTHORIZED_REP       | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_EMERGENCY_CONTACT    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_EMERGENCY_CONTACT    | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_EXPENSE_CA_CARE      | P_EXPENSE_NUMBER          | IN     | NUMBER       |
| SP_DELETE_EXPENSE_CA_CARE      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_EXPENSE_CA_CARE      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_EXPENSE_CSUPPORT     | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_EXPENSE_CSUPPORT     | P_EXPENSE_NUMBER          | IN     | NUMBER       |
| SP_DELETE_EXPENSE_CSUPPORT     | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_EXPENSE_MEDICAL      | P_EXPENSE_NUMBER          | IN     | NUMBER       |
| SP_DELETE_EXPENSE_MEDICAL      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_EXPENSE_MEDICAL      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_EXPENSE_SHELTER      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_EXPENSE_SHELTER      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_EXPENSE_UTILITY      | P_EXPENSE_NUMBER          | IN     | NUMBER       |
| SP_DELETE_EXPENSE_UTILITY      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_EXPENSE_UTILITY      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_FAMILY_CARE_DETAILS  | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_FAMILY_CARE_DETAILS  | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_FAMILY_CARE_DETAILS  | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_FAMILY_CARE_HEADER   | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_FAMILY_CARE_HEADER   | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_FOOD_STAMP_DETAILS   | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_FOOD_STAMP_DETAILS   | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_FOOD_STAMP_DETAILS   | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_FOOD_STAMP_HEADER    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_FOOD_STAMP_HEADER    | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_HEALTH_INSURANCE     | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_HEALTH_INSURANCE     | P_HEALTH_INSURANCE_NUMBER | IN     | NUMBER       |
| SP_DELETE_HEALTH_INSURANCE     | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_HHM_BASIC            | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_HHM_BASIC            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_HHM_BASIC            | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_HHM_OTHER            | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_HHM_OTHER            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_HHM_OTHER            | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_INCOME_EARNED        | P_INCOME_NUMBER           | IN     | NUMBER       |
| SP_DELETE_INCOME_EARNED        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_INCOME_EARNED        | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_INCOME_HISTORY       | P_EMPLOYER_NUMBER         | IN     | NUMBER       |
| SP_DELETE_INCOME_HISTORY       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_INCOME_HISTORY       | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_INCOME_OTHER         | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_INCOME_OTHER         | P_INCOME_NUMBER           | IN     | NUMBER       |
| SP_DELETE_INCOME_OTHER         | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_INCOME_STUDENT       | P_INCOME_NUMBER           | IN     | NUMBER       |
| SP_DELETE_INCOME_STUDENT       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_INCOME_STUDENT       | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_INCOME_UNEARNED      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_INCOME_UNEARNED      | P_INCOME_NUMBER           | IN     | NUMBER       |
| SP_DELETE_INCOME_UNEARNED      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_OTHER_MEMBER         | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_OTHER_MEMBER         | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_OTHER_MEMBER         | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_RESOURCE             | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_RESOURCE             | P_RESOURCE_NUMBER         | IN     | NUMBER       |
| SP_DELETE_RESOURCE             | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_RESPONSIBLE_RELATIVE | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_RESPONSIBLE_RELATIVE | P_RELATIVE_NUMBER         | IN     | NUMBER       |
| SP_DELETE_RESPONSIBLE_RELATIVE | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_RES_PENDING_CLAIM    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_RES_PENDING_CLAIM    | P_RESOURCE_NUMBER         | IN     | NUMBER       |
| SP_DELETE_RES_PENDING_CLAIM    | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_RES_PERS_PROPERTY    | P_RESOURCE_NUMBER         | IN     | NUMBER       |
| SP_DELETE_RES_PERS_PROPERTY    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_RES_PERS_PROPERTY    | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_RES_REAL_ESTATE      | P_RESOURCE_NUMBER         | IN     | NUMBER       |
| SP_DELETE_RES_REAL_ESTATE      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_RES_REAL_ESTATE      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_RES_TRADED_ITEM      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_RES_TRADED_ITEM      | P_RESOURCE_NUMBER         | IN     | NUMBER       |
| SP_DELETE_RES_TRADED_ITEM      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_SAP_APPLICATION      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_SAP_APPLICATION      | P_STATUS                  | OUT    | NUMBER       |
| SP_DELETE_USER                 | SP_USER_ID                | IN     | VARCHAR2     |
| SP_DELETE_USER_PAGE            | SP_USER_ID                | IN     | VARCHAR2     |
| SP_DELETE_VIOLATION            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_DELETE_VIOLATION            | P_MEMBER_NUMBER           | IN     | NUMBER       |
| SP_DELETE_VIOLATION            | P_STATUS                  | OUT    | NUMBER       |
| SP_GENERATE_CONV_LANGUAGE      | SP_SEQUENCE_NUMBER        | IN     | NUMBER       |
| SP_GENERATE_CONV_LANGUAGE      | SP_CONTROL_ID             | IN     | VARCHAR2     |
| SP_GENERATE_CONV_LANGUAGE      | SP_CONTROL_TEXT           | IN     | VARCHAR2     |
| SP_GENERATE_CONV_LANGUAGE      | SP_PAGE_ID                | IN     | VARCHAR2     |
| SP_GET_HINT                    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_GET_HINT                    | P_RT_USER                 | IN/OUT | OBJECT       |
| SP_GET_HINT                    | P_MESSAGE                 | OUT    | NUMBER       |
| SP_GET_USER_ID                 | P_RT_USER                 | IN/OUT | OBJECT       |
| SP_GET_USER_ID                 | P_MESSAGE                 | OUT    | NUMBER       |
| SP_INSERT_APP_USER             | P_RT_USER                 | IN     | OBJECT       |
| SP_INSERT_APP_USER             | P_MESSAGE                 | OUT    | NUMBER       |
| SP_INSERT_BROWSER_DETAILS      | P_B_AOL                   | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_ACTIVEXCONTROLS       | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_JAVASCRIPT            | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_COOKIES               | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_TABLES                | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_FRAMES                | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_SESSION_ID              | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_TYPE                  | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_NAME                  | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_VERSION               | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_MAJORVERSION          | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_MINORVERSION          | IN     | VARCHAR2     |
| SP_INSERT_BROWSER_DETAILS      | P_B_PLATFORM              | IN     | VARCHAR2     |
| SP_INSERT_FEEDBACK             | P_INFORMATION_SOURCE      | IN     | VARCHAR2     |
| SP_INSERT_FEEDBACK             | P_HOW_SATISFIED           | IN     | VARCHAR2     |
| SP_INSERT_FEEDBACK             | P_COMMENTS                | IN     | VARCHAR2     |
| SP_INSERT_STATISTICS           | P_BROWSER                 | IN     | VARCHAR2     |
| SP_INSERT_STATISTICS           | P_SOURCE                  | IN     | VARCHAR2     |
| SP_INSERT_TEMP_USER            | V_TEMP_USERID             | OUT    | VARCHAR2     |
| SP_RESET_PASSWORD              | P_RT_USER                 | IN/OUT | OBJECT       |
| SP_RESET_PASSWORD              | P_MESSAGE                 | OUT    | NUMBER       |
| SP_SELECT_APPLICATION          | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION          | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION          | P_RESOURCE                | OUT    | TABLE        |
| SP_SELECT_APPLICATION          | P_FOOD_STAMP_INFO         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_FOOD_STAMP_HEADER       | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_VIOLATION               | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_AUTHORIZED_REP          | OUT    | TABLE        |
| SP_SELECT_APPLICATION          | P_APP_CONTACT             | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_HHM_BASIC               | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_HHM_OTHER               | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_INCOME_EARNED           | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_INCOME_UNEARNED         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_EXPENSE_SHELTER         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_EXPENSE_MEDICAL         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_EXPENSE_CA_CARE         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_EXPENSE_CSUPPORT        | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_HEALTH_INSURANCE        | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_RES_PENDING_CLAIM       | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_RES_TRADED_ITEM         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_RES_REAL_ESTATE         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_RES_PERS_PROPERTY       | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_EMERGENCY_CONTACT       | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_FOOD_STAMP_DETAILS      | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_INCOME_STUDENT          | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_INCOME_HISTORY          | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_INCOME_OTHER            | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_EXPENSE_UTILITY         | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION          | P_OTHER_MEMBER            | OUT    | TABLE        |
| SP_SELECT_APPLICATION          |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_ALL      | P_USER_ID                 | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ALL      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ALL      |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_ALL      | P_APPLICATION_PURGED      | OUT    | TABLE        |
| SP_SELECT_APPLICATION_ALL      |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_ALL      | P_APPLICATION_UNFINISHED  | OUT    | TABLE        |
| SP_SELECT_APPLICATION_ALL      |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_ALL      | P_APPLICATION_FINISHED    | OUT    | TABLE        |
| SP_SELECT_APPLICATION_HEADER   | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_HEADER   | CUR_HEADER                | OUT    | REF CURSOR   |
| SP_SELECT_APPLICATION_ITEMS    | P_CODE_TYPE               | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ITEMS    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ITEMS    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ITEMS    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ITEMS    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_ITEMS    | P_APPLICATION_ITEMS       | OUT    | TABLE        |
| SP_SELECT_APPLICATION_ITEMS    |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_ITEMS    |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_ITEMS    | P_APPLICATION_ITEMS       | OUT    | TABLE        |
| SP_SELECT_APPLICATION_PROGRAMS | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_PROGRAMS | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_PROGRAMS | P_APPLICATION_PROGRAMS    | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_STATUS   | P_USER_ID                 | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_STATUS   | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_STATUS   | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_STATUS   | P_DOB                     | IN     | DATE         |
| SP_SELECT_APPLICATION_STATUS   | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APPLICATION_STATUS   |                           | OUT    | OBJECT       |
| SP_SELECT_APPLICATION_STATUS   | P_APPLICATION_STATUS      | OUT    | TABLE        |
| SP_SELECT_APPLICATION_STATUS   | P_APPLICATION_STATUS      | OUT    | TABLE        |
| SP_SELECT_APPLICATION_STATUS   |                           | OUT    | OBJECT       |
| SP_SELECT_APP_CONTACT          | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APP_CONTACT          | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APP_CONTACT          | P_APP_CONTACT             | OUT    | TABLE        |
| SP_SELECT_APP_CONTACT          |                           | OUT    | OBJECT       |
| SP_SELECT_APP_HH_MEMBER        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APP_HH_MEMBER        | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APP_HH_MEMBER        | P_APP_HH_MEMBER           | OUT    | TABLE        |
| SP_SELECT_APP_HH_MEMBER        |                           | OUT    | OBJECT       |
| SP_SELECT_APP_HH_PARENT        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APP_HH_PARENT        | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APP_HH_PARENT        |                           | OUT    | OBJECT       |
| SP_SELECT_APP_HH_PARENT        | P_APP_HH_MEMBER           | OUT    | TABLE        |
| SP_SELECT_APP_PAGE_INFO        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APP_PAGE_INFO        | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APP_PAGE_INFO        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_APP_PAGE_INFO        | P_PAGE_ID                 | IN     | VARCHAR2     |
| SP_SELECT_APP_PAGE_INFO        | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_APP_PAGE_INFO        |                           | OUT    | OBJECT       |
| SP_SELECT_APP_PAGE_INFO        | P_APPLICATION_PAGE_INFO   | OUT    | TABLE        |
| SP_SELECT_APP_PAGE_INFO        | P_APPLICATION_PAGE_INFO   | OUT    | OBJECT       |
| SP_SELECT_AUTHORIZED_REP       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_AUTHORIZED_REP       | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_AUTHORIZED_REP       | P_AUTHORIZED_REP          | OUT    | TABLE        |
| SP_SELECT_AUTHORIZED_REP       |                           | OUT    | OBJECT       |
| SP_SELECT_EMERGENCY_CONTACT    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EMERGENCY_CONTACT    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EMERGENCY_CONTACT    | P_EMERGENCY_CONTACT       | OUT    | TABLE        |
| SP_SELECT_EMERGENCY_CONTACT    |                           | OUT    | OBJECT       |
| SP_SELECT_EXPENSE_CA_CARE      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_CA_CARE      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_CA_CARE      | P_EXPENSE_CA_CARE         | OUT    | TABLE        |
| SP_SELECT_EXPENSE_CA_CARE      |                           | OUT    | OBJECT       |
| SP_SELECT_EXPENSE_CSUPPORT     | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_CSUPPORT     | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_CSUPPORT     |                           | OUT    | OBJECT       |
| SP_SELECT_EXPENSE_CSUPPORT     | P_EXPENSE_CSUPPORT        | OUT    | TABLE        |
| SP_SELECT_EXPENSE_MEDICAL      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_MEDICAL      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_MEDICAL      | P_EXPENSE_MEDICAL         | OUT    | TABLE        |
| SP_SELECT_EXPENSE_MEDICAL      |                           | OUT    | OBJECT       |
| SP_SELECT_EXPENSE_SHELTER      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_SHELTER      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_SHELTER      | P_EXPENSE_SHELTER         | OUT    | TABLE        |
| SP_SELECT_EXPENSE_SHELTER      |                           | OUT    | OBJECT       |
| SP_SELECT_EXPENSE_UTILITY      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_UTILITY      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_UTILITY      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_UTILITY      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_EXPENSE_UTILITY      | P_EXPENSE_UTILITY         | OUT    | TABLE        |
| SP_SELECT_EXPENSE_UTILITY      |                           | OUT    | OBJECT       |
| SP_SELECT_EXPENSE_UTILITY      | P_EXPENSE_UTILITY         | OUT    | TABLE        |
| SP_SELECT_EXPENSE_UTILITY      |                           | OUT    | OBJECT       |
| SP_SELECT_FAMILY_CARE_DETAILS  | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FAMILY_CARE_DETAILS  | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FAMILY_CARE_DETAILS  | P_FAMILY_CARE_DETAILS     | OUT    | TABLE        |
| SP_SELECT_FAMILY_CARE_DETAILS  |                           | OUT    | OBJECT       |
| SP_SELECT_FAMILY_CARE_HEADER   | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FAMILY_CARE_HEADER   | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FAMILY_CARE_HEADER   | P_FAMILY_CARE_HEADER      | OUT    | TABLE        |
| SP_SELECT_FAMILY_CARE_HEADER   |                           | OUT    | OBJECT       |
| SP_SELECT_FC_ELIGIBILITY_CALCS | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FC_ELIGIBILITY_CALCS | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FC_ELIGIBILITY_CALCS |                           | OUT    | OBJECT       |
| SP_SELECT_FC_ELIGIBILITY_CALCS | P_FC_ELIGIBILITY_CALCS    | OUT    | TABLE        |
| SP_SELECT_FOOD_STAMP_DETAILS   | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FOOD_STAMP_DETAILS   | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FOOD_STAMP_DETAILS   |                           | OUT    | OBJECT       |
| SP_SELECT_FOOD_STAMP_DETAILS   | P_FOOD_STAMP_DETAILS      | OUT    | TABLE        |
| SP_SELECT_FOOD_STAMP_HEADER    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FOOD_STAMP_HEADER    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FOOD_STAMP_HEADER    |                           | OUT    | OBJECT       |
| SP_SELECT_FOOD_STAMP_HEADER    | P_FOOD_STAMP_HEADER       | OUT    | TABLE        |
| SP_SELECT_FOOD_STAMP_INFO      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FOOD_STAMP_INFO      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FOOD_STAMP_INFO      | P_FOOD_STAMP_INFO         | OUT    | TABLE        |
| SP_SELECT_FOOD_STAMP_INFO      |                           | OUT    | OBJECT       |
| SP_SELECT_FS_ELIGIBILITY_CALCS | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_FS_ELIGIBILITY_CALCS | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_FS_ELIGIBILITY_CALCS |                           | OUT    | OBJECT       |
| SP_SELECT_FS_ELIGIBILITY_CALCS | P_FS_ELIGIBILITY_CALCS    | OUT    | TABLE        |
| SP_SELECT_GA_ELIGIBILITY_CALCS | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_GA_ELIGIBILITY_CALCS | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_GA_ELIGIBILITY_CALCS | P_GA_ELIGIBILITY_CALCS    | OUT    | TABLE        |
| SP_SELECT_GA_ELIGIBILITY_CALCS |                           | OUT    | OBJECT       |
| SP_SELECT_HEALTH_INSURANCE     | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_HEALTH_INSURANCE     | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_HEALTH_INSURANCE     | P_HEALTH_INSURANCE        | OUT    | TABLE        |
| SP_SELECT_HEALTH_INSURANCE     |                           | OUT    | OBJECT       |
| SP_SELECT_HHM_BASIC            | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_HHM_BASIC            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_HHM_BASIC            |                           | OUT    | OBJECT       |
| SP_SELECT_HHM_BASIC            | P_HHM_BASIC               | OUT    | TABLE        |
| SP_SELECT_HHM_OTHER            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_HHM_OTHER            | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_HHM_OTHER            |                           | OUT    | OBJECT       |
| SP_SELECT_HHM_OTHER            | P_HHM_OTHER               | OUT    | TABLE        |
| SP_SELECT_INCOME_EARNED        | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_INCOME_EARNED        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_INCOME_EARNED        |                           | OUT    | OBJECT       |
| SP_SELECT_INCOME_EARNED        | P_INCOME_EARNED           | OUT    | TABLE        |
| SP_SELECT_INCOME_HISTORY       | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_INCOME_HISTORY       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_INCOME_HISTORY       | P_INCOME_HISTORY          | OUT    | TABLE        |
| SP_SELECT_INCOME_HISTORY       |                           | OUT    | OBJECT       |
| SP_SELECT_INCOME_OTHER         | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_INCOME_OTHER         | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_INCOME_OTHER         | P_INCOME_OTHER            | OUT    | TABLE        |
| SP_SELECT_INCOME_OTHER         |                           | OUT    | OBJECT       |
| SP_SELECT_INCOME_STUDENT       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_INCOME_STUDENT       | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_INCOME_STUDENT       | P_INCOME_STUDENT          | OUT    | TABLE        |
| SP_SELECT_INCOME_STUDENT       |                           | OUT    | OBJECT       |
| SP_SELECT_INCOME_UNEARNED      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_INCOME_UNEARNED      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_INCOME_UNEARNED      |                           | OUT    | OBJECT       |
| SP_SELECT_INCOME_UNEARNED      | P_INCOME_UNEARNED         | OUT    | TABLE        |
| SP_SELECT_OTHER_MEMBER         | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_OTHER_MEMBER         | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_OTHER_MEMBER         | P_OTHER_MEMBER            | OUT    | TABLE        |
| SP_SELECT_OTHER_MEMBER         |                           | OUT    | OBJECT       |
| SP_SELECT_RESOURCE             | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_RESOURCE             | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_RESOURCE             | P_RESOURCE                | OUT    | TABLE        |
| SP_SELECT_RESOURCE             |                           | OUT    | OBJECT       |
| SP_SELECT_RESPONSIBLE_RELATIVE | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_RESPONSIBLE_RELATIVE | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_RESPONSIBLE_RELATIVE | P_RESPONSIBLE_RELATIVE    | OUT    | TABLE        |
| SP_SELECT_RESPONSIBLE_RELATIVE |                           | OUT    | OBJECT       |
| SP_SELECT_RES_PENDING_CLAIM    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_RES_PENDING_CLAIM    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_RES_PENDING_CLAIM    | P_RES_PENDING_CLAIM       | OUT    | TABLE        |
| SP_SELECT_RES_PENDING_CLAIM    |                           | OUT    | OBJECT       |
| SP_SELECT_RES_PERS_PROPERTY    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_RES_PERS_PROPERTY    | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_RES_PERS_PROPERTY    |                           | OUT    | OBJECT       |
| SP_SELECT_RES_PERS_PROPERTY    | P_RES_PERS_PROPERTY       | OUT    | TABLE        |
| SP_SELECT_RES_REAL_ESTATE      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_RES_REAL_ESTATE      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_RES_REAL_ESTATE      | P_RES_REAL_ESTATE         | OUT    | TABLE        |
| SP_SELECT_RES_REAL_ESTATE      |                           | OUT    | OBJECT       |
| SP_SELECT_RES_TRADED_ITEM      | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_RES_TRADED_ITEM      | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_RES_TRADED_ITEM      | P_RES_TRADED_ITEM         | OUT    | TABLE        |
| SP_SELECT_RES_TRADED_ITEM      |                           | OUT    | OBJECT       |
| SP_SELECT_TANF_GA_HEADER       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_TANF_GA_HEADER       | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_TANF_GA_HEADER       | P_TANF_GA_HEADER          | OUT    | TABLE        |
| SP_SELECT_TANF_GA_HEADER       |                           | OUT    | OBJECT       |
| SP_SELECT_TF_ELIGIBILITY_CALCS | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_TF_ELIGIBILITY_CALCS | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_TF_ELIGIBILITY_CALCS | P_TF_ELIGIBILITY_CALCS    | OUT    | TABLE        |
| SP_SELECT_TF_ELIGIBILITY_CALCS |                           | OUT    | OBJECT       |
| SP_SELECT_VIOLATION            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SELECT_VIOLATION            | P_SELECTED_LANGUAGE       | IN     | VARCHAR2     |
| SP_SELECT_VIOLATION            |                           | OUT    | OBJECT       |
| SP_SELECT_VIOLATION            | P_VIOLATION               | OUT    | TABLE        |
| SP_SEND_APPLICATION            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_SEND_APPLICATION            | P_DISCLAIMER_UNDERSTOOD   | IN     | VARCHAR2     |
| SP_SEND_APPLICATION            | CUR_INFO                  | OUT    | REF CURSOR   |
| SP_UPDATE_APPLICANT_DETAILS    | SP_APPLICATION_NUMBER     | IN     | VARCHAR2     |
| SP_UPDATE_APPLICANT_DETAILS    | SP_FS_GRANTED             | IN     | VARCHAR2     |
| SP_UPDATE_APPLICANT_DETAILS    | SP_IS_EXPEDITED_ELIGIBLE  | IN     | VARCHAR2     |
| SP_UPDATE_APPLICANT_DETAILS    | SP_USERID                 | IN     | VARCHAR2     |
| SP_UPDATE_APPLICANT_DETAILS    | SP_COMMENTS               | IN     | VARCHAR2     |
| SP_UPDATE_APPLICANT_DETAILS    | SP_CASE_NUMBER            | IN     | VARCHAR2     |
| SP_UPDATE_APPLICANT_DETAILS    | SP_INTERVIEW_DATE         | IN     | DATE         |
| SP_UPDATE_APPLICATION_ITEMS    | P_APPLICATION_ITEMS       | IN     | TABLE        |
| SP_UPDATE_APPLICATION_ITEMS    |                           | IN     | OBJECT       |
| SP_UPDATE_APPLICATION_ITEMS    | P_APPLICATION_ITEMS       | IN     | OBJECT       |
| SP_UPDATE_APPLICATION_ITEMS    | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_APPLICATION_ITEMS    | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_APPLICATION_PROGRAMS | P_APPLICATION_PROGRAMS    | IN     | OBJECT       |
| SP_UPDATE_APPLICATION_PROGRAMS | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_APP_CONTACT          | P_APP_CONTACT             | IN     | OBJECT       |
| SP_UPDATE_APP_CONTACT          | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_APP_HH_MEMBER        | P_APP_HH_MEMBER           | IN     | OBJECT       |
| SP_UPDATE_APP_HH_MEMBER        | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_APP_PAGE_INFO        | P_APPLICATION_PAGE_INFO   | IN     | OBJECT       |
| SP_UPDATE_APP_PAGE_INFO        | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_APP_USER             | P_RT_USER                 | IN     | OBJECT       |
| SP_UPDATE_APP_USER             | P_MESSAGE                 | OUT    | NUMBER       |
| SP_UPDATE_AUTHORIZED_REP       | P_AUTHORIZED_REP          | IN     | OBJECT       |
| SP_UPDATE_AUTHORIZED_REP       | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_CONV_LANGUAGE        | P_CONVERSION_LANGUAGE     | IN     | VARCHAR2     |
| SP_UPDATE_CONV_LANGUAGE        | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_UPDATE_EMERGENCY_CONTACT    | P_EMERGENCY_CONTACT       | IN     | OBJECT       |
| SP_UPDATE_EMERGENCY_CONTACT    | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_EXPENSE_CA_CARE      | P_EXPENSE_CA_CARE         | IN     | OBJECT       |
| SP_UPDATE_EXPENSE_CA_CARE      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_EXPENSE_CSUPPORT     | P_EXPENSE_CSUPPORT        | IN     | OBJECT       |
| SP_UPDATE_EXPENSE_CSUPPORT     | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_EXPENSE_MEDICAL      | P_EXPENSE_MEDICAL         | IN     | OBJECT       |
| SP_UPDATE_EXPENSE_MEDICAL      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_EXPENSE_SHELTER      | P_EXPENSE_SHELTER         | IN     | OBJECT       |
| SP_UPDATE_EXPENSE_SHELTER      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_EXPENSE_UTILITY      | P_EXPENSE_UTILITY         | IN     | OBJECT       |
| SP_UPDATE_EXPENSE_UTILITY      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_FAMILY_CARE_DETAILS  | P_FAMILY_CARE_DETAILS     | IN     | OBJECT       |
| SP_UPDATE_FAMILY_CARE_DETAILS  | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_FAMILY_CARE_HEADER   | P_FAMILY_CARE_HEADER      | IN     | OBJECT       |
| SP_UPDATE_FAMILY_CARE_HEADER   | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_FOOD_STAMP_DETAILS   | P_FOOD_STAMP_DETAILS      | IN     | OBJECT       |
| SP_UPDATE_FOOD_STAMP_DETAILS   | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_FOOD_STAMP_HEADER    | P_FOOD_STAMP_HEADER       | IN     | OBJECT       |
| SP_UPDATE_FOOD_STAMP_HEADER    | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_FOOD_STAMP_INFO      | P_FOOD_STAMP_INFO         | IN     | OBJECT       |
| SP_UPDATE_FOOD_STAMP_INFO      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_HEALTH_INSURANCE     | P_HEALTH_INSURANCE        | IN     | OBJECT       |
| SP_UPDATE_HEALTH_INSURANCE     | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_HHM_BASIC            | P_HHM_BASIC               | IN     | OBJECT       |
| SP_UPDATE_HHM_BASIC            | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_HHM_OTHER            | P_HHM_OTHER               | IN     | OBJECT       |
| SP_UPDATE_HHM_OTHER            | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_INCOME_EARNED        | P_INCOME_EARNED           | IN     | OBJECT       |
| SP_UPDATE_INCOME_EARNED        | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_INCOME_HISTORY       | P_INCOME_HISTORY          | IN     | OBJECT       |
| SP_UPDATE_INCOME_HISTORY       | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_INCOME_OTHER         | P_INCOME_OTHER            | IN     | OBJECT       |
| SP_UPDATE_INCOME_OTHER         | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_INCOME_STUDENT       | P_INCOME_STUDENT          | IN     | OBJECT       |
| SP_UPDATE_INCOME_STUDENT       | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_INCOME_UNEARNED      | P_INCOME_UNEARNED         | IN     | OBJECT       |
| SP_UPDATE_INCOME_UNEARNED      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_LAST_PAGE_NUMBER     | P_LAST_PAGE_NUMBER        | IN     | NUMBER       |
| SP_UPDATE_LAST_PAGE_NUMBER     | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_UPDATE_OA_STATUS_OPEN       | SP_APPLICATION_NUMBER     | IN     | VARCHAR2     |
| SP_UPDATE_OA_STATUS_OPEN       | SP_USERID                 | IN     | VARCHAR2     |
| SP_UPDATE_OTHER_MEMBER         | P_OTHER_MEMBER            | IN     | OBJECT       |
| SP_UPDATE_OTHER_MEMBER         | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_PAAD_IMPORT_COUNT    | P_IMPORT_COUNT            | IN     | NUMBER       |
| SP_UPDATE_PAAD_IMPORT_COUNT    | P_COUNTY_NUMBER           | IN     | VARCHAR2     |
| SP_UPDATE_PAAD_PARAMETERS      | P_IMPORT_DATE             | IN     | DATE         |
| SP_UPDATE_PAAD_PARAMETERS      | P_IDS                     | IN     | NUMBER       |
| SP_UPDATE_PAAD_PARAMETERS      | P_IDC2                    | IN     | NUMBER       |
| SP_UPDATE_PAAD_PARAMETERS      | P_IMPORT_NUMBER           | IN     | NUMBER       |
| SP_UPDATE_PAAD_PARAMETERS      | P_DISTRIBUTION_TYPE       | IN     | VARCHAR2     |
| SP_UPDATE_PAAD_PARAMETERS      | P_IDC                     | IN     | NUMBER       |
| SP_UPDATE_PAAD_PARAMETERS      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_PASSWORD             | P_RT_USER                 | IN/OUT | OBJECT       |
| SP_UPDATE_PASSWORD             | P_MESSAGE                 | OUT    | NUMBER       |
| SP_UPDATE_RESOURCE             | P_RESOURCE                | IN     | OBJECT       |
| SP_UPDATE_RESOURCE             | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_RESPONSIBLE_RELATIVE | P_RESPONSIBLE_RELATIVE    | IN     | OBJECT       |
| SP_UPDATE_RESPONSIBLE_RELATIVE | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_RES_PENDING_CLAIM    | P_RES_PENDING_CLAIM       | IN     | OBJECT       |
| SP_UPDATE_RES_PENDING_CLAIM    | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_RES_PERS_PROPERTY    | P_RES_PERS_PROPERTY       | IN     | OBJECT       |
| SP_UPDATE_RES_PERS_PROPERTY    | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_RES_REAL_ESTATE      | P_RES_REAL_ESTATE         | IN     | OBJECT       |
| SP_UPDATE_RES_REAL_ESTATE      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_RES_TRADED_ITEM      | P_RES_TRADED_ITEM         | IN     | OBJECT       |
| SP_UPDATE_RES_TRADED_ITEM      | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_STATISTICS           | P_NH_STAT_DATE            | IN     | PL/SQL TABLE |
| SP_UPDATE_STATISTICS           |                           | IN     | DATE         |
| SP_UPDATE_STATISTICS           |                           | IN     | NUMBER       |
| SP_UPDATE_STATISTICS           |                           | IN     | NUMBER       |
| SP_UPDATE_STATISTICS           | P_NH_TOTAL_SCREENINGS     | IN     | PL/SQL TABLE |
| SP_UPDATE_STATISTICS           | P_NH_TOTAL_VISITS         | IN     | PL/SQL TABLE |
| SP_UPDATE_TANF_GA_HEADER       | P_TANF_GA_HEADER          | IN     | OBJECT       |
| SP_UPDATE_TANF_GA_HEADER       | P_STATUS                  | OUT    | NUMBER       |
| SP_UPDATE_VIOLATION            | P_VIOLATION               | IN     | OBJECT       |
| SP_UPDATE_VIOLATION            | P_STATUS                  | OUT    | NUMBER       |
| SP_VALIDATE_COUNTYWORKER       | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_VALIDATE_COUNTYWORKER       | P_DISCLAIMER_UNDERSTOOD   | IN     | VARCHAR2     |
| SP_VALIDATE_COUNTYWORKER       | P_CW_USER                 | IN     | VARCHAR2     |
| SP_VALIDATE_COUNTYWORKER       | P_CW_EXIST                | OUT    | NUMBER       |
| SP_VALIDATE_HCSUA_SELECTION    | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_VALIDATE_HCSUA_SELECTION    | P_IS_HCSUA_COMPLETE       | OUT    | NUMBER       |
| SP_VALIDATE_PAYEE              | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_VALIDATE_PAYEE              | P_SELECTED                | OUT    | NUMBER       |
| SP_VALIDATE_PROGRAM            | P_APPLICATION_NUMBER      | IN     | VARCHAR2     |
| SP_VALIDATE_PROGRAM            | P_SELECTED                | OUT    | NUMBER       |
| SP_VALIDATE_ZIPCODE            | P_ZIP                     | IN     | VARCHAR2     |
| SP_VALIDATE_ZIPCODE            | P_COUNTY                  | IN     | VARCHAR2     |
| SP_VALIDATE_ZIPCODE            | P_IS_HOMELESS             | IN     | VARCHAR2     |
| SP_VALIDATE_ZIPCODE            | P_ZIP_EXIST               | OUT    | NUMBER       |