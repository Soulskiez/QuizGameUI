import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column'
	},
	question: {
		margin: '30px 30px 30px 30px'
	},
	isBooleanQuestionDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	}
});

function Question(props) {
	const classes = useStyles();
	const { questionNum } = props;
	const [ checked, setChecked ] = useState(false);
	const handleChange = (e) => {
		setChecked(e.target.checked);
	};
	return (
		<div className={classes.root}>
			<TextField label={`Question Prompt ${questionNum}`} />
			<div className={classes.isBooleanQuestionDiv}>
				<Typography>This is a True or False Question</Typography>
				<Checkbox checked={checked} onChange={handleChange} />
			</div>
			<div>
				<div>
					<TextField className={classes.question} label="Answer 1" />
					<TextField className={classes.question} label="Answer 2" />
				</div>
				<div>
					<TextField className={classes.question} label="Answer 3" />
					<TextField className={classes.question} label="Answer 4" />
				</div>
			</div>
		</div>
	);
}

export default Question;
