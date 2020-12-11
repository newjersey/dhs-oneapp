const { createTestClient, dataSources } = require('../__utils/TestingUtils');

describe('application program info query', () => {
  it('fetches program info', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationProgramInfoDao.getProgramInfo.mockReturnValue({
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
    });

    const query = `
      {
        application {
          programInfo { 
            IS_FS_SELECTED
            IS_TF_SELECTED
            IS_GA_SELECTED
            HAVE_ACTIVE_CASE_CURRENTLY
            CURRENT_CASE_NUMBERS
            HAD_ACTIVE_CASE_PREVIOULSY
            PREVIOUS_CASE_NUMBERS
            SPOKEN_LANGUAGE
            NEED_ACCOMODATION
            NEED_ACM_TRANSLATOR
            NEED_ACM_SIGNING
            NEED_ACM_VISUALLY_IMPAIRED
            NEED_ACM_OTHER
          }
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.application.programInfo.IS_FS_SELECTED).toEqual(true);
    expect(response.data.application.programInfo.CURRENT_CASE_NUMBERS).toEqual('123456');
    expect(dataSources.ApplicationProgramInfoDao.getProgramInfo).toHaveBeenCalledWith(
      "user123",
      0,
    );
  });
});