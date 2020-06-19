-- Questão b
SELECT round(SUM(reviews_per_month),2) as Total_de_Reviews_Mes,
round(AVG(reviews_per_month),2) as Media_de_Reviews_Mes
FROM AB_NYC_2019
WHERE neighbourhood_group = 'Brooklyn';
