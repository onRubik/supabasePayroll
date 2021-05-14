--windows
\copy eventRecords FROM 'C:\Users\onRubik\Documents\codeAmdLocal\databases\postgres\dzPayroll\eventRecordsTest.csv' DELIMITER ',' csv;

--linux
--/home/onrubik/Documents/code/databases/postgre/dzPayroll/employees.csv
\copy employees FROM '/home/onrubik/Documents/code/databases/postgre/dzPayroll/employees.csv' DELIMITER ',' csv;
