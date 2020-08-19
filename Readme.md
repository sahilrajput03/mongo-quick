# mongo-quick (@development stage)
The motive of this library is to just jump start with moongoose without much crucial  logging for saving data, deleting collections, making models, etc. 

This library is in developement state, so use it for just testing and suggest some features. In future, I'll push the code to github, so we can make this better by collaboration.

#### • Install this library via, `npm i mongo-quick`
#### • Define a .env file and put `MONGO_DB_URI=mongodb://localhost/testdb` there(otherwise it won't connect to mongodb). I have set it up with localdb, but you can use any online/offline mongodb.

## Alert:
You **don't need to install `mongoose` or `dotenv`**, they are already inscribed this `mongo-quick` library.

#### Thanks.

### See below example to use `mongo-quick` for currently available features.
### BOOM TAM TAM - 😂Lazy😂 means it needs await before it. :D

##  Example 1:
```js
import * as mq from "mongo-quick";

(async function () {
  const itemCollection2020 = mq.useCollection("itemCollection2020", {
    itemModel: String, itemAuthor: String
    // So, ^^^^^^ here goes your mongoose schema for a model.
  })
  // itemCollection2020 is nothing but the model returned by moongoose.model() method.

  console.log(await mq.connectMongoDb_Lazy_InLog())
  // Tip: This automatically picks the database uri of MONGO_DB_URI from .env file.

  await mq.saveToCollection_Lazy(itemCollection2020, {
    itemModel: 'Cadbury - Dairy Milk', itemAuthor: "Nestle"
    // So, ^^^^^^ here goes the data you want to save to the collection in mongodb.
  })

  console.log(await mq.deleteCollection_Lazy_InLog(itemCollection2020))
  // Deletes all documents in the collection and logs the deletion process info after that.

  mq.closeConnection()
  // This will simply close the mongodb connection.

})();
```

## Example 2:

```js
import * as mq from "mongo-quick";

(async function () {
  const itemCollection2020 = mq.useCollection("itemCollection2020", {
    Dimensions: Array,
    Author: String,
    Specialization: String,
    Angle: Object,
    Sides: Object,
    Edges: Number,
    Roundness: String,
    // Note order is IMPORTANT, coz piped method will save the data with same order of the keys of the schema. :)
    // Try keeping Arrays at top, coz mongodb does that too,  you can obviouly ignore this tip though.
  });

  console.log(await mq.connectMongoDb_Lazy_InLog());

  await mq.saveToCollection_Lazy_Piped
    (
      itemCollection2020,
      [22, 33, 444],
      "Ramanujan",
      "Mathematician",
      { x: 20, y: 30, z: 50 },
      { x: 10, y: 8 },
      4,
      "Completely Round"
    );

  mq.closeConnection();

})();
```
## Example 3:

```js

import * as mq from "mongo-quick";

(async function () {
  const itemCollection2020 = mq.useCollection("itemCollection2020");

  console.log(await mq.connectMongoDb_Lazy_InLog());

  await mq.saveToCollection_Lazy(itemCollection2020, {
    quality: "top notch",
    age: "ancient-era",
    style: [1, 2, 3, 4],
    behaviour: { ca: 20, ma: 40 },
    sharpness: 44,
    coolness: true,
  })
  // console.log(await mq.deleteCollection_Lazy_InLog(itemCollection2020))

  mq.closeConnection();

})();

```
## Example 4:

```js
import * as mq from "mongo-quick";

(async function () {

  console.log(await mq.connectMongoDb_Lazy_InLog());

  await mq.saveToCollection_Lazy("itemCollection2020", {
    // Adding data to collection by ^^^ providing collection name as parameter.
    quality: "top notch",
    age: "ancient-era",
    style: [1, 2, 3, 4],
    behaviour: { ca: 20, ma: 40 },
    sharpness: 44,
    coolness: true,
  })

mq.closeConnection();

})();

```

## Example 5:

```js
import * as mq from "mongo-quick";

(async function () {

  console.log(await mq.connectMongoDb_Lazy_InLog());

  console.log(await mq.deleteCollection_Lazy_InLog("itemCollection2020"))
  // Deleting collection by passing collection name as ^^^ parameter.

  mq.closeConnection();

})();

```