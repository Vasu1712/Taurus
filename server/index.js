const express = require('express');
const mongoose = require('mongoose');
const Graph = require('./models/Graph');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

mongoose
	.connect(
		'mongodb+srv://mahirakajaria:' +
		process.env.MONGO_PASSWORD +
		'@cluster0.estoffi.mongodb.net/',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then((x) => {
		console.log('Connected to Mongo!');
	})
	.catch((err) => {
		console.log(err);
	});

const db = mongoose.connection;

// Listen for the 'connected' event to ensure the connection is established
db.once('connected', () => {
	// Access the name of the connected database
	console.log('Connected to database:', db.name);
});

app.get('/', (req, res) => {
	res.send('Hello World');
});
app.use('/auth', authRoutes);

console.log('Connected to database:', mongoose.connection.name);

app.listen(port, () => {
	console.log('App is running on port ' + port);
});
