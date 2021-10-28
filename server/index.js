require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const client = new MongoClient(process.env.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// client.connect(err => {
//   if (err) console.log(err);
//   const collection = client.db('list-of-events').collection('events');
//   // perform actions on the collection object
//   client.close();
// });

async function run() {
  try {
    await client.connect();
    const collection = client.db('list-of-events').collection('events');
    const dbEventsList = await collection.find({}).toArray();
    console.log('Подключение с сервером успешно установлено');
    console.log(dbEventsList);
  } catch (err) {
    console.log('Возникла ошибка');
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await client.close();
    console.log('Подключение закрыто');
  }
}
run();

const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));
