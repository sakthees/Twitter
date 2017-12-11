import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const muiTheme = getMuiTheme({
  avator: {
  	
  },
  flatButton: {
  	
  },
  textField: {
  	
  },
});

class App extends React.Component {
  render(){
    return(
    	<MuiThemeProvider  muiTheme={muiTheme}>
    		<Router>
 				<div>
 					<ul>
 						<li><Link to={'/Page1'}>https://twitter.com</Link></li>
 						<li><Link to={'/Page2'}>https://twitter.com/search?q=aadhaar</Link></li>
 					</ul>
 					<Switch>
 						<Route exact path='/Page1' component={Page1}/>			
 						<Route exact path='/Page2' component={Page2}/>
 					</Switch>
 				</div>
 			</Router>
        </MuiThemeProvider>
      )
  }
}

export default App;