import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/card'
class App extends React.Component {
    render() {
    	return (
    		<div className="container">
    			<div className="row">
    				<Card/>
    				<Card/>
    				<Card/>
    				<Card/>
    				<Card/>
    				<Card/>
    			</div>
    		</div>
    	);
	}
}

export default App;
