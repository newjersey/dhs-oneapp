## Stored Procedure Validations

### Application (SP_VALIDATE_APP)

* If page is not `HMBA`, valid
  * _Thinking `HMBA` is the normal submission page, and there is a different id for the quick submit, so quick submit doesn't really validate anything_
* If page is `HMBA`:
  * Must be a household member over the age of 18
  * Must be a household member with relationship `SE`
  * Must be a household member with relationship `SE` and is over the age of 18 (different error code if both do not apply to the same household member)

### County Worker (SP_VALIDATE_COUNTYWORKER)

* Disclaimer must be understood (code `W`)
* County worker ID must exist in the database

### HCSUA Selection (SP_VALIDATE_HCSUA_SELECTION)

* If paying HCU separately and HEA code is one of ('E','F','G','I','J','K','L','M','N','P','R','W'):
  * Must have a utility with a `HEAT_COOL` code of ('H','B','C') and an expense amount greater than 0
* Otherwise, valid

### Payee (SP_VALIDATE_PAYEE)

* Must be one household member with relationship `SE`

### Program (SP_VALIDATE_PROGRAM)

* At least one program must be selected (SNAP, GA, or TANF)
* If TANF is selected, and no household members under the age of 19 (and relationship is not 'SE', 'SP', or '9')
* If GA is selected and household member under the age of 19 (inverse of the above - i.e. you must apply for TANF instead of GA)

### Zipcode (SP_VALIDATE_ZIPCODE)

* Zipcode required OR applicant must be homeless
* Zipcode can also be looked up from county information (does this mean zip is actually required and only county information is?)

