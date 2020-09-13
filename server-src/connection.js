const MongoClient = require("mongodb").MongoClient;
const LD = require("lodash");

function dbAction(action) {
  MongoClient.connect(process.env.CONNECTION_STRING, function (err, db) {
    if (err) {
      db.close();
      throw err;
    }
    const actionRes = action(db, db.db(process.env.DB_NAME));
    db.close();
    return actionRes;
  });
}

function newCollection(collectionName) {
  dbAction((db, dbo) => {
    dbo.createCollection(collectionName, function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });
}

function insert(collectionName, record) {
  return new Promise((resolve, reject) => {
    dbAction((db, dbo) => {
      dbo.collection(collectionName).insertOne(record, function (err, res) {
        if (err) throw err;
        resolve(res);
      });
    });
  });
}

function insertMany(collectionName, records) {
  dbAction((db, dbo) => {
    dbo.collection(collectionName).insertMany(records, function (err, res) {
      if (err) throw err;
      db.close();
    });
  });
}

async function getAll(collectionName) {
  return new Promise((resolve, reject) => {
    dbAction((db, dbo) => {
      dbo.collection(collectionName).find({}).toArray(function (err, res) {
        resolve(res);
      });
    });
  });
}

async function get(collectionName, id) {
  return new Promise((resolve, reject) => {
    dbAction((db, dbo) => {
      dbo.collection(collectionName).find({ id }).toArray(function (err, res) {
        resolve(res[0]);
      });
    });
  });
}

async function update(collectionName, id, newRecord) {
  return new Promise((resolve, reject) => {
    dbAction((db, dbo) => {
      dbo.collection(collectionName).updateOne(
        { id: id },
        { $set: newRecord },
        function (err, res) {
          resolve(res);
        },
      );
    });
  });
}

const promise1 = module.exports = {
  get,
  getAll,
  newCollection,
  insert,
  insertMany,
  update,
};
