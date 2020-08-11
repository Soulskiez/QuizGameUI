import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column'
	}
});

function PlayQuiz() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h1>PlayQuiz!!</h1>
			<div>
				<Button variant="contained" component={Link} to="/">
					Go to home
				</Button>
			</div>
		</div>
	);
}

export default PlayQuiz;
