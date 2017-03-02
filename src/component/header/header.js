import React from 'react';
import AppBar  from 'material-ui/AppBar';

class Header extends React.Component{
  render(){
    return (
      <div>
        <AppBar title="Blood Bank" iconClassNameRight="muidocs-icon-navigation-expand-more" />
      </div>
    )
  }
}

export default Header;
