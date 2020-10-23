const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();

db();

global.__basedir = __dirname;

app.use(cors());
app.use( express.json({ extended: true }));

const port = process.env.PORT || 3200;

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/extras', require('./routes/extra'));
app.use('/files', require('./routes/upload'));

app.listen(port, '0.0.0.0', () => {
    console.log(`Express server listening ${port}`);
});
