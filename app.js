const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const fs = require('fs');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Start exercise v1

/* -------------------------------------------------------------------------- */
/*                               Page d'accueil                               */
/* -------------------------------------------------------------------------- */
const data = fs.readFileSync(`${__dirname}/public/kittens.json`, 'utf-8')

app.get('/', (req, res) => {
  // 1) Lire le fichier `kittens.json`
/*   fs.readFile(`${__dirname}/public/kittens.json`, 'utf-8', (err, data) => {
  }); */
  // 2) Convertir `kittens` (string) en objet
  const kittens = JSON.parse(data);

  res.render('home', { kittens });
});

/* -------------------------------------------------------------------------- */
/*                                 Page Detail                                */
/* -------------------------------------------------------------------------- */

app.get('/kittens/:id', (req, res) => {
/*   fs.readFile(`${__dirname}/public/kittens.json`, 'utf-8', (err, data) => {
    // 2) Convertir `kittens` (string) en objet
  }); */
  const kittens = JSON.parse(data);
  const params = req.params; // exemple {id: 9}

  const item = kittens.find((element) => element.id === Number(params.id));
  res.render('detail', { item });
});
module.exports = app;
