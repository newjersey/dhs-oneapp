- [Quick Submit Page Flow](#quick-submit-page-flow)
- [Stored Procedures Called](#stored-procedures-called)
  - [Application Pages: Validations](#application-pages-validations)
  - [`/Forms/SignIn/frmStart.aspx`](#formssigninfrmstartaspx)
  - [`/Forms/SignIn/frmNewApplication.aspx`](#formssigninfrmnewapplicationaspx)
  - [`/Forms/Application/Contact.aspx`](#formsapplicationcontactaspx)
  - [`/Forms/Application/FoodStampInformation.aspx`](#formsapplicationfoodstampinformationaspx)
  - [`/Forms/Application/Review.aspx`](#formsapplicationreviewaspx)
  - [`/Forms/Application/Programs.aspx`](#formsapplicationprogramsaspx)
  - [`/Forms/Application/Submit.aspx`](#formsapplicationsubmitaspx)
  - [`/Forms/Application/Disclaimer.aspx?print=1`](#formsapplicationdisclaimeraspxprint1)
  - [`/Forms/Application/Confirmation.aspx`](#formsapplicationconfirmationaspx)
- [Open Questions](#open-questions)

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

Page numbers:
* `OA_PKG_GEN.SP_GET_LAST_PAGE_NUMBER`
* `OA_PKG_GEN.SP_UPDATE_LAST_PAGE_NUMBER`

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
* `OA_PKG_GEN.SP_GET_COUNTIES`
* `OA_PKG_GEN.SP_GET_COUNTY_DETAILS`

Contact info:
* `OA_PKG_APP.SP_SELECT_APP_CONTACT`
* `OA_PKG_APP.SP_UPDATE_APP_CONTACT`

Note: API call to validate USPS address

### `/Forms/Application/FoodStampInformation.aspx`

Food stamp info:
* `OA_PKG_APP.SP_SELECT_FOOD_STAMP_INFO`
* `OA_PKG_APP.SP_UPDATE_FOOD_STAMP_INFO`

Application info:
* `OA_PKG_APP.SP_SELECT_APPLICATION_ITEMS`
* `OA_PKG_APP.SP_UPDATE_APPLICATION_ITEMS`

### `/Forms/Application/Review.aspx`

Every DAL is called to display info about the application. Thoughts are for quick submit to only calls the SELECT_* stored procedures for the above sections we're filling out during quick submit.

### `/Forms/Application/Programs.aspx`

TANF:
* `OA_PKG_APP.SP_SELECT_TANF_GA_HEADER`
* `OA_PKG_APP.SP_UPDATE_TANF_GA_HEADER`
* `OA_PKG_APP.SP_DELETE_TANF_GA_HEADER`

Eligibility Calcs:
* `OA_PKG_UTIL.GET_ELIGIBILITY`
* `OA_PKG_UTIL.GET_FC_ELIGIBILITY`
* `OA_PKG_UTIL.GET_TF_ELIGIBILITY`
* `OA_PKG_UTIL.GET_GA_ELIGIBILITY`

Programs:
* `OA_PKG_APP.SP_SELECT_APPLICATION_PROGRAMS`
* `OA_PKG_APP.SP_UPDATE_APPLICATION_PROGRAMS`

### `/Forms/Application/Submit.aspx`

* `OA_PKG_APP.SP_SEND_APPLICATION`

### `/Forms/Application/Disclaimer.aspx?print=1`

This is an information only page (disclaimer form).

### `/Forms/Application/Confirmation.aspx`

* `OA_PKG_GEN.SP_GET_CONFIRMATION_DETAILS`
* Confirmation email is sent.

## Open Questions

* When are `DELETE_` stored procedures called?
* Do we show TANF/GA information for our SNAP quick submit prototype?
* Do we mock USPS API for dev/staging environments?
* What is exactly happening on the `frmNewApplication` page with the alternative flows?
* Where does an application id get created (i.e. which stored procedure)?
* Does the review page have any logic to mark an application as reviewed in the database?
* Do we need to use the `_APP_PAGE_INFO` stored procedures if we're using a different validation system / don't need to show app progress in the same way? (Submission may require them filled out to some extent.)
* Does the back-end need to handle anything with the disclaimer outside of translations?