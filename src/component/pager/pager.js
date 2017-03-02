import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FirebaseService from '../../firebaseconfig/config'
import { Link, history,browserHistory } from 'react-router'

import Header from '../header/header'

const button = {
  marginLeft: -90,
  marginTop: 20
}
const button2 = {
  marginLeft: 10,

}
const style = {
  height: 350,
  width: 380,
  margin: '35%',
  marginTop: 100,
  textAlign: 'center',
  display: 'inline-block',
};

class PaperExampleSimple extends React.Component {
  constructor(props) {
    super(props)
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
        console.log("Successful " + this.props)

  }
  signup() {
    let getInput = {
      emails: this.refs.email.input.value,
      pass: this.refs.pass.input.value
    }

    FirebaseService.auth.createUserWithEmailAndPassword(getInput.emails, getInput.pass)
      .then(function (data) {

        console.log("save success on firebase  ", data);
        let saveMsg = FirebaseService.ref.child('messege/users')
        saveMsg.set(getInput)


      }).catch(function (error) {
        console.log("error updating firebase ", error.message);
      });

  }
  login() {
    
    let chechlogin = {
      email: this.refs.email.input.value,
      pass: this.refs.pass.input.value
    }
    FirebaseService.auth.signInWithEmailAndPassword(chechlogin.email, chechlogin.pass)
    
      .then(function (data) {
        console.log("Successfull login " + data)
       browserHistory.push('/home')
       
      }).catch(function (error) {
        alert("Please SignUP " + error)
      })
  }

  render() {

    return (
      <div>
        <Header />
        <Paper style={style} zDepth={5} >
          <TextField hintText="User Name" floatingLabelText="Enter User Name" ref="email" /><br />
          <TextField hintText="Password Field" floatingLabelText="Password" type="password" ref="pass" /><br />

          <RaisedButton label="LOGIN" primary={true} style={button} onClick={this.login} />
          <RaisedButton label="SIGNUP" primary={true} style={button2} onClick={this.signup} />
        </Paper>
      </div>
    )
  }
}
PaperExampleSimple.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default PaperExampleSimple;



//  this.context.router.push({
//           pathname: "/index"
//         })