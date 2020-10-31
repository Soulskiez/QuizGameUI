import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	accordion: {
		marginTop: theme.spacing(4)
	},
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
}));

function Question(props) {
	const classes = useStyles();
	const { question, questionNum } = props;

	return (
		<Accordion className={classes.accordion}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				{question.prompt.length > 0 ? (
					<Typography>{question.prompt}</Typography>
				) : (
					<Typography>{`Question ${questionNum + 1}`}</Typography>
				)}
			</AccordionSummary>
			<AccordionDetails>
				<div className={classes.root}>
					<TextField label="Prompt" value={question.prompt} />
					<div className={classes.isBooleanQuestionDiv}>
						<Typography>This is a True or False Question</Typography>
						<Checkbox checked={question.isBoolean} />
					</div>
					<div>
						<div>
							<TextField className={classes.question} label="Answer 1" value={question.answers[0]} />
							<TextField className={classes.question} label="Answer 2" value={question.answers[1]} />
						</div>
						<div>
							<TextField className={classes.question} label="Answer 3" value={question.answers[2]} />
							<TextField className={classes.question} label="Answer 4" value={question.answers[3]} />
						</div>
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

export default Question;
