# Week of August 24-28

## Decisions Made (or Requirements validated)
- Product/Requirements
  - TBD
  
- Design
  - TBD
  
- Development
  - TBD
  

  ## Questions 

### For NJ DHS
  - TBD
  - TBD
 
 
  
*** 

# Week of August 17-21

## Decisions Made (or Requirements validated)

- Product/Requirements
  - Per Carmen, the fields of information required before a Client can submit OneApp -- the same as "expedited application for eligiblity" -- are:
      - First name, last name
      - Payee
      - Homeless checkbox
      - Address:  Street, Apt. No, City, State, ZipCounty
      - Mailing Address: Street, Apt. No., City, State, ZipPhone: Primary, Cell, Work, Other
      - Questions:
        - Do you want to apply for NJ SNAP for yourself or someone else in your household?
        - Is your household's total gross income less than $150.00 and your household's total liquid resources (such as cash or checking/savings accounts) $100.00 or less?
        - Is your household's monthly rent or mortgage plus utilities more than your household's total monthly gross income plus total liquid resources?Is anyone in your household a migrant/seasonal farm worker?Program is also required. 
        - Currently the Program 'NJ SNAP' automatically gets populated when the 'Do you want to apply for NJ SNAP for yourself or someone else in your household?' has a YES response
        - *NOTE: the applicant does NOT need to include all household members before submitting.*

- Design
  - New gender types categories to be added to the new OneApp per NJ DHS request will **not** impact downstream data systems.  That info is stored by the app, per Ron Heft.


## Questions 

### For NJ DHS

- **Success Metrics**
  - Need Juan to confirm baseline for abadonment rate -- based on snapshot data provided so far (June-August), current abadon rate could be anywhere from 43-55%
  - Need Juan to help translate data provided by Carmen into a "percent complete" baseline (e.g. on average, only <>% of the application is completed when submitted.

- **Department of Corrections new policy questions**
  - Need Alecia/Juan to finalize if new questions for prisoners need to be added to the application
  
- **NJ DHS Change Requests**
  - Need to determine if all requested changes are (a) well defined/understood and (b) required (or can be de-scoped) for MVP launch.
