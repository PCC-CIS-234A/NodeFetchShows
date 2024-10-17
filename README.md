# NodeFetchShows
An example of a simple n-tier architecture for a round trip to the database in Node.js. The example was developed 
for students who are using Node.js in Portland Community College's course CIS 234A, Real-World Programming.

## Introduction
Read show information from the IMDB database on cisdbss.pcc.edu and wrap rows from the title_basics table in to Show 
objects. Illustrates the following:
* Use static methods on the Database class to maintain and reuse a single connection to the database.
* 3 tier architecture with data, logic, and ui layers.
* Using parameterized queries to prevent SQL injection attacks.

## Requirements
Please make sure the following packages are installed:
* mssql - A library for talking to Microsoft SQL Server databases.
* node-mssql - A database driver that is used by mssql.
* readline-sync - A simple package for getting input from the console.
* nunjucks - A templating library for HTML similar to JinJa2.

## Contact
If you have any questions, please contact Marc at PCC CIS or the course instructors.
