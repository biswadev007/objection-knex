const setUpDb = require('./db/db-setup');
const express = require('express');

const User = require('./models/user');

const app = express();
app.use(express.json());
setUpDb();

app.post('/user', async(req, res)=> {
  const { name, email, id } = req.body;
  const newUser = await User.query().insert({
    id,
    name,
    email
  });
  return res.status(201).send({ data: newUser });
});

app.get('/user', async(req, res)=> {
  const users = await User.query().withGraphFetched('channel');
  return res.status(200).send({ data: users });
});

app.get('/user/:id', async (req, res) => {
  const user = await User.query().findById(req.params.id);

  return res.status(200).send({ data: user });
});

app.listen(4000, () => console.log('Server running on port 4000'));
