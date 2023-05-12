import bodyParser from 'body-parser';
import ejs from 'ejs';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import session from 'express-session';

import loginRouter from './routes/Login.js';
import registerRouter from './routes/Register.js';
import adminRouter from './routes/Admin.js';
import logoutRouter from './routes/Logout.js';
import propertiesRouter from './routes/Properties.js';

const app = express();
const PORT = 5000;   

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(session({
  secret: 'Pares University',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

await mongoose.connect("mongodb://127.0.0.1:27017/EESMS");

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.use('/logout', logoutRouter);

app.use('/properties', propertiesRouter);

app.use('/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);  
})