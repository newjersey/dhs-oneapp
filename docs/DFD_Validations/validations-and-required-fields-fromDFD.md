# *Overall Validations*

### 1. Apply and Save exists on all screens except the Applicant Information.
### 2. All dates must have standard formating and validation
### 3. All SSNs must have standard formatting and validation
### 4. All Phone numbers must have standard formatting and validation
### 4. After the Review screen has been reached all screens and upon clicking Update to alter any of the items on the Review screen except the Application Information screen must have an option to return directly to the Review screen.

# *Authentication*


![Authentication](authentication.png)

### **Userid requirements**
### 1.	Must be 8 to 15 characters long
### 2.	Must contain at least one letter
### 3.	Must contain at least one number
### 4.	No special characters or spaces allowed <br><br>


### **Password**
### 1.	Must by 8 to 15 characters long
### 2.	Must contain at least one letter
### 3.	Must contain of least one number
### 4.	No special characters or spaces allowed <br><br>

### **Required fields (All fields are required if the email address checkbox is checked. If the checkbox is unchecked 4, 5, and 6 are not required and not displayed.)**
### 1.	UserId
### 2.	Choose Password
### 3.	Re-enter Password
### 4.	Email Address (if checkbox is checked all remaining fieds are required)
### 5.	Hint Question
### 6.	Hint Answer <br><br>

### **Email address** 
### 1.	Email address is passed to the Contact screen when entered here.
### 2.	General email validation <br><br><br>


# *Basic* 
### **Application Information** <br><br>

![Application Information 1](ApplicationInfo1.png)
![Application Information 2](ApplicationInfo2.png)

### 1. Question: Are you the Payee? A no response opens additional fields for the client to enter the first and last name of the payee <br>
### 2. For Homeless only county is required for address
### 3. Street address must contain at least one character
### 4. The error text "The entered zip code does not exist in the selected county" is a database validation message that is displayed when the entered zipcode is incorrect. It was created because there are zip codes that boarder multiple counties.
### 5. A Person with no contact information (Address, phone number, or email) must check the checkbox "By checking this box I understand that I must visit my Local County Welfare Office after submitting this application in order for the application to be processed."
### 6. The GetCounty button calls the DHS USPS Webservice (This webservice is located at DHS not the HUB).
### 7. Required fields/questions are First Name, Last Name, "Are you the Payee?", Street Address, City, Zip (Resident & Mailing) County (this is required for both address and homeless), Primary Phone.
### 8. Invalid area codes are 200, 300, 400, 411, 710, 844, 855, 866, 877, 888, 900, and 911.
### 9. The first and forth phone number position can not be 0 or 1.<br><br>


## **SNAP Header**

![NJ SNAP Information](NJSNAPInformation.png)
![NJ SNAP Information 2](NJSNAPInformation2.png)

### 1. A yes response for question "Do you want to apply for NJ SNAP for yourself or someone else in your household?" sets the Program NJ SNAP as the default.
### 2. Required questions are "Is your household's total gross monthly income less than $150.00 and your household's total liquid resources (such as cash or checking/savings accounts) $100.00 or less?", "Is your household's monthy rent or mortgage plus utilities more than your huosehold's total monthly gross income plus total liquid resources?", and "Is anyone in your household a migrant/seasonal farm worker?"
### 3. If the question, "Is anyone in your household a migrant/seasonal farm work?" has a response of yes the question "If yes, has your household received Emergency SNAP benefit?" will become visible. All fields/dropdowns under the newly displayed question are required.
### 4. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br>

<span style="color:red">*NOTE: If an application doesn't have the DFD Program NJ SNAP chosen it is not sent to OneTrac.*</span>



## **Household 1**

![Household1 Summary](Household1Summary.png)
![Household1 Citizen](Household1Citizen.png)
![Household1 Permanent Resident](Household1PermRes.png)
![Household1 Remaining](Household1Remaining.png)

