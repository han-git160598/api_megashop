const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();


app.use(cors({
    origin: '*',
    method: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// import router
const productsRouter = require('./routes/products');
const orderRouter = require('./routes/order');
// use router
app.use('/api/products', productsRouter);
app.use('/api/orders', orderRouter);



module.exports = app;