import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import AddCircle from '@material-ui/icons/AddCircle';

import Question from './Question';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Add } from '@material-ui/icons';

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
	const [ createQuestions, setCreateQuestions ] = useState([
		{
			prompt: 'What is the average par for golf?',
			isBoolean: false,
			answers: [ '69', '72', '80', '50' ],
			correctIndex: 1,
			quiz_id: 'sdfjf-sdf-sdf-ffsdfffsfs-ff'
		},
		{
			prompt: 'How tall am I',
			isBoolean: false,
			answers: [ '5ft', '6ft', '510', '64' ],
			correctIndex: 1,
			quiz_id: 'sdfjf-sdf-sdf-ffsdfffsfs-ff'
		}
	]);
	const getQuestions = () => {
		return createQuestions.map((question, index) => <Question question={question} questionNum={index} />);
		// return <Question prompt />;
	};
	const handleAddbuttonClicked = () => {
		//add blank question setTheArray([...theArray, newElement]);
		const blankQuestion = {
			prompt: '',
			isBoolean: false,
			answers: [ '', '', '', '' ],
			correctIndex: 0,
			quiz_id: 'sdfjf-sdf-sdf-ffsdfffsfs-ff'
		};
		setCreateQuestions([ ...createQuestions, blankQuestion ]);
		console.log('hey');
	};

	return (
		<div className={classes.root}>
			<h1>Create</h1>
			<div className={classes.body}>
				<TextField className={classes.inputFields} label="Quiz Name" variant="outlined" />
				<TextField label="Quiz Description" variant="outlined" />
				{getQuestions()}
				<Button className={classes.button} onClick={handleAddbuttonClicked}>
					<AddCircle />
				</Button>
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
