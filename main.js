const newDml = require('./src/js/dml')

//to test specific DML operations comment or uncomment the next code lines

//Select from the records 'eventRecords' per description
newDml.selectEventDesc()

//Find the current yeard period for an employee
newDml.currentPeriod()

//Find the number of years in service for an employee
newDml.yearsInService(10490)

//Count events per current period, for an employee
newDml.selectEventCurrentPeriod()

//Rest the vacations available for the current period, for an emplpyee, minus the vacations taken in the current period
newDml.vacAvailable()