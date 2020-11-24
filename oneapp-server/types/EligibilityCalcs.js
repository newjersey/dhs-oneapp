const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    eligibility: EligibilityCalcs,
    fcEligibility: FcEligibilityCalcs,
    tfEligibility: TfEligibilityCalcs,
    gaEligibility: GaEligibilityCalcs,
  }

  type EligibilityCalcs {
    FOODSTAMP_TEST: EligibilityValue,
    FOODSTAMP_BENEFITS: String,
    GROSS_INCOME_TEST: EligibilityTestResult,
    NET_INCOME_TEST: EligibilityTestResult,
  }

  type FcEligibilityCalcs {
    AFDCL_TEST: EligibilityValue,
    MDCH_TEST: EligibilityValue,
    MDIN_TEST: EligibilityValue,
    MDPR_TEST: EligibilityValue,
    MDPC_TEST: EligibilityValue,
    FCCH_TEST: EligibilityValue,
    FCPR_TEST: EligibilityValue,
    FCPC_TEST: EligibilityValue,
    NCPA_TEST: EligibilityValue,
    FPL: String,
  }

  type TfEligibilityCalcs {
    TANF_TEST: EligibilityValue,
    TANF_AMOUNT: String,
  }

  type GaEligibilityCalcs {
    TANF_TEST: EligibilityValue,
    TANF_AMOUNT: String,
  }

  enum EligibilityValue {
    INELIGIBLE
    ELIGIBLE
  }

  enum EligibilityTestResult {
    FAILED
    PASSED
  }
`;

const resolvers = {
  Application: {
    eligibility: (_parent, _args, { dataSources, auth, language }) => dataSources.EligibilityCalcsDao.getEligibility(auth.user.USER_ID, language.code),
    fcEligibility: (_parent, _args, { dataSources, auth, language }) => dataSources.EligibilityCalcsDao.getFcEligibility(auth.user.USER_ID, language.code),
    tfEligibility: (_parent, _args, { dataSources, auth, language }) => dataSources.EligibilityCalcsDao.getTfEligibility(auth.user.USER_ID, language.code),
    gaEligibility: (_parent, _args, { dataSources, auth, language }) => dataSources.EligibilityCalcsDao.getGaEligibility(auth.user.USER_ID, language.code),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
