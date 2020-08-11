import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column'
	}
});

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<Typography>HOME!!</Typography>
				<Button component={Link} to="/create" variant="outlined">
					Create Quiz
				</Button>
				<Typography>Quizzes</Typography>
				<Button component={Link} to="/play/1" variant="contained">
					Quiz 1
				</Button>
				<Button component={Link} to="/play/2" variant="contained">
					Quiz 2
				</Button>
			</div>
		</div>
	);
}

export default Home;
