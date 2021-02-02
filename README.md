# Conceptual-Implementation---News-Feeds-using-MongoDB

# Project Description :

Creating a News API server

In this fast-growing economy, it's very necessary to be up to date with the news. Easier said than done. One of the major problems is a slow news server. So let's do something about it. We can create our own api to send stored news data from our own MongoDB server.
This API also needs to be paginated. We should be able to define the offset and the limit in the API call through query parameters.

Details:

You can create the news database on your system using command node ./src/createDatabase.js.


We want to send the data stored in collection named dailynews

We have to expose only one endpoints at localhost:8080


GET http:/locahost:8080/newFeeds


Two parameters limit, offset can also be passed along with this request.

Parameter limit will define number of records that are required in response.

Parameter offset will define number of records that are suppose to skip from the first recorded in the collection.

When invalid value of parameters is passed then consider default value for it.

Default value of limit is 10 and for offset its 0.

If records are found for given limit and offset send it in the form of array without editing the record. Don't edit the structure.

If no records are found, return empty array.
