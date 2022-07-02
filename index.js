const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Name = require('./models/name');
const routerName = require('./router/routeName'); 
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

mongoose.connect('mongodb+srv://user:Lionceaux999@cluster0.rgpyp.mongodb.net/jason?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

    app.use(bodyParser.json());
    app.use('/api/names/', routerName)


  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });