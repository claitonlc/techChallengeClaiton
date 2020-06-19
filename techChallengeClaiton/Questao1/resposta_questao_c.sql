-- Questão c
SELECT name, availability_365, ROUND(MIN(price),2) as Price_Min,
                               ROUND(MAX(price),2) as Price_Max,
                               ROUND(AVG(price),2) as Price_Avg
from AB_NYC_2019 
where name like "%ROOM%"  AND availability_365 >= 1
group by availability_365, name ;

