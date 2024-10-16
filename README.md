# NodeFetchShows
An example of a simple n-tier architecture for a round trip to the database in Node.js.

Read show information from the IMDB database on cisdbss.pcc.edu and wrap rows from the title_basics table in to Show 
objects. Illustrates the following:
* Use static methods on the Database class to maintain and reuse a single connection to the database.
* 3 tier architecture with data, logic, and ui layers.
* Using parameterized queries to prevent SQL injection attacks.

If you have any questions, please contact Marc at PCC CIS or the course instructors.
