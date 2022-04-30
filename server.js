import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import studentSchema from './models/studentSchema.js';

const app = express();
app.use(express.json());

const connection = `mongodb+srv://Saritha:${process.env.PASS}@cluster0.khzpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(connection);
mongoose.connection.on(
	'error',
	console.error.bind(console, 'connection error')
);

app.post('/student', (req, res) => {
	if (!req.body) {
		res.status(400);
	}
	const { name, first_name, email } = req.body;
	const student = { name, first_name, email };
	
	studentSchema.create(student, (error, data) => {
		if (error) {
			console.log('there was an error creating a new student', error);
		}
		res.status(200).send('student got created');
	});
});

app.get('/students', (req, res) => {
	studentSchema.find({}, (error, data) => {
		if (error) {
			res.status(400).send('no students found');
		}
		res.json(data);
	});
});

app.listen('3000', () => console.log('server is running'));