### 1. The Citizen Status field controls fields that are displayed on the screen.
### 2. SSN is required for Citizen and Permanent Resident only if they are applying for benefits(dropdown selected YES).
### 3. SSN must have standard validation before submitting
### 4. Dates must have standard validation before submitting
### 5. Required fields/questions are first name, last name, Is the Member applying for benefits?, Date of Birth, Is Disabled, and Relationship to Payee.
### 6. Only one payee must exist.
### 7. Currently FAMIS can have up to 26 members in a family (May be a question for future if more are needed)
### 8. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.
### 9. "Is disabled" is required when "Is the Member applying for benefits?" is YES.<br><br>


## **Household 2**

![Household1 Summary](Household2.png)
![Household1 Citizen](Household2CurrCompDiscont.png)
![Household1 Permanent Resident](Household2Remaining.png)

### 1. Education option "Currently in School" and "Completed/Discontinued Education" has the field "Education Grade Level" displayed on screen. All remaining options do not have this field displayed.
### 2. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.
### 3. When gender is selected as FEMALE and AGE is 13 or older "Are you Pregnant" is required. If "Are you pregnant?" response  is YES then "Due Date" is required.
### 4. The "Due Date" can not be less than the current date.<br><br>

# *Income*
## **Earned Income**

![Earned Income Summary](IncomeEarnedSummary.png)
![Earned Income Detail](IncomeEarnedDetail.png)

### 1. Start date must have standard validation before submitting
### 2. Required fields are Member name, Employment type, Employer name, Start date, Full Time/Part Time, Hours Per Week, Payment Period, Work income before taxes per pay period
### 3. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>

## **Unearned Income**

![Unearned Income1 Summary](IncomeUnearnedSummary.png)
![Unearned Income2 Summary](IncomeUnearnedSummary2.png)
![Unearned Income2 Summary](IncomeUnearnedSummary3.png)
![Unearned Income Detail](IncomeUnearnedDetail1.png)
![Unearned Income Detail](IncomeUnearnedDetail2.png)

### 1. Yes/No on summary screen is required
### 2. Date last Received/Applied must have standard validation before submitting
### 3. Required fields are Member name, Type Income, Received/Applied, Income amount, How often received?
### 4. The Receive/Applied response "Received" displays the required fields Income amount and How often received fields
### 5. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>

## **Dependent Care**

![Dependant Care Summary](ExpenseDependantCareSummary.png)
![Dependant Care Detail](ExpenseDependantCareDetail.png)

### 1. Yes/No on summary screen is required
### 2. Required fields are Who Pays, Child/Adult being paid for, Care provider name, Days per week, Daily rate, Monthly child/adult care amount paid
### 3. Invalid area codes are 200, 300, 400, 411, 710, 844, 855, 866, 877, 888, 900, and 911.
### 4. The first and forth phone number position can not be 0 or 1.
### 5. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>


## **Child Support**

![Child Support Summary](ExpenseChildSupportSummary.png)
![Child Support Detail](ExpenseChildSupportDetail.png)

### 1. Yes/No on summary screen is required
### 2. Required fields on detail screen are Who pays, Child being supported, Age of child, Monthly amount paid out
### 3. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>

# *Programs*

![Program1](Program1.png)
![Program2](Program2.png)
![Program3](Program3A.png)
![Program3A](Program3B.png)
![Program3B](Program3C.png)
![Program3C](Program3D.png)

### 1. Under the Eligibility section the "You may be" response must be INELIGIBLE in red text or ELIGIBLE in green text. This field is based on a high level eligibility calculation.
### 2. The NJ SNAP program is check automatically when the question "Do you want to apply for NJ SNAP for yourself or someone else in your household?" has a YES response.
### 3. Valid single or combination Program selection is
         a. NJ SNAP
         b. GA
         c. TANF
         d. NJ SNAP&GA
         e. NJ SNAP&TANF
### 4. The combination Programs selection GA&TANF are not a valid option.
### 5. Accommodation YES/NO response of YES displays additional fields.
### 6. A checked response of Translator (associated with #5 above)displays the "What Language" field.
### 7. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>

