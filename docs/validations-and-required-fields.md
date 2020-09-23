# Validations and Required Fields

- [Stored Procedure Validations](#stored-procedure-validations)
  - [Application (SP_VALIDATE_APP)](#application-sp_validate_app)
    - [Called](#called)
    - [Logic](#logic)
  - [County Worker (SP_VALIDATE_COUNTYWORKER)](#county-worker-sp_validate_countyworker)
    - [Called](#called-1)
    - [Logic](#logic-1)
  - [HCSUA Selection (SP_VALIDATE_HCSUA_SELECTION)](#hcsua-selection-sp_validate_hcsua_selection)
    - [Called](#called-2)
    - [Logic](#logic-2)
  - [Payee (SP_VALIDATE_PAYEE)](#payee-sp_validate_payee)
    - [Called](#called-3)
    - [Logic](#logic-3)
  - [Program (SP_VALIDATE_PROGRAM)](#program-sp_validate_program)
    - [Called](#called-4)
    - [Logic](#logic-4)
  - [Zipcode (SP_VALIDATE_ZIPCODE)](#zipcode-sp_validate_zipcode)
    - [Called](#called-5)
    - [Logic](#logic-5)

## Stored Procedure Validations


### Application (SP_VALIDATE_APP)

#### Called

* Every time the page changes through the `SP_UPDATE_APP_PAGE_INFO` stored procedure, this validation is run

#### Logic

* If page is not `HMBA`, valid
  * _Thinking `HMBA` is the normal submission page_
* If page is `HMBA`:
  * Must be a household member over the age of 18
  * Must be a household member with relationship `SE`
  * Must be a household member with relationship `SE` and is over the age of 18 (different error code if both do not apply to the same household member)


### County Worker (SP_VALIDATE_COUNTYWORKER)

#### Called

* When the application is submitted (county worker version only)

#### Logic

* Disclaimer must be understood (code `W`)
* County worker ID must exist in the database


### HCSUA Selection (SP_VALIDATE_HCSUA_SELECTION)

#### Called

* When updating information on the Expense Utility page
* From the application Review page

#### Logic

* If paying HCU separately and HEA code is one of ('E','F','G','I','J','K','L','M','N','P','R','W'):
  * Must have a utility with a `HEAT_COOL` code of ('H','B','C') and an expense amount greater than 0
* Otherwise, valid


### Payee (SP_VALIDATE_PAYEE)

#### Called

* From the application Review page

#### Logic

* Must be one household member with relationship `SE`


### Program (SP_VALIDATE_PROGRAM)

#### Called

* From the application Review page

#### Logic

* At least one program must be selected (SNAP, GA, or TANF)
* If TANF is selected, and no household members under the age of 19 (and relationship is not 'SE', 'SP', or '9')
* If GA is selected and household member under the age of 19 (inverse of the above - i.e. you must apply for TANF instead of GA)


### Zipcode (SP_VALIDATE_ZIPCODE)

#### Called

* From the application Contact page

#### Logic

* Zipcode required OR applicant must be homeless
* Zipcode must be a NJ zip code (looked up with county code information)

