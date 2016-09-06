-- 1
SELECT countries.name, languages.language, languages.percentage 
FROM languages 
JOIN countries ON country_id = countries.id
WHERE languages.language='Slovene' 
AND languages.percentage > 0 
ORDER BY languages.percentage DESC;

-- 2
SELECT countries.name, COUNT(cities.name)
FROM cities
JOIN countries ON country_id = countries.id
GROUP by cities.country_id
ORDER BY COUNT(cities.name) DESC;

-- 3
SELECT cities.name, cities.population
FROM cities
JOIN countries ON cities.country_id = countries.id
WHERE countries.name = 'Mexico'
AND cities.population > 500000;

-- 4
SELECT countries.name, languages.language, languages.percentage
FROM languages
JOIN countries ON languages.country_id=countries.id
WHERE languages.percentage > 89
ORDER BY countries.name ASC, languages.percentage DESC;

-- 5
SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area < 501
AND countries.population > 100000;

-- 6
SELECT countries.name, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form='Constitutional Monarchy'
AND countries.life_expectancy > 75
AND capital > 200

-- 7
SELECT countries.name, cities.name, cities.district, cities.population
FROM cities
JOIN countries ON cities.country_id=countries.id
WHERE countries.name = 'Argentina'
AND cities.district = 'Buenos Aires'
AND cities.population > 500000

-- 8
SELECT countries.region, COUNT(countries.name)
FROM countries
GROUP BY countries.region
ORDER BY COUNT(countries.name) DESC;