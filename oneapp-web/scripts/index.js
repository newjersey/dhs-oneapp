'use strict';

const Database = require('./Database.js');
const Logger = require('./utils/Logger.js');

// Translations stored in FS_CONVERSION_TEXT

const tables = {
    /*
    OA_SAP_ADDRESS_HISTORY,
    OA_SAP_APPLICATION_CONTACT,
    OA_SAP_APPLICATION_FLAGS,
    OA_SAP_APPLICATION_HEADER
    OA_SAP_APPLICATION_ITEMS
    OA_SAP_APPLICATION_PAGE_INFO
    OA_SAP_APPLICATION_PROFILE
    OA_SAP_APPLICATION_PURGED
    OA_SAP_AUTHORIZED_REP
    OA_SAP_AUTHORIZED_REP_TEMP
    OA_SAP_EMERGENCY_CONTACT
    OA_SAP_EXPENSE_CA_CARE
    OA_SAP_EXPENSE_CSUPPORT
    OA_SAP_EXPENSE_MEDICAL
    OA_SAP_EXPENSE_SHELTER
    OA_SAP_EXPENSE_UTILITY
    OA_SAP_FAMILY_CARE_DETAIL
    OA_SAP_FAMILY_CARE_HEADER
    OA_SAP_FOOD_STAMP_DETAIL
    OA_SAP_FOOD_STAMP_HEADER
    OA_SAP_HEALTH_INSURANCE
    OA_SAP_HH_MEMBER_ALIEN
    OA_SAP_HH_MEMBER_BASIC
    OA_SAP_HH_MEMBER_BASIC_TEMP
    OA_SAP_HH_MEMBER_OTHER_BKP
    OA_SAP_INCOME_EARNED
    OA_SAP_INCOME_HISTORY
    OA_SAP_INCOME_OTHER
    OA_SAP_INCOME_STUDENT
    OA_SAP_INCOME_UNEARNED
    OA_SAP_MEDICAID_HEADER
    OA_SAP_OTHER_MEMBER
    OA_SAP_RES_PENDING_CLAIM
    OA_SAP_RES_PERS_PROPERTY
    OA_SAP_RES_REAL_ESTATE
    OA_SAP_RES_TRADED_ITEM
    OA_SAP_RES_VEHICLE
    OA_SAP_RESOURCE
    OA_SAP_RESPONSIBLE_RELATIVE
    OA_SAP_VIOLATION
    OA_STG_APP_HOUSEHOLD
    */
    users: 'OA_SAP_USER'
}


async function getPages(){
    let cols = await conn('OA_PAGES').columnInfo();

    //OA_CONVERSION_PAGE
    //OA_CONVERSION_TEXT
}

setTimeout(async ()=>{

    let conn = Database.connection;

    //let users = await conn(tables.users).select('USER_ID');

    for (let key in tables){        

        let cols = await conn(tables[key]).columnInfo();

        /*
FAILED_ANS_ATTEMPT_COUNT: {
    type: 'NUMBER',
    defaultValue: null,
    maxLength: null,
    nullable: true
  },
        */
        for (let colName in cols){

            let col = cols[colName];

            Logger.debug(`Field: ${colName}, type: ${col.type}, defaultValue: ${col.defaultValue}`);
        }
    }


    process.exit(1);

}, 200);