# *NJ SNAP/WFNJ*
## **SNAP Header**

![SNAP Header](SNAPHeader.png)

### 1. Required fields are "Do you pay someone to provide you with meals?", "Please select the Head of the Household, Does any member of the Household expect any change in circumstances in the near future like the change in income, household size, resident or shelter costs etc?"
### 2. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>

## **SNAP Detail**

![SNAP Summary](SNAPDetailSummary.png)
![SNAP Detail1](SNAPDetailDetail1.png)
![SNAP Detail2](SNAPDetailDetail2.png)
![SNAP Detail3](SNAPDetailDetail3.png)

### 1. Both "Has voluntarily quit a job in the last 60 days?" and "Has voluntarily quit a job in the last 90 days?" display "Quit Job Reason" when a YES response is given.
### 2. The question  "Do you or any member of the household receive or have you received TANF in New Jersey or any other state, territory, or General Assistance (GA) in New Jersey since April 1997?" displays only when the client has selected the GA or TANF program. It would then be required.
### 3. A YES response to "Do you or any member of the household receive or have you received TANF in New Jersey or any other state, territory, or General Assistance (GA) in New Jersey since April 1997?" displays additional fields. When the additional fields are displayed they are required.
### 4. The questions "Is Participating in a federally funded Work Study Program", "Is Responsible for a dependent child under age 6", "Is Responsible for a dependent household member between ages 6 to 12?", "Is enrolled full time in an institution of Higher Learning?" are displayed when a member is in school. Meaning the client entered student information on the "Member Other Information" screen (Household 2). When these fields are displayed they are required.
### 5. Required fields are "Has voluntarily quit a job in the last 60 days?" and "Has voluntarily quit a job in the last 90 days?", "On Strike".
### 6. Checking the checkbox "Check this box to go to review page directly" and clicking the NEXT button will display the Review screen.<br><br>

## **Student Income**

