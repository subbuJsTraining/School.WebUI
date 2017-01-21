import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
   render() {
      return (
       <MuiThemeProvider>
		<AppBar
		    title="School App"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  />       	
       </MuiThemeProvider>

      );
   }
}

export default App;