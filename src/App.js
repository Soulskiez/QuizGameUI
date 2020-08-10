import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './pages/Home';
import CreateQuiz from './pages/CreateQuiz';
import PlayQuiz from './pages/CreateQuiz';

function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/create" component={CreateQuiz} />
				<Route path="/play/:id" component={PlayQuiz} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
