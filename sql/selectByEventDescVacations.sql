SELECT employeeid, lastname, eventdesc, eventdate
FROM eventrecords
WHERE "eventdate" BETWEEN '2021-03-11' AND '2022-03-11'
AND employeeid = 19838
AND eventdesc LIKE 'VAC'
ORDER BY "eventdate" ASC;