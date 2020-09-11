[Learn SQL](https://www.codecademy.com/learn/learn-sql)  

#### Manipulation
LESSON
Get up and running with SQL by learning commands to manipulate data stored in relational databases.

Exercises

1. Introduction to SQL  
SQLite  
 SELECT * FROM celebs;  


id | name | age
--|--|--
1 | Justin Bieber | 22
2 | Beyonce Knowles | 33
3 | Jeremy Lin | 26
4 | Taylor Swift | 26

2. Relational Databases

id | INTEGER
--|--
name | TEXT
age | INTEGER



3. Statements  
SELECT * FROM celebs;  
4. Create
```
SELECT * FROM celebs;
CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
); 
SELECT * FROM celebs;
```
5. Insert
```
INSERT INTO celebs (id, name, age) VALUES (1, 'Justin Bieber', 22); 
INSERT INTO celebs (id, name, age) VALUES (2, 'Beyonce Knowles', 33);
INSERT INTO celebs (id, name, age) VALUES (3, 'Jeremy Lin', 26);
INSERT INTO celebs (id,name,age) VALUES (4, 'Taylor Swift', 26);
```
6. Select
```
-- SELECT name FROM celebs; 
-- SELECT id,name FROM celebs;
SELECT * FROM celebs;```
7. Alter
```
 SELECT * FROM celebs;
 ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;
 SELECT * FROM celebs;
```

id | name | age | twitter_handle
--|--|--|--
1 | Justin Bieber | 22 | 
2 | Beyonce Knowles | 33 | 
3 | Jeremy Lin | 26 | 
4 | Taylor Swift | 26 | 

8. Update
```
 UPDATE celebs SET twitter_handle = '@taylorswift13' WHERE id = 4;
 SELECT * FROM celebs;
 ```
9. Delete
```
DELETE FROM celebs WHERE twitter_handle IS NULL; 
SELECT * FROM celebs;
```
10. Constraints
```
 CREATE TABLE awards ( 
   id INTEGER PRIMARY KEY,
   recipient TEXT NOT NULL,
   award_name TEXT DEFAULT 'Grammy'
);
```
11. Review

`CREATE TABLE` creates a new table.  
`INSERT INTO` adds a new row to a table.  
`SELECT` queries data from a table.  
`ALTER TABLE` changes an existing table.  
`UPDATE` edits a row in a table.  
`DELETE FROM` deletes rows from a table.  

#### Queries
LESSON
Learn the most commonly used SQL commands to query a table in a database.

Exercises

1. Introduction


id | name | genre | year | imdb_rating
--|--|--|--|--
1 | Avatar | action | 2009 | 7.9
2 | Jurassic World | action | 2015 | 7.3
3 | The Avengers | action | 2012 | 8.1
4 | The Dark Knight | action | 2008 | 9.0
5 | Star Wars: Episode I - The Phantom Menace | action | 1999 | 6.6
6 | Star Wars | action | 1977 | 8.7
7 | Avengers: Age of Ultron | action | 2015 | 7.9
8 | The Dark Knight Rises | action | 2012 | 8.5
9 | Pirates of the Caribbean: Dead Mans Chest | action | 2006 | 7.3
10 | Iron Man 3 | action | 2013 | 7.3
11 | Spider-Man | action | 2002 | 7.3
12 | Transformers: Revenge of the Fallen | action | 2009 | 6.0
13 | Star Wars: Episode III - Revenge of the Sith | action | 2005 | 7.7
14 | Spider-Man 2 | action | 2004 | 7.3
15 | Transformers: Dark of the Moon | action | 2011 | 6.3
16 | American Sniper | action | 2014 | 7.4
17 | Furious Seven | action | 2015 | 7.4
18 | Spider-Man 3 | action | 2007 | 6.2
19 | Guardians of the Galaxy | action | 2014 | 8.1
20 | Transformers | action | 2007 | 7.1
21 | Iron Man | action | 2008 | 7.9
22 | Indiana Jones and the Kingdom of the Crystal Skull | action | 2008 | 6.2
23 | Iron Man 2 | action | 2010 | 7.1
24 | Star Wars: Episode II - Attack of the Clones | action | 2002 | 6.7
25 | Pirates of the Caribbean: At Worlds End | action | 2007 | 7.1


2. Select  
SELECT name, genre, year FROM movies;  
3. As
SELECT  imdb_rating AS  'IMDb' FROM movies;  
4. Distinct  
```
SELECT DISTINCT genre FROM movies;
genre
action
comedy
horror
romance
drama
```
5. Where
SELECT * FROM movies WHERE imdb_rating > 8;  
SELECT * FROM movies WHERE year > 2014;  


6. Like I  
SELECT * FROM movies WHERE name LIKE 'Se_en';

id | name | genre | year | imdb_rating
--|--|--|--|--
219 | Se7en | drama | 1995 | 8.6
220 | Seven | drama | 1979 | 6.1

7. Like II
```
SELECT * FROM movies WHERE name LIKE '%man%';  
SELECT * FROM movies WHERE name LIKE 'The %';  
```
8. Is Null  
SELECT name FROM movies WHERE imdb_rating IS NOT NULL;  
9. Between  
```
name begins with the letters ‘D’, ‘E’, and ‘F’  
SELECT * FROM movies WHERE name BETWEEN 'D' AND 'G';
SELECT year FROM movies WHERE year BETWEEN 1970 AND 1979;  
если буквы крайнее правое не включается,
если числа крайнее правое включается.
```

10. And  
SELECT * FROM movies WHERE year BETWEEN 1970 AND 1979 AND imdb_rating > 8;

id | name | genre | year | imdb_rating
--|--|--|--|--
6 | Star Wars | action | 1977 | 8.7
194 | Jaws | drama | 1975 | 8.1

11. Or  
SELECT * FROM movies WHERE year < 1985 AND genre == 'horror';  
SELECT * FROM movies WHERE year > 2014 OR genre = 'action';  
SELECT * FROM movies WHERE genre = 'romance' OR genre = 'comedy';  
12. Order By  
SELECT name, year FROM movies ORDER BY name;  
SELECT name, year, imdb_rating FROM movies ORDER BY imdb_rating DESC;  
13. Limit   
SELECT * FROM movies ORDER BY imdb_rating DESC LIMIT 3;  

id | name | genre | year | imdb_rating
--|--|--|--|--
4 | The Dark Knight | action | 2008 | 9.0
30 | Inception | action | 2010 | 8.8
32 | Star Wars: Episode V - The Empire Strikes Back | action | 1980 | 8.8
148 | Forrest Gump | romance | 1994 | 8.8
6 | Star Wars | action | 1977 | 8.7
201 | Interstellar | drama | 2014 | 8.7
56 | Inside Out | comedy | 2015 | 8.6
199 | Saving Private Ryan | drama | 1998 | 8.6
219 | Se7en | drama | 1995 | 8.6
8 | The Dark Knight Rises | action | 2012 | 8.5

14. Case
```
SELECT name,  
CASE 
WHEN genre = 'romance' THEN 'Chill' 
WHEN genre = 'comedy' THEN 'Chill' 
ELSE 'Intense' 
END AS 'Mood'
FROM movies;
```
15. Review

- SELECT is the clause we use every time we want to query information from a database.
- AS renames a column or table.
- DISTINCT return unique values.
- WHERE is a popular command that lets you filter the results of the query based on conditions that you specify.
- LIKE and BETWEEN are special operators.
- AND and OR combines multiple conditions.
- ORDER BY sorts the result.
- LIMIT specifies the maximum number of rows that the query will return.
- CASE creates different outputs.

#### Aggregate Functions
LESSON
Learn how to use SQL to perform calculations during a query.

Exercises

1. Introduction

2. Count

3. Sum

4. Max / Min

5. Average

6. Round

7. Group By I

8. Group By II

9. Having

10. Review

#### Aggregate Functions
LESSON
Learn how to use SQL to perform calculations during a query.

Exercises

1. Introduction  


- COUNT(): count the number of rows
- SUM(): the sum of the values in a column
- MAX()/MIN(): the largest/smallest value
- AVG(): the average of the values in a column
- ROUND(): round the values in the column 


SELECT * FROM fake_apps;

id | name | category | downloads | price
--|--|--|--|--
3 | siliconphase | Productivity | 17193 | 0.0
6 | Donzolab | Education | 4259 | 0.99
10 | Ittechi | Reference | 3874 | 0.0
13 | Subdrill | Education | 7132 | 1.99

2. Count


```
SELECT COUNT(*) FROM fake_apps;
-- COUNT(*)
-- 200
SELECT COUNT(*) FROM fake_apps WHERE price = 0;
-- COUNT(*)
-- 73
```



3. Sum  
```
SELECT SUM(downloads) FROM fake_apps;
-- 3322760
```
4. Max / Min
```
SELECT MAX(downloads) FROM fake_apps;
-- 31090
SELECT MIN(downloads) FROM fake_apps;
-- 1387
SELECT name, MIN(downloads) FROM fake_apps;
```

name | MIN(downloads)
--|--
Zimlane | 1387



##### SELECT name, MAX(price) FROM fake_apps;
name | MAX(price)
--|--
Anzoom | 14.99

5. Average
```
SELECT AVG(downloads) FROM fake_apps;
-- 16613.8
SELECT AVG(price) FROM fake_apps;
-- 2.02365
```
6. Round
```
SELECT ROUND(price, 2)
FROM fake_apps;
-- 0.0
-- 0.99
-- 0.0
-- 1.99

SELECT ROUND(price, 0)
FROM fake_apps;
-- 0.0
-- 1.0
-- 0.0
-- 2.0

SELECT ROUND(AVG(price), 2)
FROM fake_apps;
-- 2.02 -- 2.02365
```




##### 7. Group By I
```
SELECT price, COUNT(*) 
FROM fake_apps 
GROUP BY PRICE;
```
price | COUNT(*)
--|--
0.0 | 73
0.99 | 43
1.99 | 42
2.99 | 21
3.99 | 9
14.99 | 12

```
SELECT price, COUNT(*) 
FROM fake_apps WHERE downloads >= 20000
GROUP BY PRICE;
```
price | COUNT(*)
--|--
0.0 | 26
0.99 | 17
1.99 | 18
2.99 | 7
3.99 | 5
14.99 | 5

```
SELECT category, SUM(downloads) FROM fake_apps 
GROUP BY category;
```
category | SUM(downloads)
--|--
Books | 160864
Business | 178726
Catalogs | 186158
Education | 184724
Entertainment | 95168
Finance | 178163
Food & Drink | 90950
Games | 256083
Health & Fitness | 165555
Lifestyle | 166832
Medical | 77191
Music | 59367
Navigation | 152114
News | 103259
Photo & Video | 184848
Productivity | 117811
Reference | 162032
Social Networking | 126549
Sports | 176988
Travel | 242116
Utilities | 96099
Weather | 161163

8. Group By II
```
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;
```

category | price | AVG(downloads)
--|--|--
Books | 0.0 | 11926.5
Books | 0.99 | 27709.5
Books | 1.99 | 21770.3333333333
Books | 2.99 | 16281.0
Business | 0.0 | 14744.25
Business | 0.99 | 15753.0
Business | 1.99 | 18155.5
Business | 2.99 | 19598.5
Business | 14.99 | 28488.0
Catalogs | 0.0 | 19393.0
Catalogs | 0.99 | 4937.0

9. Having
```
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price;
```


price | ROUND(AVG(downloads)) | COUNT(*)
--|--|--
0.0 | 15762.0 | 73
0.99 | 15972.0 | 43
1.99 | 16953.0 | 42
2.99 | 17725.0 | 21
3.99 | 18742.0 | 9
14.99 | 19369.0 | 12

```
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*)>10;
```
price | ROUND(AVG(downloads)) | COUNT(*)
--|--|--
0.0 | 15762.0 | 73
0.99 | 15972.0 | 43
1.99 | 16953.0 | 42
2.99 | 17725.0 | 21
14.99 | 19369.0 | 12

10. Review

#### Multiple Tables
LESSON
Learn how to query multiple tables using joins.

Exercises

1. Introduction
```
SELECT *
FROM orders
LIMIT 5;
SELECT *
FROM subscriptions
LIMIT 5;
SELECT * 
FROM customers
LIMIT 5;
```

order_id | customer_id | subscription_id | purchase_date
--|--|--|--
1 | 3 | 2 | 01-10-2017
2 | 2 | 4 | 01-9-2017
3 | 3 | 4 | 01-26-2017
4 | 9 | 9 | 01-4-2017
5 | 7 | 5 | 01-25-2017

subscription_id | description | price_per_month | subscription_length
--|--|--|--
1 | Politics Magazine | 10 | 12 months
2 | Politics Magazine | 11 | 6 months
3 | Politics Magazine | 12 | 3 months
4 | Fashion Magazine | 15 | 12 months
5 | Fashion Magazine | 17 | 6 months

customer_id | customer_name | address
--|--|--
1 | Allie Rahaim | 123 Broadway
2 | Jacquline Diddle | 456 Park Ave.
3 | Lizabeth Letsche | 789 Main St.
4 | Jessia Butman | 1 Columbus Ave.
5 | Inocencia Goyco | 12 Amsterdam Ave.

2. Combining Tables Manually  
```
Sports Magazine
Joe Schmo	
```

3. Combining Tables with SQL  
```
SELECT orders.order_id,
 customers.customer_name
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;
```

order_id | customer_name
--|--
1 | Lizabeth Letsche
2 | Jacquline Diddle
3 | Lizabeth Letsche
4 | Eryn Vilar
5 | Janay Priolo

```
JOIN subscriptions
ON orders.subscription_id = subscriptions.subscription_id;
SELECT * FROM orders
JOIN subscriptions
ON orders.subscription_id = subscriptions.subscription_id
WHERE description = 'Fashion Magazine';
```

rder_id | customer_id | subscription_id | purchase_date | subscription_id | description | price_per_month | subscription_length
--|--|--|--|--|--|--|--
2 | 2 | 4 | 01-9-2017 | 4 | Fashion Magazine | 15 | 12 months
3 | 3 | 4 | 01-26-2017

SELECT COUNT(*) FROM newspaper;
SELECT COUNT(*) FROM online;
SELECT COUNT(*) FROM newspaper
JOIN online
ON newspaper.id == online.id; 

4. Inner Joins

5. Left Joins


```
SELECT * FROM newspaper
LEFT JOIN online
ON newspaper.id = online.id;
SELECT * FROM newspaper
LEFT JOIN online
ON newspaper.id = online.id
WHERE online.id IS NULL;
```





6. Primary Key vs Foreign Key
```
SELECT * FROM classes
JOIN students
ON classes.id = students.class_id;
```
7. Cross Join
```
SELECT COUNT(*) FROM newspaper
WHERE start_month <=3 AND end_month >=3;
SELECT * FROM newspaper
CROSS JOIN months;
SELECT * FROM newspaper
CROSS JOIN months
WHERE start_month <=month AND end_month >= month;
SELECT month, COUNT(*) FROM newspaper
CROSS JOIN months
WHERE start_month <=month AND end_month >= month
GROUP BY month;
```
8. Union
```
SELECT * FROM newspaper
UNION
SELECT * FROM online;
```
9. With

10. Review

```
SELECT customer_id, 
COUNT(subscription_id)
AS 'subscriptions'
FROM orders
GROUP BY customer_id;
```
customer_id | subscriptions
--|--
1 | 4
2 | 1
3 | 6
4 | 2
5 | 2
6 | 1
7 | 1
8 | 1
9 | 2

```
WITH previous_query AS (
SELECT customer_id, 
COUNT(subscription_id)
AS 'subscriptions'
FROM orders
GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions FROM previous_query
JOIN customers
WHERE customers.customer_id = previous_query.customer_id;
```
customer_name | subscriptions
--|--
Allie Rahaim | 4
Jacquline Diddle | 1
Lizabeth Letsche | 6
Jessia Butman | 2
Inocencia Goyco | 2
Bethann Schraub | 1
Janay Priolo | 1
Ophelia Sturdnant | 1
Eryn Vilar | 2








```python
def replaceTab(s2):
    l2 = s2.split("\n")
    i1 = ""
    l3 = []
    column=0
    for i in l2:
        if len(i) > 2:
            k=i.count("\t")
            column = k if k>column else column
            i1 = i.replace("\t", " | ")
            l3.append(i1)
    s3="__"
    for i in range(column):
        s3 += "|__"
    s4="--"
    for i in range(column):
        s4 += "|--"    
    l3.insert(1,s4)
    # l3.insert(0,s3)
    for i in l3:
        print (i)
    # print(l3, k)
def makeTab6():
    s3 = '_|_|_|_|_|_'
    s4 = '--|--|--|--|--|--'
    s5 = '|||||'
    print(s3)
    print(s4)
    print(s5)
    print(s5)
s2 = \
'''\
customer_name	subscriptions
Allie Rahaim	4
Jacquline Diddle	1
Lizabeth Letsche	6
Jessia Butman	2
Inocencia Goyco	2
Bethann Schraub	1
Janay Priolo	1
Ophelia Sturdnant	1
Eryn Vilar	2
'''
a = 1
if a==1:
    replaceTab(s2)
if a==2:    
    makeTab6()
```

    customer_name | subscriptions
    --|--
    Allie Rahaim | 4
    Jacquline Diddle | 1
    Lizabeth Letsche | 6
    Jessia Butman | 2
    Inocencia Goyco | 2
    Bethann Schraub | 1
    Janay Priolo | 1
    Ophelia Sturdnant | 1
    Eryn Vilar | 2
    





```python
%%html

```


<p></p>




```python
%%html

```


<p></p>




```python
%%html

```


<p></p>



22.02 0-25-50  
23.02 50-75-  

_|_|_|_|_|_
--|--|--|--|--|--
opposite|наоборот||||
|||||
