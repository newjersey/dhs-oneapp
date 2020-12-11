const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();

describe('applicationUpdate mutation', () => {
  it('updates contact info', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.updateContact.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          contact: {
            APPLICANT_FIRST_NAME: "Test"
            APPLICANT_LAST_NAME: "Test"
            PAYEE_FIRST_NAME: "Test"
            PAYEE_LAST_NAME: "Test"
            IS_HOMELESS: true
            COUNTY_NUMBER: 1
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationUpdate).toEqual(true);

    expect(dataSources.ApplicationContactDao.updateContact).toHaveBeenCalledWith(
      "user123",
      {
        APPLICANT_FIRST_NAME: 'Test',
        APPLICANT_LAST_NAME: 'Test',
        PAYEE_FIRST_NAME: 'Test',
        PAYEE_LAST_NAME: 'Test',
        IS_HOMELESS: true,
        COUNTY_NUMBER: 1,
      },
    );
  });

  it('enforces constraints on fields', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.updateContact.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          contact: {
            APPLICANT_FIRST_NAME: "!nval!d nam3"
            APPLICANT_LAST_NAME: "Test"
            PAYEE_FIRST_NAME: "Test"
            PAYEE_LAST_NAME: "Test"
            IS_HOMELESS: true
            COUNTY_NUMBER: 1
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });
  
  it('enforces required fields', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.updateContact.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          contact: {
            APPLICANT_LAST_NAME: "Test"
            PAYEE_FIRST_NAME: "Test"
            PAYEE_LAST_NAME: "Test"
            IS_HOMELESS: true
            COUNTY_NUMBER: 1
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });


  it('updates both food stamp and program info', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationFoodStampInfoDao.updateFoodStampInfo.mockReturnValue(1);
    dataSources.ApplicationProgramInfoDao.updateProgramInfo.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          foodStampInfo: {
            IS_GROSS_INCOME_LT_150: true,
            IS_RENT_GT_GROSS_INCOME: true,
            HAS_MIGRANT_FARM_WORKER: false,
            HAS_RECEIVED_EMERGENCY_FS: true,
            EMERGENCY_FS_DATE: "2020-01-01",
            EMERGENCY_FS_LOCATION: "Newark",
            EMERGENCY_FS_STATE: "NJ",
          },
          programInfo: {
            IS_FS_SELECTED: true,
            IS_TF_SELECTED: false,
            IS_GA_SELECTED: false,
            HAVE_ACTIVE_CASE_CURRENTLY: true,
            CURRENT_CASE_NUMBERS: "123456",
            HAD_ACTIVE_CASE_PREVIOULSY: true,
            PREVIOUS_CASE_NUMBERS: "12345",
            SPOKEN_LANGUAGE: "en",
            NEED_ACCOMODATION: true,
            NEED_ACM_TRANSLATOR: false,
            NEED_ACM_SIGNING: true,
            NEED_ACM_VISUALLY_IMPAIRED: false,
            NEED_ACM_OTHER: false,
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationUpdate).toEqual(true);

    expect(dataSources.ApplicationFoodStampInfoDao.updateFoodStampInfo).toHaveBeenCalledWith(
      "user123",
      {
        IS_GROSS_INCOME_LT_150: true,
        IS_RENT_GT_GROSS_INCOME: true,
        HAS_MIGRANT_FARM_WORKER: false,
        HAS_RECEIVED_EMERGENCY_FS: true,
        EMERGENCY_FS_DATE: new Date("2020-01-01"),
        EMERGENCY_FS_LOCATION: "Newark",
        EMERGENCY_FS_STATE: "NJ",
      },
    );

    expect(dataSources.ApplicationProgramInfoDao.updateProgramInfo).toHaveBeenCalledWith(
      "user123",
      {
        IS_FS_SELECTED: true,
        IS_TF_SELECTED: false,
        IS_GA_SELECTED: false,
        HAVE_ACTIVE_CASE_CURRENTLY: true,
        CURRENT_CASE_NUMBERS: "123456",
        HAD_ACTIVE_CASE_PREVIOULSY: true,
        PREVIOUS_CASE_NUMBERS: "12345",
        SPOKEN_LANGUAGE: "en",
        NEED_ACCOMODATION: true,
        NEED_ACM_TRANSLATOR: false,
        NEED_ACM_SIGNING: true,
        NEED_ACM_VISUALLY_IMPAIRED: false,
        NEED_ACM_OTHER: false,
      },
    );
  });

  it('updates TANF/GA header', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});
    const REASON = "A reason for moving";

    dataSources.TanfGaHeaderDao.updateTanfGaHeader.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          tanfGaHeader: {
            WILL_SEEK_EMPLOYMENT: true,
            WILL_REGISTER_FOR_WORK: false,
            WILLING_TO_WORK: true,
            WILL_CONTINUE_LIVING_IN_NJ: false,
            WONT_CONTINUE_REASON: "A reason for moving",
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationUpdate).toEqual(true);

    expect(dataSources.TanfGaHeaderDao.updateTanfGaHeader).toHaveBeenCalledWith(
      "user123",
      {
        WILL_SEEK_EMPLOYMENT: true,
        WILL_REGISTER_FOR_WORK: false,
        WILLING_TO_WORK: true,
        WILL_CONTINUE_LIVING_IN_NJ: false,
        WONT_CONTINUE_REASON: REASON,
      },
    );
  });
});

describe('application confirmation query', () => {
  it('returns confirmation details when authenticated', async () => {
    const user = {USER_ID: 'user123456'};
    const authClient = createTestClient({user});

    dataSources.ApplicationDao.fetchConfirmationDetails.mockReturnValue({
      APPLICATION_NUMBER: 'sent'
    });

    const query = `
      query {
        applicationConfirmation(APPLICATION_NUMBER: "sent") {
          APPLICATION_NUMBER
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationConfirmation.APPLICATION_NUMBER).toEqual('sent');
    expect(dataSources.ApplicationDao.fetchConfirmationDetails).toHaveBeenCalledWith('sent', user.USER_ID);
  });

  it('fails when unauthenticated', async () => {
    const query = `
    query {
      applicationConfirmation(APPLICATION_NUMBER: "sent") {
        APPLICATION_NUMBER
      }
    } 
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('UNAUTHENTICATED');
    expect(response.errors[0].message).toEqual('You must be logged in to access this data.');
  });
});

describe('send application mutation', () => {
  it('sends when authenticated', async () => {
    const user = {USER_ID: 'user123456'};
    const authClient = createTestClient({user});

    dataSources.ApplicationDao.sendApplication.mockReturnValue({
      APPLICATION_NUMBER: 'sent'
    });

    const query = `
      mutation {
        applicationSend(DISCLAIMER_UNDERSTOOD: Y) {
          APPLICATION_NUMBER
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationSend.APPLICATION_NUMBER).toEqual('sent');
    expect(dataSources.ApplicationDao.sendApplication).toHaveBeenCalledWith(user.USER_ID, 'Y');
  });

  it('fails to send when unauthenticated', async () => {
    const query = `
      mutation {
        applicationSend(DISCLAIMER_UNDERSTOOD: Y) {
          APPLICATION_NUMBER
        }
      } 
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('UNAUTHENTICATED');
    expect(response.errors[0].message).toEqual('You must be logged in to access this data.');
  });
});
