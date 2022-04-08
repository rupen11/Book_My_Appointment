require('dotenv/config');
const express = require('express');

const app = express();
const port = 5000 || process.env.PORT;
const auth = require('./routers/auth');
const appointment = require('./routers/appointment');
require('./db/db');

app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/appointment', appointment);

app.listen(port, () => console.log("App running at http://localhost:" + port));