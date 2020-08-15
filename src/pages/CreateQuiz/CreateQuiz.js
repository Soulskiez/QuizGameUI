import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Question from './components/Question';

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
	return (
		<div className={classes.root}>
			<h1>Create</h1>
			<div className={classes.body}>
				<TextField className={classes.inputFields} label="Quiz Name" variant="outlined" />
				<TextField label="Quiz Description" variant="outlined" />
				<Question questionNum={1} />
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
