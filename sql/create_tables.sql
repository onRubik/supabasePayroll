CREATE TABLE employees(
    employeeId integer,
    firstName text,
    lastName text,
    lastName2 text,
    secondId integer,
    hireDate date,
    contractEnd date,
    empStatus text
);

CREATE TABLE eventRecords(
    employeeId integer,
    lastName text,
    eventDate date,
    eventDesc text, --this is the string on which most DML querys get calculated
    eventType text, --can be a normal record or an adjustment
    eventComment text,
    incrementalTag UUID DEFAULT uuid_generate_v4() PRIMARY KEY
);

CREATE TABLE eventDesc( --to store the event options like vacations, day off, etc
    tag text,
    tagDescription text
);

CREATE TABLE vacationsPolicy(
    years integer, --for a given year how many vacatios day can an employee take 
    daysPerYear integer 
    
);
