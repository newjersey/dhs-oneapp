const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    programInfo: ApplicationProgramInfo
  }

  type ApplicationProgramInfo {
    IS_FS_SELECTED: Boolean
  }
`;

const resolvers = {
  Application: {
    programInfo: () => ({}),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
