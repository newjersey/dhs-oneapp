# OneApp Stored Procedures

- [Stored Procedure List](#stored-procedure-list)
- [Method Signatures](#method-signatures)
- [Object Types](#object-types)

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

## Object Types

```
select name, line, text from user_source where name LIKE 'OA_RT%' order by name;
```

|NAME|LINE|TEXT|
|----|----|----|
|OA_RT_ADDRESS_HISTORY|1|TYPE             "OA_RT_ADDRESS_HISTORY"                                          AS OBJECT(|
|OA_RT_ADDRESS_HISTORY|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_ADDRESS_HISTORY|3|  ADDRESS_NUMBER NUMBER(12),|
|OA_RT_ADDRESS_HISTORY|4|  ADDRESS1 VARCHAR2(50),|
|OA_RT_ADDRESS_HISTORY|5|  ADDRESS2 VARCHAR2(50),|
|OA_RT_ADDRESS_HISTORY|6|  CITY VARCHAR2(50),|
|OA_RT_ADDRESS_HISTORY|7|  STATE VARCHAR2(150),|
|OA_RT_ADDRESS_HISTORY|8|  ZIP VARCHAR2(10),|
|OA_RT_ADDRESS_HISTORY|9|  FROM_DATE DATE,|
|OA_RT_ADDRESS_HISTORY|10|  TO_DATE DATE)|
|OA_RT_APPLICATION_ITEMS|1|TYPE             "OA_RT_APPLICATION_ITEMS"                                          AS OBJECT(|
|OA_RT_APPLICATION_ITEMS|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_APPLICATION_ITEMS|3|  CODE_TYPE VARCHAR2(10),|
|OA_RT_APPLICATION_ITEMS|4|  CODE VARCHAR2(10),|
|OA_RT_APPLICATION_ITEMS|5|  HAVE_THIS VARCHAR2(150)|
|OA_RT_APPLICATION_ITEMS|6|);|
|OA_RT_APPLICATION_OTHER|1|TYPE             "OA_RT_APPLICATION_OTHER"                                          AS OBJECT(|
|OA_RT_APPLICATION_OTHER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_APPLICATION_OTHER|3|  SPOKEN_LANGUAGE VARCHAR2(150),|
|OA_RT_APPLICATION_OTHER|4|  HEAD_MEMBER_NUMBER NUMBER(12),|
|OA_RT_APPLICATION_OTHER|5|  LAST_INCOME_DATE DATE,|
|OA_RT_APPLICATION_OTHER|6|  LAST_INCOME_SOURCE VARCHAR2(100),|
|OA_RT_APPLICATION_OTHER|7|  IS_EXPECTING_CHANGE VARCHAR2(150),|
|OA_RT_APPLICATION_OTHER|8|  CHANGE_COMMENTS VARCHAR2(999),|
|OA_RT_APPLICATION_OTHER|9|  HEA_CODE VARCHAR2(150),|
|OA_RT_APPLICATION_OTHER|10|  IS_PAYING_HCU_SEPERATELY VARCHAR2(150),|
|OA_RT_APPLICATION_OTHER|11|  HAVE_ACTIVE_CASE_CURRENTLY VARCHAR2(150),|
|OA_RT_APPLICATION_OTHER|12|  CURRENT_CASE_NUMBERS VARCHAR2(50),|
|OA_RT_APPLICATION_OTHER|13|  HAD_ACTIVE_CASE_PREVIOULSY VARCHAR2(150),|
|OA_RT_APPLICATION_OTHER|14|  PREVIOUS_CASE_NUMBERS VARCHAR2(50))|
|OA_RT_APPLICATION_PAGE_INFO|1|TYPE             "OA_RT_APPLICATION_PAGE_INFO"                                          AS OBJECT(|
|OA_RT_APPLICATION_PAGE_INFO|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_APPLICATION_PAGE_INFO|3|  PAGE_ID VARCHAR2(10),|
|OA_RT_APPLICATION_PAGE_INFO|4|  VALIDATION_CODE VARCHAR2(100),|
|OA_RT_APPLICATION_PAGE_INFO|5|  ROW_COUNT NUMBER(3),|
|OA_RT_APPLICATION_PAGE_INFO|6|  ROW_NUMBER NUMBER(3),|
|OA_RT_APPLICATION_PAGE_INFO|7|  COMMAND_MODE NUMBER(1),|
|OA_RT_APPLICATION_PAGE_INFO|8|  PAGE_NAME VARCHAR2(100),|
|OA_RT_APPLICATION_PAGE_INFO|9|  REQUIRED_FOR VARCHAR2(200),|
|OA_RT_APPLICATION_PAGE_INFO|10|  PAGE_LOCATION VARCHAR2(200));|
|OA_RT_APPLICATION_PAGE_INFO|11|  |
|OA_RT_APPLICATION_PAGE_INFO|12|  |
|OA_RT_APPLICATION_PROGRAMS|1|TYPE             "OA_RT_APPLICATION_PROGRAMS"                                          AS OBJECT(|
|OA_RT_APPLICATION_PROGRAMS|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_APPLICATION_PROGRAMS|3|  IS_FS_ELIGIBLE VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|4|  FS_ELIGIBLE_AMOUNT NUMBER(12),|
|OA_RT_APPLICATION_PROGRAMS|5|  IS_MA_ELIGIBLE VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|6|  MA_ELIGIBLE_PROGRAMS VARCHAR2(50),|
|OA_RT_APPLICATION_PROGRAMS|7|  IS_TF_ELIGIBLE VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|8|  TF_ELIGIBLE_AMOUNT NUMBER(12),|
|OA_RT_APPLICATION_PROGRAMS|9|  IS_GA_ELIGIBLE VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|10|  GA_ELIGIBLE_AMOUNT NUMBER(12),|
|OA_RT_APPLICATION_PROGRAMS|11|  IS_FS_SELECTED VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|12|  IS_MA_SELECTED VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|13|  IS_TF_SELECTED VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|14|  IS_GA_SELECTED VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|15|  HAVE_ACTIVE_CASE_CURRENTLY VARCHAR2(150),|
|OA_RT_APPLICATION_PROGRAMS|16|  CURRENT_CASE_NUMBERS VARCHAR2(50),|
|OA_RT_APPLICATION_PROGRAMS|17|  HAD_ACTIVE_CASE_PREVIOULSY VARCHAR2(150),|
|OA_RT_APPLICATION_PROGRAMS|18|  PREVIOUS_CASE_NUMBERS VARCHAR2(50),|
|OA_RT_APPLICATION_PROGRAMS|19|  SPOKEN_LANGUAGE VARCHAR2(150),|
|OA_RT_APPLICATION_PROGRAMS|20|  HAS_PAYEE NUMBER(12),|
|OA_RT_APPLICATION_PROGRAMS|21|  NEED_ACCOMODATION VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|22|  NEED_ACM_TRANSLATOR VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|23|  NEED_ACM_SIGNING VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|24|  NEED_ACM_VISUALLY_IMPAIRED VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|25|  NEED_ACM_OTHER VARCHAR2(10),|
|OA_RT_APPLICATION_PROGRAMS|26|  ACM_TRA_LANGUAGE VARCHAR2(150),|
|OA_RT_APPLICATION_PROGRAMS|27|  ACM_OTH_DESCRIPTION VARCHAR2(500))|
|OA_RT_APPLICATION_STATUS|1|TYPE             "OA_RT_APPLICATION_STATUS"                                          AS OBJECT(|
|OA_RT_APPLICATION_STATUS|2|    APPLICATION_NUMBER VARCHAR2(500),|
|OA_RT_APPLICATION_STATUS|3|    START_DATE DATE,|
|OA_RT_APPLICATION_STATUS|4|    SENT_DATE DATE,|
|OA_RT_APPLICATION_STATUS|5|    EFFECTIVE_DATE DATE,|
|OA_RT_APPLICATION_STATUS|6|    APPLICANT_NAME VARCHAR2(100),|
|OA_RT_APPLICATION_STATUS|7|    RECEIVING_AGENCY VARCHAR2(150),|
|OA_RT_APPLICATION_STATUS|8|    STATUS_CODE VARCHAR2(150),|
|OA_RT_APPLICATION_STATUS|9|  COMMENTS DATE);|
|OA_RT_APP_CONTACT|1|TYPE             "OA_RT_APP_CONTACT"                                          AS OBJECT(|
|OA_RT_APP_CONTACT|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_APP_CONTACT|3|  APPLICANT_FIRST_NAME VARCHAR2(25),|
|OA_RT_APP_CONTACT|4|  APPLICANT_LAST_NAME VARCHAR2(25),|
|OA_RT_APP_CONTACT|5|  APPLICANT_MIDDLE_NAME VARCHAR2(25),|
|OA_RT_APP_CONTACT|6|  APPLICANT_MAIDEN_NAME VARCHAR2(25),|
|OA_RT_APP_CONTACT|7|  PAYEE_FIRST_NAME VARCHAR2(25),|
|OA_RT_APP_CONTACT|8|  PAYEE_LAST_NAME VARCHAR2(25),|
|OA_RT_APP_CONTACT|9|  IS_HOMELESS VARCHAR2(150),|
|OA_RT_APP_CONTACT|10|  ADDRESS1 VARCHAR2(50),|
|OA_RT_APP_CONTACT|11|  ADDRESS2 VARCHAR2(50),|
|OA_RT_APP_CONTACT|12|  CITY VARCHAR2(50),|
|OA_RT_APP_CONTACT|13|  STATE VARCHAR2(150),|
|OA_RT_APP_CONTACT|14|  ZIP VARCHAR2(5),|
|OA_RT_APP_CONTACT|15|  ZIP4 VARCHAR2(4),|
|OA_RT_APP_CONTACT|16|  COUNTY_NUMBER VARCHAR2(150),|
|OA_RT_APP_CONTACT|17|  M_ADDRESS1 VARCHAR2(50),|
|OA_RT_APP_CONTACT|18|  M_ADDRESS2 VARCHAR2(50),|
|OA_RT_APP_CONTACT|19|  M_CITY VARCHAR2(50),|
|OA_RT_APP_CONTACT|20|  M_STATE VARCHAR2(150),|
|OA_RT_APP_CONTACT|21|  M_ZIP VARCHAR2(5),|
|OA_RT_APP_CONTACT|22|  M_ZIP4 VARCHAR2(4),|
|OA_RT_APP_CONTACT|23|  HOME_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_APP_CONTACT|24|  WORK_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_APP_CONTACT|25|  CELL_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_APP_CONTACT|26|  OTHER_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_APP_CONTACT|27|  EMAIL_ADDRESS VARCHAR2(50),|
|OA_RT_APP_CONTACT|28|  NO_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_APP_CONTACT|29|  NO_CONTACT_INFORMATION VARCHAR2(10),|
|OA_RT_APP_CONTACT|30|  APPLICATION_TYPE VARCHAR2(10),|
|OA_RT_APP_CONTACT|31|  APPLICATION_SUBTYPE VARCHAR2(10)|
|OA_RT_APP_CONTACT|32|  );|
|OA_RT_APP_HH_MEMBER|1|TYPE             "OA_RT_APP_HH_MEMBER"                                          AS OBJECT(|
|OA_RT_APP_HH_MEMBER|2|APPLICATION_NUMBER	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|3|MEMBER_NUMBER	NUMBER(3),|
|OA_RT_APP_HH_MEMBER|4|FIRST_NAME	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|5|LAST_NAME	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|6|MIDDLE_NAME	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|7|GENDER	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|8|DOB	DATE,|
|OA_RT_APP_HH_MEMBER|9|SSN	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|10|RELATIONSHIP	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|11|MARITAL_STATUS	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|12|CITIZEN_STATUS	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|13|BIRTH_PLACE	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|14|ENTRY_DATE	DATE,|
|OA_RT_APP_HH_MEMBER|15|A_REGISTRATION_NUMBER	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|16|IS_STUDENT	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|17|EDUCATION_TYPE	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|18|EDUCATION_LEVEL	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|19|IN_STRIKE	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|20|QUIT_JOB	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|21|IS_PREGNANT	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|22|PREGNANCY_DUE_DATE	DATE,|
|OA_RT_APP_HH_MEMBER|23|DOCTOR_FIRST_NAME	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|24|DOCTOR_LAST_NAME	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|25|DOCTOR_ADDRESS1	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|26|DOCTOR_ADDRESS2	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|27|DOCTOR_CITY	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|28|DOCTOR_STATE	VARCHAR2(15),|
|OA_RT_APP_HH_MEMBER|29|DOCTOR_ZIP	VARCHAR2(15),|
|OA_RT_APP_HH_MEMBER|30|CHANGED_JOBS_6MOS	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|31|FORMER_EMPLOYER_NAME	VARCHAR2(50),|
|OA_RT_APP_HH_MEMBER|32|JOB_ENDED_DATE	DATE,|
|OA_RT_APP_HH_MEMBER|33|JOB_CHANGE_REASON	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|34|HAS_EARNED_INCOME	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|35|HAS_UNEARNED_INCOME	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|36|PROCESSED_DATE	DATE,|
|OA_RT_APP_HH_MEMBER|37|IS_EMPLOYED	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|38|IN_FED_FUNDED_WORKSTUDY	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|39|HAS_DEPENDENTCHILD6	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|40|HAS_DEPENDENTCHILD612	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|41|RECEIVING_WFNJ_TANF	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|42|IN_HIGHER_LEARNING_INSTITUTE	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|43|RACE	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|44|ETHNICITY	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|45|PARENT_CHILD	VARCHAR2(150),|
|OA_RT_APP_HH_MEMBER|46|IS_DISABLED VARCHAR2(150)|
|OA_RT_APP_HH_MEMBER|47|);|
|OA_RT_APP_PROGRAMS|1|TYPE             "OA_RT_APP_PROGRAMS"                                          AS OBJECT (|
|OA_RT_APP_PROGRAMS|2|APPLICATION_NUMBER	VARCHAR2(50),|
|OA_RT_APP_PROGRAMS|3|START_DATE	DATE,|
|OA_RT_APP_PROGRAMS|4|IS_PROG_FS_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|5|IS_PROG_TF_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|6|IS_PROG_FC_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|7|IS_PROG_EA_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|8|IS_PROG_AM_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|9|IS_PROG_RR_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|10|IS_PROG_KC_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|11|IS_PROG_GA_SELECTED	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|12|WILL_SEEK_EMPLOYMENT	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|13|WILL_REGISTER_FOR_WORK	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|14|WILLING_TO_WORK	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|15|WILL_CONTINUE_LIVING_IN_NJ	VARCHAR2(1),|
|OA_RT_APP_PROGRAMS|16|WONT_CONTINUE_REASON	VARCHAR2(500)|
|OA_RT_APP_PROGRAMS|17|);|
|OA_RT_AUTHORIZED_REP|1|TYPE             "OA_RT_AUTHORIZED_REP"                                          AS OBJECT(|
|OA_RT_AUTHORIZED_REP|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|3|  FIRST_NAME VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|4|  LAST_NAME VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|5|  MIDDLE_NAME VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|6|  PHONE_NUMBER VARCHAR2(10),|
|OA_RT_AUTHORIZED_REP|7|  DOB DATE,|
|OA_RT_AUTHORIZED_REP|8|  SSN VARCHAR2(9),|
|OA_RT_AUTHORIZED_REP|9|  ADDRESS1 VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|10|  ADDRESS2 VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|11|  CITY VARCHAR2(50),|
|OA_RT_AUTHORIZED_REP|12|  STATE VARCHAR2(150),|
|OA_RT_AUTHORIZED_REP|13|  ZIP VARCHAR2(10))|
|OA_RT_EMERGENCY_CONTACT|1|TYPE             "OA_RT_EMERGENCY_CONTACT"                                          AS OBJECT(|
|OA_RT_EMERGENCY_CONTACT|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_EMERGENCY_CONTACT|3|  FIRST_NAME VARCHAR2(25),|
|OA_RT_EMERGENCY_CONTACT|4|  LAST_NAME VARCHAR2(25),|
|OA_RT_EMERGENCY_CONTACT|5|  MIDDLE_NAME VARCHAR2(1),|
|OA_RT_EMERGENCY_CONTACT|6|  ADDRESS1 VARCHAR2(50),|
|OA_RT_EMERGENCY_CONTACT|7|  ADDRESS2 VARCHAR2(50),|
|OA_RT_EMERGENCY_CONTACT|8|  CITY VARCHAR2(50),|
|OA_RT_EMERGENCY_CONTACT|9|  STATE VARCHAR2(150),|
|OA_RT_EMERGENCY_CONTACT|10|  ZIP VARCHAR2(10),|
|OA_RT_EMERGENCY_CONTACT|11|  PHONE_NUMBER VARCHAR2(10))|
|OA_RT_EXPENSE_CA_CARE|1|TYPE             "OA_RT_EXPENSE_CA_CARE"                                          AS OBJECT(|
|OA_RT_EXPENSE_CA_CARE|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_EXPENSE_CA_CARE|3|  EXPENSE_NUMBER NUMBER(10),|
|OA_RT_EXPENSE_CA_CARE|4|  MEMBER_NUMBER NUMBER(10),|
|OA_RT_EXPENSE_CA_CARE|5|  CARED_MEMBER_NUMBER NUMBER(10),|
|OA_RT_EXPENSE_CA_CARE|6|  CARED_MEMBER_NAME VARCHAR2(25),|
|OA_RT_EXPENSE_CA_CARE|7|  IS_CARED_MEMBER_DISABLED VARCHAR2(150),|
|OA_RT_EXPENSE_CA_CARE|8|  PROVIDER_NAME VARCHAR2(25),|
|OA_RT_EXPENSE_CA_CARE|9|  PROVIDER_ADDRESS VARCHAR2(100),|
|OA_RT_EXPENSE_CA_CARE|10|  PROVIDER_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_EXPENSE_CA_CARE|11|  DAYS_PER_WEEK NUMBER(10),|
|OA_RT_EXPENSE_CA_CARE|12|  DAILY_RATE_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_CA_CARE|13|  EXPENSE_AMOUNT NUMBER(12))|
|OA_RT_EXPENSE_CSUPPORT|1|TYPE             "OA_RT_EXPENSE_CSUPPORT"                                          AS OBJECT(|
|OA_RT_EXPENSE_CSUPPORT|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_EXPENSE_CSUPPORT|3|  EXPENSE_NUMBER NUMBER(12),|
|OA_RT_EXPENSE_CSUPPORT|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_EXPENSE_CSUPPORT|5|  CHILD_NAME VARCHAR2(25),|
|OA_RT_EXPENSE_CSUPPORT|6|  CHILD_ADDRESS1 VARCHAR2(50),|
|OA_RT_EXPENSE_CSUPPORT|7|  CHILD_ADDRESS2 VARCHAR2(50),|
|OA_RT_EXPENSE_CSUPPORT|8|  CHILD_CITY VARCHAR2(50),|
|OA_RT_EXPENSE_CSUPPORT|9|  CHILD_STATE VARCHAR2(150),|
|OA_RT_EXPENSE_CSUPPORT|10|  CHILD_ZIP VARCHAR2(10),|
|OA_RT_EXPENSE_CSUPPORT|11|  CHILD_AGE NUMBER(3),|
|OA_RT_EXPENSE_CSUPPORT|12|  EXPENSE_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_CSUPPORT|13|  CS_CASE_NUMBER VARCHAR2(15))|
|OA_RT_EXPENSE_MEDICAL|1|TYPE             "OA_RT_EXPENSE_MEDICAL"                                          AS OBJECT(|
|OA_RT_EXPENSE_MEDICAL|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_EXPENSE_MEDICAL|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_EXPENSE_MEDICAL|4|  EXPENSE_NUMBER NUMBER(12),|
|OA_RT_EXPENSE_MEDICAL|5|  MEXPENSE_CODE VARCHAR2(150),|
|OA_RT_EXPENSE_MEDICAL|6|  EXPENSE_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_MEDICAL|7|  PAYMENT_PERIOD VARCHAR2(150),|
|OA_RT_EXPENSE_MEDICAL|8|  IS_REIMBURSED VARCHAR2(150),|
|OA_RT_EXPENSE_MEDICAL|9|  REIMBURSED_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_MEDICAL|10|  REIMBURSED_BY VARCHAR2(25))|
|OA_RT_EXPENSE_SHELTER|1|TYPE             "OA_RT_EXPENSE_SHELTER"                                          AS OBJECT(|
|OA_RT_EXPENSE_SHELTER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_EXPENSE_SHELTER|3|  SHELTER_TYPE VARCHAR2(150),|
|OA_RT_EXPENSE_SHELTER|4|  RENT_MORTGAGE_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_SHELTER|5|  RENT_MORTGAGE_PAY_PERIOD VARCHAR2(150),|
|OA_RT_EXPENSE_SHELTER|6|  PROPERTY_TAX_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_SHELTER|7|  PROPERTY_TAX_PAY_PERIOD VARCHAR2(150),|
|OA_RT_EXPENSE_SHELTER|8|  INSURANCE_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_SHELTER|9|  INSURANCE_PAY_PERIOD VARCHAR2(150),|
|OA_RT_EXPENSE_SHELTER|10|  PAYEE_NAME VARCHAR2(25),|
|OA_RT_EXPENSE_SHELTER|11|  PAYEE_ADDRESS1 VARCHAR2(50),|
|OA_RT_EXPENSE_SHELTER|12|  PAYEE_ADDRESS2 VARCHAR2(50),|
|OA_RT_EXPENSE_SHELTER|13|  PAYEE_CITY VARCHAR2(50),|
|OA_RT_EXPENSE_SHELTER|14|  PAYEE_STATE VARCHAR2(150),|
|OA_RT_EXPENSE_SHELTER|15|  PAYEE_ZIP VARCHAR2(10),|
|OA_RT_EXPENSE_SHELTER|16|  PAYEE_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_EXPENSE_SHELTER|17|  HAVE_AIR_CONDITIONER VARCHAR2(150))|
|OA_RT_EXPENSE_UTILITY|1|TYPE             "OA_RT_EXPENSE_UTILITY"                                          AS OBJECT(|
|OA_RT_EXPENSE_UTILITY|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_EXPENSE_UTILITY|3|  EXPENSE_NUMBER NUMBER(12),|
|OA_RT_EXPENSE_UTILITY|4|  EXPENSE_CODE VARCHAR2(150),|
|OA_RT_EXPENSE_UTILITY|5|  PAYEE_NAME VARCHAR2(25),|
|OA_RT_EXPENSE_UTILITY|6|  EXPENSE_AMOUNT NUMBER(12),|
|OA_RT_EXPENSE_UTILITY|7|  PAYMENT_PERIOD VARCHAR2(150),|
|OA_RT_EXPENSE_UTILITY|8|  HEAT_COOL VARCHAR2(150),|
|OA_RT_EXPENSE_UTILITY|9|  ACCOUNT_NUMBER VARCHAR2(25),|
|OA_RT_EXPENSE_UTILITY|10|  UTILITY_COMPANY VARCHAR2(35),|
|OA_RT_EXPENSE_UTILITY|11|  HEAT_COOL_IND VARCHAR2(10)|
|OA_RT_EXPENSE_UTILITY|12|   ,IS_HOMELESS VARCHAR2(10)) --yk7/21|
|OA_RT_FAMILY_CARE_DETAILS|1|TYPE             "OA_RT_FAMILY_CARE_DETAILS"                                          AS OBJECT(|
|OA_RT_FAMILY_CARE_DETAILS|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_FAMILY_CARE_DETAILS|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_FAMILY_CARE_DETAILS|4|  IS_REQUESTING_NJFC VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|5|  HAVE_OTHER_INSURANCE_NOW VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|6|  HAVE_OTHER_INSURANCE_PAST_3M VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|7|  IS_TAKING_PRSCRPTN_MDCNS VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|8|  IS_RECEIVING_MEDICAL_TREATMENT VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|9|  IS_USING_SPCL_MDCL_EQPMNT VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|10|  HAVE_PENDING_MEDICAL_BILLS VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|11|  HAS_CHANGED_JOBS VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|12|  FORMER_EMPLOYER_NAME VARCHAR2(50),|
|OA_RT_FAMILY_CARE_DETAILS|13|  JOB_ENDED_DATE DATE,|
|OA_RT_FAMILY_CARE_DETAILS|14|  JOB_CHANGE_REASON VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|15|  IS_COVERED_BY_ABPA_INSURANCE VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|16|  ABSENT_PARENT_NAME VARCHAR2(25),|
|OA_RT_FAMILY_CARE_DETAILS|17|  ABPA_INSURANCE_COMPANY_NAME VARCHAR2(25),|
|OA_RT_FAMILY_CARE_DETAILS|18|  ABPA_INSURANCE_POLICY_NUMBER VARCHAR2(50),|
|OA_RT_FAMILY_CARE_DETAILS|19|  ABPA_INSURANCE_COVERAGE_TYPE VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|20|  MEDICAID_APPLIED_IND VARCHAR2(150),|
|OA_RT_FAMILY_CARE_DETAILS|21|  MEDICAID_PROG_NAME VARCHAR2(100),|
|OA_RT_FAMILY_CARE_DETAILS|22|  MEDICAID_APPLIED_DATE DATE)|
|OA_RT_FAMILY_CARE_HEADER|1|TYPE             "OA_RT_FAMILY_CARE_HEADER"                                          AS OBJECT(|
|OA_RT_FAMILY_CARE_HEADER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|3|  HMO_CODE VARCHAR2(150),|
|OA_RT_FAMILY_CARE_HEADER|4|  PARENT_DOCTOR_NAME VARCHAR2(25),|
|OA_RT_FAMILY_CARE_HEADER|5|  PD_ADDRESS1 VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|6|  PD_ADDRESS2 VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|7|  PD_CITY VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|8|  PD_STATE VARCHAR2(150),|
|OA_RT_FAMILY_CARE_HEADER|9|  PD_ZIP VARCHAR2(10),|
|OA_RT_FAMILY_CARE_HEADER|10|  CHILD_DOCTOR_NAME VARCHAR2(25),|
|OA_RT_FAMILY_CARE_HEADER|11|  CD_ADDRESS1 VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|12|  CD_ADDRESS2 VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|13|  CD_CITY VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|14|  CD_STATE VARCHAR2(150),|
|OA_RT_FAMILY_CARE_HEADER|15|  CD_ZIP VARCHAR2(10),|
|OA_RT_FAMILY_CARE_HEADER|16|  ARE_CHILDREN_ENROLLED_NJFC VARCHAR2(150),|
|OA_RT_FAMILY_CARE_HEADER|17|  NJFC_POLICY_NUMBER VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|18|  IS_COVERED_BY_ABSP_INSURANCE VARCHAR2(150),|
|OA_RT_FAMILY_CARE_HEADER|19|  ABSENT_SPOUSE_NAME VARCHAR2(25),|
|OA_RT_FAMILY_CARE_HEADER|20|  ABSP_INSURANCE_COMPANY_NAME VARCHAR2(25),|
|OA_RT_FAMILY_CARE_HEADER|21|  ABSP_INSURANCE_POLICY_NUMBER VARCHAR2(50),|
|OA_RT_FAMILY_CARE_HEADER|22|  ABSP_INSURANCE_COVERAGE_TYPE VARCHAR2(150))|
|OA_RT_FOOD_STAMP_DETAILS|1|TYPE             "OA_RT_FOOD_STAMP_DETAILS"                                          AS OBJECT(|
|OA_RT_FOOD_STAMP_DETAILS|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_FOOD_STAMP_DETAILS|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_FOOD_STAMP_DETAILS|4|  HAS_QUIT_JOB_60D_FS VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|5|  HAS_QUIT_JOB_90D_WFNJ VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|6|  QUIT_JOB_REASON VARCHAR2(100),|
|OA_RT_FOOD_STAMP_DETAILS|7|  ON_STRIKE VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|8|  LAST_EMPLOYMENT_DATE DATE,|
|OA_RT_FOOD_STAMP_DETAILS|9|  CURRENT_WORK_DESCRIPTION VARCHAR2(100),|
|OA_RT_FOOD_STAMP_DETAILS|10|  HAS_RECEIVED_TANF_GA VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|11|  TANF_GA_ASSISTANCE_TYPE VARCHAR2(50),|
|OA_RT_FOOD_STAMP_DETAILS|12|  TANF_GA_RECEIVED_DATE DATE,|
|OA_RT_FOOD_STAMP_DETAILS|13|  TANF_GA_ASSISTANCE_PROVIDER VARCHAR2(100),|
|OA_RT_FOOD_STAMP_DETAILS|14|  IN_FED_FUNDED_WORK_STUDY VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|15|  HAS_DEPENDENT_CHILD_6Y VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|16|  HAS_DEPENDENT_MEMBER_6Y_12Y VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|17|  IN_HIGHER_LEARNING_INSTITUTE VARCHAR2(150),|
|OA_RT_FOOD_STAMP_DETAILS|18|  EDUCATION_TYPE VARCHAR2(10))|
|OA_RT_FOOD_STAMP_HEADER|1|TYPE             "OA_RT_FOOD_STAMP_HEADER"                                          AS OBJECT(|
|OA_RT_FOOD_STAMP_HEADER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_FOOD_STAMP_HEADER|3|  IS_PAYING_SOMEONE_FOR_MEALS VARCHAR2(150),|
|OA_RT_FOOD_STAMP_HEADER|4|  HEAD_MEMBER_NUMBER NUMBER(10),|
|OA_RT_FOOD_STAMP_HEADER|5|  LAST_INCOME_SOURCE VARCHAR2(100),|
|OA_RT_FOOD_STAMP_HEADER|6|  LAST_INCOME_DATE DATE,|
|OA_RT_FOOD_STAMP_HEADER|7|  IS_EXPECTING_CHANGE VARCHAR2(150),|
|OA_RT_FOOD_STAMP_HEADER|8|  CHANGE_COMMENTS VARCHAR2(999),|
|OA_RT_FOOD_STAMP_HEADER|9|  HEA_CODE VARCHAR2(150),|
|OA_RT_FOOD_STAMP_HEADER|10|  IS_PAYING_HCU_SEPERATELY VARCHAR2(150),|
|OA_RT_FOOD_STAMP_HEADER|11|  INCOME_AMOUNT NUMBER(12)|
|OA_RT_FOOD_STAMP_HEADER|12|  ,IS_HOMELESS VARCHAR2(10)) --yk7/21|
|OA_RT_FOOD_STAMP_INFO|1|TYPE             "OA_RT_FOOD_STAMP_INFO"                                          AS OBJECT(|
|OA_RT_FOOD_STAMP_INFO|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_FOOD_STAMP_INFO|3|  IS_GROSS_INCOME_LT_150 VARCHAR2(150),|
|OA_RT_FOOD_STAMP_INFO|4|  IS_RENT_GT_GROSS_INCOME VARCHAR2(150),|
|OA_RT_FOOD_STAMP_INFO|5|  HAS_MIGRANT_FARM_WORKER VARCHAR2(150),|
|OA_RT_FOOD_STAMP_INFO|6|  HAS_RECEIVED_EMERGENCY_FS VARCHAR2(150),|
|OA_RT_FOOD_STAMP_INFO|7|  EMERGENCY_FS_DATE DATE,|
|OA_RT_FOOD_STAMP_INFO|8|  EMERGENCY_FS_LOCATION VARCHAR2(30),|
|OA_RT_FOOD_STAMP_INFO|9|  EMERGENCY_FS_STATE VARCHAR2(150))|
|OA_RT_FS_ELIGIBILITY_CALCS|1|TYPE             "OA_RT_FS_ELIGIBILITY_CALCS"                                          AS OBJECT(|
|OA_RT_FS_ELIGIBILITY_CALCS|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_FS_ELIGIBILITY_CALCS|3|  SNO1 NUMBER(2),|
|OA_RT_FS_ELIGIBILITY_CALCS|4|  SNO2 VARCHAR2(1),|
|OA_RT_FS_ELIGIBILITY_CALCS|5|  ATTRIBUTE_NAME VARCHAR2(1000),|
|OA_RT_FS_ELIGIBILITY_CALCS|6|  INPUT_VALUE VARCHAR2(1000),|
|OA_RT_FS_ELIGIBILITY_CALCS|7|  ALLOWED_VALUE VARCHAR2(1000),|
|OA_RT_FS_ELIGIBILITY_CALCS|8|  CALCULATED_VALUE VARCHAR2(1000))|
|OA_RT_HEALTH_INSURANCE|1|TYPE             "OA_RT_HEALTH_INSURANCE"                                          AS OBJECT(|
|OA_RT_HEALTH_INSURANCE|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|3|  HEALTH_INSURANCE_NUMBER NUMBER(12),|
|OA_RT_HEALTH_INSURANCE|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_HEALTH_INSURANCE|5|  COMPANY_NAME VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|6|  COMPANY_ADDRESS1 VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|7|  COMPANY_ADDRESS2 VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|8|  COMPANY_CITY VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|9|  COMPANY_STATE VARCHAR2(150),|
|OA_RT_HEALTH_INSURANCE|10|  COMPANY_ZIP VARCHAR2(10),|
|OA_RT_HEALTH_INSURANCE|11|  POLICY_HOLDER_NAME VARCHAR2(25),|
|OA_RT_HEALTH_INSURANCE|12|  POLICY_NUMBER VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|13|  MEDICARE_HEALTH_CLAIM_NUMBER VARCHAR2(50),|
|OA_RT_HEALTH_INSURANCE|14|  COVERAGE_TYPE VARCHAR2(150),|
|OA_RT_HEALTH_INSURANCE|15|  ELIGIBILITY_DATE DATE,|
|OA_RT_HEALTH_INSURANCE|16|  PREMIUM_AMOUNT NUMBER(12),|
|OA_RT_HEALTH_INSURANCE|17|  PAYMENT_PERIOD VARCHAR2(150))|
|OA_RT_HHM_ALIEN|1|TYPE             "OA_RT_HHM_ALIEN"                                          AS OBJECT(|
|OA_RT_HHM_ALIEN|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_HHM_ALIEN|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_HHM_ALIEN|4|  ORIGIN_COUNTRY VARCHAR2(50),|
|OA_RT_HHM_ALIEN|5|  ENTRY_DATE DATE,|
|OA_RT_HHM_ALIEN|6|  REGISTRATION_NUMBER VARCHAR2(10),|
|OA_RT_HHM_ALIEN|7|  SPONSOR_NAME VARCHAR2(25),|
|OA_RT_HHM_ALIEN|8|  SPONSOR_ADDRESS1 VARCHAR2(50),|
|OA_RT_HHM_ALIEN|9|  SPONSOR_ADDRESS2 VARCHAR2(50),|
|OA_RT_HHM_ALIEN|10|  SPONSOR_CITY VARCHAR2(50),|
|OA_RT_HHM_ALIEN|11|  SPONSOR_STATE VARCHAR2(150),|
|OA_RT_HHM_ALIEN|12|  SPONSOR_ZIP VARCHAR2(10),|
|OA_RT_HHM_ALIEN|13|  CITIZENSHIP_APPLIED_DATE DATE,|
|OA_RT_HHM_ALIEN|14|  SPONSOR_INCOME NUMBER(12))|
|OA_RT_HHM_BASIC|1|TYPE             "OA_RT_HHM_BASIC"                                          AS OBJECT(|
|OA_RT_HHM_BASIC|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_HHM_BASIC|3|  MEMBER_NUMBER NUMBER(10),|
|OA_RT_HHM_BASIC|4|  FIRST_NAME VARCHAR2(25),|
|OA_RT_HHM_BASIC|5|  LAST_NAME VARCHAR2(25),|
|OA_RT_HHM_BASIC|6|  MIDDLE_NAME VARCHAR2(25),|
|OA_RT_HHM_BASIC|7|  MAIDEN_NAME VARCHAR2(25),|
|OA_RT_HHM_BASIC|8|  DOB DATE,|
|OA_RT_HHM_BASIC|9|  BIRTH_PLACE VARCHAR2(50),|
|OA_RT_HHM_BASIC|10|  CITIZEN_STATUS VARCHAR2(150),|
|OA_RT_HHM_BASIC|11|  ENTRY_DATE DATE,|
|OA_RT_HHM_BASIC|12|  ORIGIN_COUNTRY VARCHAR2(50),|
|OA_RT_HHM_BASIC|13|  A_REGISTRATION_NUMBER VARCHAR2(10),|
|OA_RT_HHM_BASIC|14|  SPONSOR_NAME VARCHAR2(25),|
|OA_RT_HHM_BASIC|15|  SPONSOR_INCOME_AMOUNT NUMBER(12),|
|OA_RT_HHM_BASIC|16|  SPONSOR_ADDRESS1 VARCHAR2(50),|
|OA_RT_HHM_BASIC|17|  SPONSOR_ADDRESS2 VARCHAR2(50),|
|OA_RT_HHM_BASIC|18|  SPONSOR_CITY VARCHAR2(50),|
|OA_RT_HHM_BASIC|19|  SPONSOR_STATE VARCHAR2(150),|
|OA_RT_HHM_BASIC|20|  SPONSOR_ZIP VARCHAR2(10),|
|OA_RT_HHM_BASIC|21|  CITIZENSHIP_APPLIED_DATE DATE,|
|OA_RT_HHM_BASIC|22|  IS_APPLYING_FOR_BENEFITS VARCHAR2(150),|
|OA_RT_HHM_BASIC|23|  SSN VARCHAR2(9),|
|OA_RT_HHM_BASIC|24|  IS_DISABLED VARCHAR2(150),|
|OA_RT_HHM_BASIC|25|  RELATIONSHIP VARCHAR2(150))|
|OA_RT_HHM_OTHER|1|TYPE             "OA_RT_HHM_OTHER"                                          AS OBJECT(|
|OA_RT_HHM_OTHER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_HHM_OTHER|3|  MEMBER_NUMBER NUMBER(10),|
|OA_RT_HHM_OTHER|4|  SPOUSE_MEMBER_NUMBER NUMBER(10),|
|OA_RT_HHM_OTHER|5|  GENDER VARCHAR2(150),|
|OA_RT_HHM_OTHER|6|  IS_PREGNANT VARCHAR2(150),|
|OA_RT_HHM_OTHER|7|  DUE_DATE DATE,|
|OA_RT_HHM_OTHER|8|  DOCTOR_NAME VARCHAR2(25),|
|OA_RT_HHM_OTHER|9|  DOCTOR_ADDRESS1 VARCHAR2(50),|
|OA_RT_HHM_OTHER|10|  DOCTOR_ADDRESS2 VARCHAR2(50),|
|OA_RT_HHM_OTHER|11|  DOCTOR_CITY VARCHAR2(50),|
|OA_RT_HHM_OTHER|12|  DOCTOR_STATE VARCHAR2(150),|
|OA_RT_HHM_OTHER|13|  DOCTOR_ZIP VARCHAR2(10),|
|OA_RT_HHM_OTHER|14|  RACE VARCHAR2(150),|
|OA_RT_HHM_OTHER|15|  ETHNICITY VARCHAR2(150),|
|OA_RT_HHM_OTHER|16|  PARENT1_MEMBER_NUMBER NUMBER(10),|
|OA_RT_HHM_OTHER|17|  PARENT1_RELATIONSHIP VARCHAR2(150),|
|OA_RT_HHM_OTHER|18|  PARENT2_MEMBER_NUMBER NUMBER(10),|
|OA_RT_HHM_OTHER|19|  PARENT2_RELATIONSHIP VARCHAR2(150),|
|OA_RT_HHM_OTHER|20|  EDUCATION_TYPE VARCHAR2(150),|
|OA_RT_HHM_OTHER|21|  EDUCATION_LEVEL VARCHAR2(150),|
|OA_RT_HHM_OTHER|22|  MARITAL_STATUS VARCHAR2(150),|
|OA_RT_HHM_OTHER|23|  RELATIONSHIP VARCHAR2(10),|
|OA_RT_HHM_OTHER|24|  AGE NUMBER(3))|
|OA_RT_HHM_PREGNANT|1|TYPE             "OA_RT_HHM_PREGNANT"                                          AS OBJECT(|
|OA_RT_HHM_PREGNANT|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_HHM_PREGNANT|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_HHM_PREGNANT|4|  DUE_DATE DATE,|
|OA_RT_HHM_PREGNANT|5|  DOCTOR_NAME VARCHAR2(25),|
|OA_RT_HHM_PREGNANT|6|  DOCTOR_ADDRESS1 VARCHAR2(50),|
|OA_RT_HHM_PREGNANT|7|  DOCTOR_ADDRESS2 VARCHAR2(50),|
|OA_RT_HHM_PREGNANT|8|  DOCTOR_CITY VARCHAR2(50),|
|OA_RT_HHM_PREGNANT|9|  DOCTOR_STATE VARCHAR2(150),|
|OA_RT_HHM_PREGNANT|10|  DOCTOR_ZIP VARCHAR2(10))|
|OA_RT_INCOME_EARNED|1|TYPE             "OA_RT_INCOME_EARNED"                                          AS OBJECT(|
|OA_RT_INCOME_EARNED|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_INCOME_EARNED|3|  INCOME_NUMBER NUMBER(12),|
|OA_RT_INCOME_EARNED|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_INCOME_EARNED|5|  EMPLOYMENT_TYPE VARCHAR2(150),|
|OA_RT_INCOME_EARNED|6|  EMP_NAME VARCHAR2(25),|
|OA_RT_INCOME_EARNED|7|  EMP_ADDRESS1 VARCHAR2(50),|
|OA_RT_INCOME_EARNED|8|  EMP_ADDRESS2 VARCHAR2(50),|
|OA_RT_INCOME_EARNED|9|  EMP_CITY VARCHAR2(50),|
|OA_RT_INCOME_EARNED|10|  EMP_STATE VARCHAR2(150),|
|OA_RT_INCOME_EARNED|11|  EMP_ZIP VARCHAR2(10),|
|OA_RT_INCOME_EARNED|12|  EMP_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_INCOME_EARNED|13|  EMP_START_DATE DATE,|
|OA_RT_INCOME_EARNED|14|  EMP_INSURANCE_IND VARCHAR2(150),|
|OA_RT_INCOME_EARNED|15|  WORK_TYPE VARCHAR2(150),|
|OA_RT_INCOME_EARNED|16|  WEEKLY_HOURS NUMBER(3),|
|OA_RT_INCOME_EARNED|17|  PAY_PERIOD VARCHAR2(150),|
|OA_RT_INCOME_EARNED|18|  GROSS_PAY_AMOUNT NUMBER(12),|
|OA_RT_INCOME_EARNED|19|  GROSS_PAY_AMOUNT1 NUMBER(12),|
|OA_RT_INCOME_EARNED|20|  PAY_DATE1 DATE,|
|OA_RT_INCOME_EARNED|21|  GROSS_PAY_AMOUNT2 NUMBER(12),|
|OA_RT_INCOME_EARNED|22|  PAY_DATE2 DATE,|
|OA_RT_INCOME_EARNED|23|  GROSS_PAY_AMOUNT3 NUMBER(12),|
|OA_RT_INCOME_EARNED|24|  PAY_DATE3 DATE,|
|OA_RT_INCOME_EARNED|25|  GROSS_PAY_AMOUNT4 NUMBER(12),|
|OA_RT_INCOME_EARNED|26|  PAY_DATE4 DATE,|
|OA_RT_INCOME_EARNED|27|  GROSS_PAY_AMOUNT5 NUMBER(12),|
|OA_RT_INCOME_EARNED|28|  PAY_DATE5 DATE)|
|OA_RT_INCOME_HISTORY|1|TYPE             "OA_RT_INCOME_HISTORY"                                          AS OBJECT(|
|OA_RT_INCOME_HISTORY|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_INCOME_HISTORY|3|  EMPLOYER_NUMBER NUMBER(12),|
|OA_RT_INCOME_HISTORY|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_INCOME_HISTORY|5|  EMPLOYER_NAME VARCHAR2(25),|
|OA_RT_INCOME_HISTORY|6|  EMP_ADDRESS1 VARCHAR2(50),|
|OA_RT_INCOME_HISTORY|7|  EMP_ADDRESS2 VARCHAR2(50),|
|OA_RT_INCOME_HISTORY|8|  EMP_CITY VARCHAR2(50),|
|OA_RT_INCOME_HISTORY|9|  EMP_STATE VARCHAR2(150),|
|OA_RT_INCOME_HISTORY|10|  EMP_ZIP VARCHAR2(10),|
|OA_RT_INCOME_HISTORY|11|  IS_CURRENT_EMPLOYER VARCHAR2(150),|
|OA_RT_INCOME_HISTORY|12|  EMP_START_DATE DATE,|
|OA_RT_INCOME_HISTORY|13|  EMP_END_DATE DATE)|
|OA_RT_INCOME_OTHER|1|TYPE             "OA_RT_INCOME_OTHER"                                          AS OBJECT(|
|OA_RT_INCOME_OTHER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_INCOME_OTHER|3|  INCOME_NUMBER NUMBER(12),|
|OA_RT_INCOME_OTHER|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_INCOME_OTHER|5|  EXPENSE_TYPE VARCHAR2(50),|
|OA_RT_INCOME_OTHER|6|  PAID_BY_NAME VARCHAR2(50),|
|OA_RT_INCOME_OTHER|7|  INCOME_AMOUNT NUMBER(12),|
|OA_RT_INCOME_OTHER|8|  PAYMENT_PERIOD VARCHAR2(150))|
|OA_RT_INCOME_STUDENT|1|TYPE             "OA_RT_INCOME_STUDENT"                                          AS OBJECT(|
|OA_RT_INCOME_STUDENT|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_INCOME_STUDENT|3|  INCOME_NUMBER NUMBER(12),|
|OA_RT_INCOME_STUDENT|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_INCOME_STUDENT|5|  SCHOOL_NAME VARCHAR2(100),|
|OA_RT_INCOME_STUDENT|6|  FULLTIME_PARTTIME_IND VARCHAR2(150),|
|OA_RT_INCOME_STUDENT|7|  INCOME_TYPE_CODE VARCHAR2(150),|
|OA_RT_INCOME_STUDENT|8|  INCOME_AMOUNT NUMBER(12),|
|OA_RT_INCOME_STUDENT|9|  PERIOD_COVERED_FROM VARCHAR2(10),|
|OA_RT_INCOME_STUDENT|10|  PERIOD_COVERED_TO VARCHAR2(10),|
|OA_RT_INCOME_STUDENT|11|  TUITION_EXPENSE_AMOUNT NUMBER(12),|
|OA_RT_INCOME_STUDENT|12|  SCHOOL_FEE_AMOUNT NUMBER(12))|
|OA_RT_INCOME_UNEARNED|1|TYPE             "OA_RT_INCOME_UNEARNED"                                          AS OBJECT(|
|OA_RT_INCOME_UNEARNED|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_INCOME_UNEARNED|3|  INCOME_NUMBER NUMBER(12),|
|OA_RT_INCOME_UNEARNED|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_INCOME_UNEARNED|5|  INCOME_TYPE_CODE VARCHAR2(150),|
|OA_RT_INCOME_UNEARNED|6|  RECEIVED_APPLIED_IND VARCHAR2(150),|
|OA_RT_INCOME_UNEARNED|7|  RECEIVED_APPLIED_DATE DATE,|
|OA_RT_INCOME_UNEARNED|8|  INCOME_AMOUNT NUMBER(12),|
|OA_RT_INCOME_UNEARNED|9|  PAYMENT_PERIOD VARCHAR2(150),|
|OA_RT_INCOME_UNEARNED|10|  CLAIM_NUMBER VARCHAR2(20),|
|OA_RT_INCOME_UNEARNED|11|  INCOME_TYPE_OTH_DESC VARCHAR2(100));|
|OA_RT_MEDICAID_HEADER|1|TYPE             "OA_RT_MEDICAID_HEADER"                                          AS OBJECT(|
|OA_RT_MEDICAID_HEADER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_MEDICAID_HEADER|3|  RECEIVE_SSI_BENEFITS VARCHAR2(150),|
|OA_RT_MEDICAID_HEADER|4|  SSI_APPLIED_DATE DATE,|
|OA_RT_MEDICAID_HEADER|5|  DENIED_SSI_BENEFITS VARCHAR2(150),|
|OA_RT_MEDICAID_HEADER|6|  DENIED_SSI_REASON VARCHAR2(50),|
|OA_RT_MEDICAID_HEADER|7|  IS_VETERAN VARCHAR2(150),|
|OA_RT_MEDICAID_HEADER|8|  VETERAN_NAME VARCHAR2(25),|
|OA_RT_MEDICAID_HEADER|9|  VA_NUMBER VARCHAR2(25),|
|OA_RT_MEDICAID_HEADER|10|  INSURANCE_CHANGE_TYPE VARCHAR2(100),|
|OA_RT_MEDICAID_HEADER|11|  INSURANCE_CHANGE_DETAILS VARCHAR2(100),|
|OA_RT_MEDICAID_HEADER|12|  HAVE_LTC_INSURANCE VARCHAR2(150),|
|OA_RT_MEDICAID_HEADER|13|  LTCI_AMOUNT NUMBER(12),|
|OA_RT_MEDICAID_HEADER|14|  LTCI_COMPANY_NAME VARCHAR2(25),|
|OA_RT_MEDICAID_HEADER|15|  LTCI_COMPANY_ADDRESS VARCHAR2(100),|
|OA_RT_MEDICAID_HEADER|16|  IS_NURSING_FACILITY_PAID VARCHAR2(150))|
|OA_RT_OTHER_MEMBER|1|TYPE             "OA_RT_OTHER_MEMBER"                                          AS OBJECT(|
|OA_RT_OTHER_MEMBER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_OTHER_MEMBER|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_OTHER_MEMBER|4|  FIRST_NAME VARCHAR2(25),|
|OA_RT_OTHER_MEMBER|5|  LAST_NAME VARCHAR2(25),|
|OA_RT_OTHER_MEMBER|6|  MIDDLE_NAME VARCHAR2(25),|
|OA_RT_OTHER_MEMBER|7|  RELATIONSHIP VARCHAR2(150))|
|OA_RT_PEPW_DETAILS|1|TYPE             "OA_RT_PEPW_DETAILS"                                          AS OBJECT(|
|OA_RT_PEPW_DETAILS|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_PEPW_DETAILS|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_PEPW_DETAILS|4|  IS_DEEMED_HH_MEMBER VARCHAR2(150),|
|OA_RT_PEPW_DETAILS|5|  IS_PEPW_APPLICANT VARCHAR2(150),|
|OA_RT_PEPW_DETAILS|6|  IS_LIVING_AT_HOME VARCHAR2(150),|
|OA_RT_PEPW_DETAILS|7|  IS_LIVING_WITH_PARTNER VARCHAR2(150),|
|OA_RT_PEPW_DETAILS|8|  IS_COMMON_CHILD VARCHAR2(150))|
|OA_RT_PEPW_HEADER|1|TYPE             "OA_RT_PEPW_HEADER"                                          AS OBJECT(|
|OA_RT_PEPW_HEADER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_PEPW_HEADER|3|  APPLICATION_TYPE VARCHAR2(150),|
|OA_RT_PEPW_HEADER|4|  APPLICATION_SUBTYPE VARCHAR2(150),|
|OA_RT_PEPW_HEADER|5|  DEEMING_HOUSEHOLD_SIZE NUMBER(10),|
|OA_RT_PEPW_HEADER|6|  DEEMING_DISREGARD_AMOUNT NUMBER(12),|
|OA_RT_PEPW_HEADER|7|  PROVIDER_ID VARCHAR2(3)|
|OA_RT_PEPW_HEADER|8|  )|
|OA_RT_RESOURCE|1|TYPE             "OA_RT_RESOURCE"                                          AS OBJECT(|
|OA_RT_RESOURCE|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RESOURCE|3|  RESOURCE_NUMBER NUMBER(12),|
|OA_RT_RESOURCE|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_RESOURCE|5|  RESOURCE_TYPE_CODE VARCHAR2(150),|
|OA_RT_RESOURCE|6|  RESOURCE_VALUE NUMBER(12),|
|OA_RT_RESOURCE|7|  SINGLE_JOINT_IND VARCHAR2(150),|
|OA_RT_RESOURCE|8|  HOW_USED VARCHAR2(50),|
|OA_RT_RESOURCE|9|  ACCOUNT_NUMBER VARCHAR2(50),|
|OA_RT_RESOURCE|10|  BI_NAME VARCHAR2(50),|
|OA_RT_RESOURCE|11|  BI_ADDRESS1 VARCHAR2(50),|
|OA_RT_RESOURCE|12|  BI_ADDRESS2 VARCHAR2(50),|
|OA_RT_RESOURCE|13|  BI_CITY VARCHAR2(50),|
|OA_RT_RESOURCE|14|  BI_STATE VARCHAR2(150),|
|OA_RT_RESOURCE|15|  BI_ZIP VARCHAR2(10))|
|OA_RT_RESPONSIBLE_RELATIVE|1|TYPE             "OA_RT_RESPONSIBLE_RELATIVE"                                          AS OBJECT(|
|OA_RT_RESPONSIBLE_RELATIVE|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RESPONSIBLE_RELATIVE|3|  RELATIVE_NUMBER NUMBER(12),|
|OA_RT_RESPONSIBLE_RELATIVE|4|  RELATIVE_NAME VARCHAR2(25),|
|OA_RT_RESPONSIBLE_RELATIVE|5|  ADDRESS1 VARCHAR2(50),|
|OA_RT_RESPONSIBLE_RELATIVE|6|  ADDRESS2 VARCHAR2(50),|
|OA_RT_RESPONSIBLE_RELATIVE|7|  CITY VARCHAR2(50),|
|OA_RT_RESPONSIBLE_RELATIVE|8|  STATE VARCHAR2(150),|
|OA_RT_RESPONSIBLE_RELATIVE|9|  ZIP VARCHAR2(10),|
|OA_RT_RESPONSIBLE_RELATIVE|10|  RELATIONSHIP VARCHAR2(150),|
|OA_RT_RESPONSIBLE_RELATIVE|11|  AGE NUMBER(3))|
|OA_RT_RES_PENDING_CLAIM|1|TYPE             "OA_RT_RES_PENDING_CLAIM"                                          AS OBJECT(|
|OA_RT_RES_PENDING_CLAIM|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RES_PENDING_CLAIM|3|  RESOURCE_NUMBER NUMBER(12),|
|OA_RT_RES_PENDING_CLAIM|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_RES_PENDING_CLAIM|5|  CLAIM_DESCRIPTION VARCHAR2(50),|
|OA_RT_RES_PENDING_CLAIM|6|  LAWYER_NAME VARCHAR2(25),|
|OA_RT_RES_PENDING_CLAIM|7|  LAWYER_PHONE_NUMBER VARCHAR2(10),|
|OA_RT_RES_PENDING_CLAIM|8|  CLAIM_COMPLETION_DATE DATE,|
|OA_RT_RES_PENDING_CLAIM|9|  CLAIM_VALUE NUMBER(12))|
|OA_RT_RES_PERS_PROPERTY|1|TYPE             "OA_RT_RES_PERS_PROPERTY"                                          AS OBJECT(|
|OA_RT_RES_PERS_PROPERTY|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RES_PERS_PROPERTY|3|  RESOURCE_NUMBER NUMBER(12),|
|OA_RT_RES_PERS_PROPERTY|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_RES_PERS_PROPERTY|5|  PP_DESCRIPTION VARCHAR2(50),|
|OA_RT_RES_PERS_PROPERTY|6|  EQUITY_VALUE NUMBER(12))|
|OA_RT_RES_REAL_ESTATE|1|TYPE             "OA_RT_RES_REAL_ESTATE"                                          AS OBJECT(|
|OA_RT_RES_REAL_ESTATE|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RES_REAL_ESTATE|3|  RESOURCE_NUMBER NUMBER(12),|
|OA_RT_RES_REAL_ESTATE|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_RES_REAL_ESTATE|5|  RE_DESCRIPTION VARCHAR2(50),|
|OA_RT_RES_REAL_ESTATE|6|  RE_ADDRESS1 VARCHAR2(50),|
|OA_RT_RES_REAL_ESTATE|7|  RE_ADDRESS2 VARCHAR2(50),|
|OA_RT_RES_REAL_ESTATE|8|  RE_CITY VARCHAR2(50),|
|OA_RT_RES_REAL_ESTATE|9|  RE_STATE VARCHAR2(150),|
|OA_RT_RES_REAL_ESTATE|10|  RE_ZIP VARCHAR2(10),|
|OA_RT_RES_REAL_ESTATE|11|  RE_VALUE NUMBER(12))|
|OA_RT_RES_TRADED_ITEM|1|TYPE             "OA_RT_RES_TRADED_ITEM"                                          AS OBJECT(|
|OA_RT_RES_TRADED_ITEM|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RES_TRADED_ITEM|3|  RESOURCE_NUMBER NUMBER(12),|
|OA_RT_RES_TRADED_ITEM|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_RES_TRADED_ITEM|5|  SOLD_TRADED_TG_IND VARCHAR2(150),|
|OA_RT_RES_TRADED_ITEM|6|  SOLD_TRADED_FS_IND VARCHAR2(150),|
|OA_RT_RES_TRADED_ITEM|7|  ITEM_DESCRIPTION VARCHAR2(50),|
|OA_RT_RES_TRADED_ITEM|8|  SOLD_TO_NAME VARCHAR2(25),|
|OA_RT_RES_TRADED_ITEM|9|  SALE_DATE DATE,|
|OA_RT_RES_TRADED_ITEM|10|  ITEM_VALUE NUMBER(12),|
|OA_RT_RES_TRADED_ITEM|11|  AMOUNT_RECEIVED NUMBER(12))|
|OA_RT_RES_VEHICLE|1|TYPE             "OA_RT_RES_VEHICLE"                                          AS OBJECT(|
|OA_RT_RES_VEHICLE|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_RES_VEHICLE|3|  RESOURCE_NUMBER NUMBER(12),|
|OA_RT_RES_VEHICLE|4|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_RES_VEHICLE|5|  VEHICLE_TYPE VARCHAR2(150),|
|OA_RT_RES_VEHICLE|6|  MAKE VARCHAR2(25),|
|OA_RT_RES_VEHICLE|7|  MODEL_NAME VARCHAR2(25),|
|OA_RT_RES_VEHICLE|8|  MODEL_YEAR NUMBER(4),|
|OA_RT_RES_VEHICLE|9|  USAGE VARCHAR2(50),|
|OA_RT_RES_VEHICLE|10|  MARKET_VALUE NUMBER(12),|
|OA_RT_RES_VEHICLE|11|  AMOUNT_OWED NUMBER(12),|
|OA_RT_RES_VEHICLE|12|  EQUITY_VALUE NUMBER(12))|
|OA_RT_SPLIT|1|TYPE             "OA_RT_SPLIT"                                          AS |
|OA_RT_SPLIT|2|  OBJECT (ITEM VARCHAR2(255) )|
|OA_RT_TANF_GA_HEADER|1|TYPE             "OA_RT_TANF_GA_HEADER"                                          AS OBJECT(|
|OA_RT_TANF_GA_HEADER|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_TANF_GA_HEADER|3|  WILL_SEEK_EMPLOYMENT VARCHAR2(150),|
|OA_RT_TANF_GA_HEADER|4|  WILL_REGISTER_FOR_WORK VARCHAR2(150),|
|OA_RT_TANF_GA_HEADER|5|  WILLING_TO_WORK VARCHAR2(150),|
|OA_RT_TANF_GA_HEADER|6|  WILL_CONTINUE_LIVING_IN_NJ VARCHAR2(150),|
|OA_RT_TANF_GA_HEADER|7|  WONT_CONTINUE_REASON VARCHAR2(500));|
|OA_RT_USER|1|TYPE             "OA_RT_USER"                                          AS OBJECT(|
|OA_RT_USER|2|USER_ID VARCHAR2(15),|
|OA_RT_USER|3|PASSWORD VARCHAR2(15),|
|OA_RT_USER|4|HINT_QUESTION VARCHAR2(150),|
|OA_RT_USER|5|HINT_ANSWER VARCHAR2(30),|
|OA_RT_USER|6|CREATION_DATE DATE,|
|OA_RT_USER|7|HAS_EMAIL_ADDRESS VARCHAR2(150),|
|OA_RT_USER|8|EMAIL_ADDRESS VARCHAR2(150)|
|OA_RT_USER|9|)|
|OA_RT_VIOLATION|1|TYPE             "OA_RT_VIOLATION"                                          AS OBJECT(|
|OA_RT_VIOLATION|2|  APPLICATION_NUMBER VARCHAR2(50),|
|OA_RT_VIOLATION|3|  MEMBER_NUMBER NUMBER(12),|
|OA_RT_VIOLATION|4|  IS_FLEEING_FELON VARCHAR2(150),|
|OA_RT_VIOLATION|5|  FLEEING_FROM VARCHAR2(50),|
|OA_RT_VIOLATION|6|  IS_PROBATION_VIOLATOR VARCHAR2(150),|
|OA_RT_VIOLATION|7|  IS_PAROLE_VIOLATOR VARCHAR2(150),|
|OA_RT_VIOLATION|8|  IS_FRAUD_CONVICTED VARCHAR2(150),|
|OA_RT_VIOLATION|9|  FRAUD_LOCATION VARCHAR2(50),|
|OA_RT_VIOLATION|10|  FRAUD_DATE DATE,|
|OA_RT_VIOLATION|11|  FRADULENTBENEFITS VARCHAR2(100),|
|OA_RT_VIOLATION|12|  IS_DRUG_CHARGE_CONVICTED VARCHAR2(150),|
|OA_RT_VIOLATION|13|  DRUG_CHARGE_TYPE VARCHAR2(150),|
|OA_RT_VIOLATION|14|  DRUG_CHARGE_LOCATION VARCHAR2(50),|
|OA_RT_VIOLATION|15|  IN_DRUG_TREATMENT VARCHAR2(150),|
|OA_RT_VIOLATION|16|  DRUG_TREATMENT_FACILITY VARCHAR2(50),|
|OA_RT_VIOLATION|17|  DRUG_TREATMENT_DATE DATE,|
|OA_RT_VIOLATION|18|  DRUG_TREATMENT_REASON VARCHAR2(100))|
