import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export async function connectMongoDb_Lazy_InLog() {
  console.log('--------------');
  console.log("INFO: Connecting to database.");
  // console.log("Temp log: ",process.env.MONGO_DB_URI) // mylog.
  await mongoose
    .connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("SUCCESS: ☻ Connection successful ☺.");
    })
    .catch((error) => {
      console.log("error connection to MongoDB:", error.message);
    });
  return 'THANKS: For awaiting connectMongoDb().\n--------------'
}
export async function saveToCollection_Lazy(collection, data) {
  try {
    const savedData = await new collection(data).save();
    console.log("INFO: ", savedData);
  } catch (error) {
    console.log(`==NAKED ERROR== ${error.message} ==produced by== ${error.name}.`);
  }
}
export const createCollection = (collectionName, schemaObject) => mongoose.model(collectionName, new mongoose.Schema(schemaObject));
export const deleteCollection_Lazy_InLog = (collection) => collection.deleteMany({})
export const closeConnection = () => mongoose.connection.close()