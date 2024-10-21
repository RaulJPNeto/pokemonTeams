const express = require('express');
const connectDB = require('./config/db');
const userRouts = require('./routes/userRoutes');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT;

connectDB();

const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
}

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouts);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
