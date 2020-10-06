# mongo-quick

Quick start with mongodb, right now.

Table of Contents

- [mongo-quick](#mongo-quick)
  - [New release with no breaking changes plus typescript support now 😉](#new-release-with-no-breaking-changes-plus-typescript-support-now-)
  - [Alert](#alert)
  - [Usage](#usage)
  - [Example 0](#example-0)
  - [Example 1](#example-1)
  - [Example 2](#example-2)
  - [Example 3](#example-3)
  - [Example 4](#example-4)
  - [Example 5](#example-5)
  - [Happy hackings!](#happy-hackings)

The motive of this library is to just jump start with mongoose without much crucial logging for saving data, deleting collections, making models, etc.

To request feature for this library or any questions please create respective issue here <https://github.com/sahilrajput03/mongo-quick/issues/new> .

**Quick tip 1:** Install this library via, `npm i mongo-quick`

**Quick tip 2:** Run below command to add db's address to .env file

`echo MONGO_DB_URI=mongodb://localhost/testdb >> .env` You can specify any your own atlas or mongodb server running on somewhere else.

## New release with no breaking changes plus typescript support now 😉

~~**Quick tip 3:** Add `"type": "module"` in root object to your package.json file~~

~~**Quick tip 4:** Add start script `node.exe --no-warnings index.js` in package.json file.~~

~~**Quick tip 5:** Add dev script `nodemon -q -x node.exe --no-warnings index.js` in package.json file.~~

Now you don't need to make it difficult to start using this awesome library. You just install and start using `mongo-quick` in any existing project.

## Alert

- Define a .env file and put `MONGO_DB_URI=mongodb://localhost/testdb` there(otherwise it won't connect to mongodb). I have set it up with local db, but you can use any
  online/offline mongodb

- You **don't need to install `mongoose` or `dotenv`**, they are already inscribed this `mongo-quick` library.

## Usage

Below example use `mongo-quick` for currently available features

BOOM TAM TAM - 😂Lazy😂 means it needs await before it. :D

## Example 0

```js
import { connectMongoDb_Lazy_InLog, saveToCollection_Lazy, useCollection, deleteCollection_Lazy_InLog, closeConnection, saveToCollection_Lazy_Piped } from "mongo-quick";
// You can use destructuring styled named imports too, but I recommend serving all of them just from a single default export just like I have done below examples via `mq`.
```

## Example 1

```js
import mq from "mongo-quick";

(async function () {
  const itemCollection2020 = mq.useCollection("itemCollection2020", {
    itemModel: String,
    itemAuthor: String,
    // So, ^^^^^^ here goes your mongoose schema for a model.
  });
  // itemCollection2020 is nothing but the model returned by mongoose.model() method.

  console.log(await mq.connectMongoDb_Lazy_InLog());
  // Tip: This automatically picks the database uri of MONGO_DB_URI from .env file.

  await mq.saveToCollection_Lazy(itemCollection2020, {
    itemModel: "Cadbury - Dairy Milk",
    itemAuthor: "Nestle",
    // So, ^^^^^^ here goes the data you want to save to the collection in mongodb.
  });

  console.log(await mq.deleteCollection_Lazy_InLog(itemCollection2020));
  // Deletes all documents in the collection and logs the deletion process info after that.

  mq.closeConnection();
  // This will simply close the mongodb connection.
})();
```

## Example 2

```js
import mq from "mongo-quick";

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
    // Try keeping Arrays at top, coz mongodb does that too,  you can obviously ignore this tip though.
  });

  console.log(await mq.connectMongoDb_Lazy_InLog());

  await mq.saveToCollection_Lazy_Piped(itemCollection2020, [22, 33, 444], "Ramanujan", "Mathematician", { x: 20, y: 30, z: 50 }, { x: 10, y: 8 }, 4, "Completely Round");

  mq.closeConnection();
})();
```

## Example 3

```js
import mq from "mongo-quick";

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
  });
  // console.log(await mq.deleteCollection_Lazy_InLog(itemCollection2020))

  mq.closeConnection();
})();
```

## Example 4

```js
import mq from "mongo-quick";

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
  });

  mq.closeConnection();
})();
```

## Example 5

```js
import mq from "mongo-quick";

(async function () {
  console.log(await mq.connectMongoDb_Lazy_InLog());

  console.log(await mq.deleteCollection_Lazy_InLog("itemCollection2020"));
  // Deleting collection by passing collection name as ^^^ parameter.

  mq.closeConnection();
})();
```

## Happy hackings!
