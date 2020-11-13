const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    foodStampInfo: ApplicationFoodStampInfo
  }

  extend type Mutation {
    foodStampInfoUpdate(input: ApplicationFoodStampInfoInput!): ApplicationFoodStampInfo
  }

  type ApplicationFoodStampInfo {
    "Monthly household income is less than $150 a month"
    IS_GROSS_INCOME_LT_150: Boolean
    "Rent is greater than applicant gross income"
    IS_RENT_GT_GROSS_INCOME: Boolean
    "Applicant household has migrant farm worker"
    HAS_MIGRANT_FARM_WORKER: Boolean
    "Household is receiving emergency foodstamps"
    HAS_RECEIVED_EMERGENCY_FS: Boolean
    "Household received emergency foodstamps on date"
    EMERGENCY_FS_DATE: Date
    "Household received emergency foodstamps in city"
    EMERGENCY_FS_LOCATION: String
    "Household received emergency foodstamps in state"
    EMERGENCY_FS_STATE: String
  }

  input ApplicationFoodStampInfoInput {
    "Monthly household income is less than $150 a month"
    IS_GROSS_INCOME_LT_150: Boolean
    "Rent is greater than applicant gross income"
    IS_RENT_GT_GROSS_INCOME: Boolean
    "Applicant household has migrant farm worker"
    HAS_MIGRANT_FARM_WORKER: Boolean
    "Household is receiving emergency foodstamps"
    HAS_RECEIVED_EMERGENCY_FS: Boolean
    "Household received emergency foodstamps on date"
    EMERGENCY_FS_DATE: Date
    "Household received emergency foodstamps in city"
    EMERGENCY_FS_LOCATION: String
    "Household received emergency foodstamps in state"
    EMERGENCY_FS_STATE: String
  }
`;

const resolvers = {
  Application: {
    foodStampInfo: (_parent, _args, { dataSources, auth, language }) => dataSources.FoodStampInfoDao.getFoodStampInfo(auth.user.USER_ID, language.code),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
