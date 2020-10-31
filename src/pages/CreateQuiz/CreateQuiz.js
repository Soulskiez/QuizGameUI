import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Question from './Question';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column'
	},
	body: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 20px 20px 20px'
	},
	button: {
		margin: '30px 30px 30px 30px'
	},
	inputFields: {
		margin: '30px 30px 30px 30px'
	}
});

function CreateQuiz() {
	const classes = useStyles();
	const [ createQuestions, setCreateQuestions ] = useState([]);
	const questions = [
		{
			prompt: 'What is the average par for golf?',
			answers: [ '69', '72', '80', '50' ],
			correctIndex: 1,
			quiz_id: 'sdfjf-sdf-sdf-ffsdfffsfs-ff' //something like tis
		},
		{
			prompt: 'How tall am I',
			answers: [ '5ft', '6ft', '510', '64' ],
			correctIndex: 1,
			quiz_id: 'sdfjf-sdf-sdf-ffsdfffsfs-ff' //something like tis
		}
	];
	// const getQuestions = (questions) => {
	// 	return createQuestions.map((question, index) => {
	// 		  question;
	// 	});
	// 	// return <Question prompt />;
	// };

	return (
		<div className={classes.root}>
			<h1>Create</h1>
			<div className={classes.body}>
				<TextField className={classes.inputFields} label="Quiz Name" variant="outlined" />
				<TextField label="Quiz Description" variant="outlined" />
				<Question questionNum={1} />
				<Question questionNum={2} />
				<Button className={classes.button} variant="contained">
					Save
				</Button>
				<Button variant="contained" component={Link} to="/">
					Go Home
				</Button>
			</div>
		</div>
	);
}

export default CreateQuiz;
