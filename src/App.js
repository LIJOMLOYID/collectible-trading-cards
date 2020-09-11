import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
    	return (
    		<div className="container">
    			<div className="row">
    				<div className="col-md-4">
    					<div className="card" >
						  <img className="card-img-top" src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Card image cap"/>
						  <div className="card-body">
						    <h5 className="card-title">Card title</h5>
						    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						    <a href="#" className="btn btn-primary">Go somewhere</a>
						  </div>
						</div>
    				</div>
    			</div>
    		</div>
    	);
	}
}

export default App;
