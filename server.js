const express = require('express');
const app = express();

app.use('/store', (req, res, next) => {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send("It's only sample request");
});

app.get('/store', (req, res) => {
  console.log('Shopping time ;-)');
  res.send("It's shope here");
});

app.use((req, res, next) =>
  res.status(404).send('My friend You miss road, and what happend now???')
);

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log("Server online, listen on:", port);
});