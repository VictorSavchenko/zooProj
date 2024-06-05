require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const dbConnectionCheckMdw = require('./src/middleware/dbConnectionCheck');
// const { checkUser, secureRoute } = require('./src/middleware/common');

// const indexRouter = require('./src/routes/');
const animalsRouter = require('./src/routes/animals');

const { PORT } = process.env;
const app = express();

// const sessionConfig = {
//   name: 'cookieName',
//   store: new FileStore(),
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 365 * 24 * 1000 * 60 * 60,
//     httpOnly: true,
//   },
// };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
// app.use(session(sessionConfig));
app.use(dbConnectionCheckMdw);

// app.use('/', indexRouter);
app.use('/animals', animalsRouter);
// app.use('/admin', adminRouter);
// app.use('/tariff', tariffRouter);

// app.use('*', (req, res) => {
//   //   res.status(404).send('404: Данной страницы не существует');
//   res.redirect('/');
// });

app.listen(PORT, () => {
  console.log(`Сервак крутится на порту ${PORT}!`);
});
