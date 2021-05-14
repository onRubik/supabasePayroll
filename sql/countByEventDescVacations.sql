SELECT "employeeid", "lastname", COUNT("eventdesc")AS vacationsCount
FROM "eventrecords"
WHERE "eventdate" BETWEEN '2021-03-11' AND '2022-03-11'
AND "eventdesc" LIKE 'VAC'
AND "employeeid" = 19838
GROUP BY "employeeid", "lastname";