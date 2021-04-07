import express from 'express';
const app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import parser from 'body-parser';

const product = require('./router/product');

dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose.connect(`${process.env.DB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database connected"));

app.use(parser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', product);


app.listen(PORT, () => console.log('Server is up and running'));