const express = require('express');
const { userRouter, productRouter } = require('./routes');

/* eslint-disable no-console */

const app = express();
const PORT = 3000;
app.use(express.json());
app.listen(PORT, () => console.log('Server up'));
userRouter(app);
productRouter(app);