![Student Income Summary](StudentIncomeSummary.png)
![Student Income Detail](StudentIncomeDetail.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard YYYY/MM validation before submitting
### 3. Required fields are Member name, Schol name, Fulltime/Partfull, Type of income, Loan,Grant,Scholarship amount, Period covered To<br><br>

## **Income History**

![Income History Summary](IncomeHistorySummary.png)
![Income History Detail](IncomeHistoryDetail.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard YYYY/MM validation before submitting
### 3. Required fields are Member name, Employeer name, Is this your current Employer?, Start Date, End Date<br><br>

## **Utilities**

![Utilities Expense Summary1](UtilitiesSummary1.png)
![Utilities Expense Summary2](UtilitiesSummary2.png)
![Utilities Expense For Homeless](UtilitiesForHomeless.png)
![Utilities Expense Detail 1 thru 5](UtilitiesDetail1thru5.png)
![Utilities Expense Detail 6 thru 14](UtilitiesDetailRemaining.png)

### 1. Yes/No on summary screen is required.
### 2. Utilities one through five use the screen that doesn't have the question "Is this utility used for Heating or Cooling your house?".
### 3. Utilities that are remaining use the screen that includes question "Is this utility used for Heating or Cooling your house?".
### 4. Required fields are First na Required fields are "Please answer the following for Utility Expense", "On whose name the utility bill is?", Amount given, How often Billed, "Is the utility used for Heating or Cooling your house?", Utility company Required fields are "Please answer the following for Utility Expense", "On whose name the utility bill is?", Amount given, How often Billed, "Is the utility used for Heating or Cooling your house?", Utility company<br><br>

## **Other Individuals**

![Other Member Summary](OtherIndividualsSummary.png)
![Other Member Detail](OtherMemberIndividual.png)
![Other Member Detail](OtherMemberIndividual2.png)
![Other Member Detail](OtherMemberIndividual3.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard YYYY/MM validation before submitting
### 3. Required fields are Member name, Employeer name, Is this your current Employer?, Start Date, End Date<br><br>

## **Auth Rep**

![Authorized Representative](AuthorizeRepresentative.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard validation before submitting
### 3. SSN must have standard formatting and validation
### 4. Invalid area codes are 200, 300, 400, 411, 710, 844, 855, 866, 877, 888, 900, and 911.
### 5. Required fields are First name, Last name, Relationship to Payee<br><br>

## **Criminal History**

![Criminal History Summary](CriminalHistorySummary.png)
![Criminal History Detail1](CriminalHistoryDetail1.png)
![Criminal History Detail2](CriminalHistoryDetail2.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard validation before submitting
### 3. SSN must have standard formatting and validation
### 7. Invalid area codes are 200, 300, 400, 411, 710, 844, 855, 866, 877, 888, 900, and 911.
### 8. The first and forth phone number position can not be 0 or 1.<br><br>

# *Resource*
## **Resources**

![Resource Summary1](ResourcesSummary1.png)
![Resource Summary2](ResourcesSummary2.png)
![Resource Detail Cash on Hand](ResourcesDetail1aCashOnHand.png)
![Resource Detail all Remaining resource details](ResourcesDetail1bRemaining.png)

### 1. Yes/No on summary screen is required.
### 2. "Cash on hand" resource option uses the screen with "Who owns", "Resource name", "How much is the Resource worth", "Single/Joint Owner". All are required.
### 3. Required fields for all remaining resource options are "Who owns", "Resource name", "How much is the Resource worth", "Single/Joint Owner", "Bank/Institution name". All are required.<br><br>

## **Pending Claims**

![Resource Pending Claim Summary](ResourcesPendingClaimSummary.png)
![Resource Pending Claim Detail](ResourcesPendingClaimDetail.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard validation before submitting
### 3. Required fields are "Member name", "Claim description", "Claim expected completion date", "Value of Claim"<br><br>

## **Sell/Trade**

![Resource Sell Trade Summary](ResourceSellTradeSummary.png)
![Resource Sell Trade Detail](ResourceSellTradeDetail.png)

### 1. Yes/No on summary screen is required.
### 2. Dates must have standard validation before submitting
### 3. Required fields are "Traded, given away, transferred or sold for TANF and GA purposes within the past 12 months", Traded, given away, transferred or sold for NJ SNAP purposes within the past 3 months", "Traded, given away, transferred or sold BY whom", "Item description, "Traded, given away, transferred or sold to whom", "Date of Sale or Gift", "Total Market Value", "Amount received"<br><br><br><br>

## **Real Estate**

![Resource Real Estate Summary](ResourcesRealEstateSummary.png)
![Resource Real Estate Detail](ResourcesRealEstateDetail.png)

### 1. Yes/No on summary screen is required.
### 2. Required fields are "Member name", "Property description", "Property value"<br><br>

## **Personal Property**

![Resource Personal Property Summary](ResourcesPersonalPropertySummary.png)
![Resource Personal Property Detail](ResourcesPersonalPropertyDetail.png)

### 1. Yes/No on summary screen is required.
### 2. Required fields are "Member name", "Description", "Item Value/Equity value"<br><br>

# *Review*

![Review1](Review1.png)
![Review2](Review2.png)
![Review3](Review3.png)
![Review4](Review4.png)
![Review5](Review5.png)
![Review6](Review6.png)
![Review7](Review7.png)
![Review8](Review8.png)
![Review9](Review9.png)
![Review10](Review10.png)

# *Submit*

![Submit1](Submit1.png)
![Submit2](Submit2.png)

### 1. "I Read, understood and accept the above text, printed for me by the county representative" is grayed out for the NJoneapp client portal.
### 2. "I Read, understood and accept the above text, printed for me by the county representative" is active for the NJoneapp worker portal. When this option is selected a field displays that require a workers userid.
### 3. Button exists to print the "Important Notice"
### 4. Required fields are "Disclaimer", "I hereby agree to electronically sign this application"<br><br>