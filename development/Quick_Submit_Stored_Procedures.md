- [Quick Submit Page Flow](#quick-submit-page-flow)
- [Stored Procedures Called](#stored-procedures-called)
  - [Application Pages: Validations](#application-pages-validations)
  - [`/Forms/SignIn/frmStart.aspx`](#formssigninfrmstartaspx)
  - [`/Forms/SignIn/frmNewApplication.aspx`](#formssigninfrmnewapplicationaspx)
  - [`/Forms/Application/Contact.aspx`](#formsapplicationcontactaspx)
  - [`/Forms/Application/FoodStampInformation.aspx`](#formsapplicationfoodstampinformationaspx)
  - [`/Forms/Application/Review.aspx`](#formsapplicationreviewaspx)

## Quick Submit Page Flow

1. `/`
2. `/Forms/SignIn/frmStart.aspx`
3. `/Forms/SignIn/frmNewApplication.aspx`
4. `/Forms/Application/Contact.aspx`
5. `/Forms/Application/FoodStampInformation.aspx`
6. `/forms/application/Review.aspx`
7. `/Forms/Application/Programs.aspx`
8. `/Forms/Application/Review.aspx`
9. `/Forms/Application/Submit.aspx`
10. `/Forms/Application/Disclaimer.aspx?print=1`
11. `/Forms/Application/Confirmation.aspx`

## Stored Procedures Called

### Application Pages: Validations

* `OA_PKG_APP.SP_SELECT_APP_PAGE_INFO`
* `OA_PKG_APP.SP_UPDATE_APP_PAGE_INFO`
* `OA_PKG_APP.SP_DELETE_APP_PAGE_INFO`

### `/Forms/SignIn/frmStart.aspx`

* `OA_PKG_GEN.SP_AUTHENTICATE_APP_USER`
* `OA_PKG_GEN.SP_RESET_PASSWORD`
* `OA_PKG_GEN.SP_INSERT_APP_USER`
* `OA_PKG_GEN.SP_UPDATE_APP_USER`
* `OA_PKG_GEN.SP_UPDATE_PASSWORD`
* `OA_PKG_GEN.SP_GET_USER_ID`

### `/Forms/SignIn/frmNewApplication.aspx`

Normal flow:

* None

Alt flow #1:

* `OA_PKG_APP.SP_EXPORT_FS_DATA`

Alt flow #2:

* Lots of calls in `UpdateNJHelpsData`

### `/Forms/Application/Contact.aspx`

Validate zip code is a NJ zip code:
* `OA_PKG_APP.SP_VALIDATE_ZIPCODE`

Contact info:
* `OA_PKG_APP.SP_SELECT_APP_CONTACT`
* `OA_PKG_APP.SP_UPDATE_APP_CONTACT`
* `OA_PKG_APP.SP_DELETE_APP_CONTACT`

Note: API call to validate USPS address

### `/Forms/Application/FoodStampInformation.aspx`

Food stamp info:
* `OA_PKG_APP.SP_SELECT_FOOD_STAMP_INFO`
* `OA_PKG_APP.SP_UPDATE_FOOD_STAMP_INFO`
* `OA_PKG_APP.SP_DELETE_FOOD_STAMP_INFO`

Application info:
* `OA_PKG_APP.SP_SELECT_APPLICATION_ITEMS`
* `OA_PKG_APP.SP_UPDATE_APPLICATION_ITEMS`
* `OA_PKG_APP.SP_DELETE_APPLICATION_ITEMS`

### `/Forms/Application/Review.aspx`

Every DAL is called to display info about the application