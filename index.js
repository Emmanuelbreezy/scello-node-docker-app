
const express = require('express');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const specs = require('./config/swagger.js'); 
const cartRoute = require('./routes/cart.route.js');
const couponRoute = require('./routes/coupon.route.js');
const { errorHandler,notFound } = require('./middlewares/error.middleware');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Use Helmet middleware
app.use(helmet());
// Serve Swagger UI at /api-docs route
// server
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/cart', cartRoute);
app.use('/api/coupon', couponRoute);

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}!`);
})