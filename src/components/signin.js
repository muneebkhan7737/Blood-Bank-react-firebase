import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import signOut from './signout'
import Btn from './btn'
import { Link } from 'react-router';
import Input from './input'
import Heading from './heading'
// import RaisedButton from 'material-ui/RaisedButton';

// const MyAwesomeReactComponent = () => (
//   <RaisedButton label="Sign In" />
// );

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
        this.signIn = this.signIn.bind(this)
    }
    signIn(ev) {
        ev.preventDefault();
        let email = this.refs.sign_in.state_email.value;
        let pass = this.refs.sign_in_pass.state.value;
        console.log(email, pass)

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.then((user) => {
            // store.dispatch(this.props.authenticated)
            console.log(user)
            console.log(user.uid)
            // var authenticated = true;
            // this.setState({
            // authenticated: authenticated
            // })
            browserHistory.push('/home')

        })
        promise.catch(e => {
            console.log(e.message)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.signIn}>
                    {/*<label htmlFor="email">Email</label> <br />
                    <input type="email" ref="sign_in_email" defaultValue="a@a.com" /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" ref="sign_in_pass" defaultValue="123456" /> <br />
                    <input type="submit" value="Sign in" />*/}
                    {/*<RaisedButton label="Sign In"/>*/}
                    {/*<MyAwesomeReactComponent />*/}
                 <Heading>Sign In</Heading>
                <form onSubmit={this.signUp}>
                    <Input type="text" placeholder="email" ref="sign_in_email">Emial</Input>
                    <Input type="text" placeholder="password" ref="sign_in_pass">Password</Input>
                    <Btn type="submit">Sign in</Btn>
                </form>
                </form>
                <Link to="/sign_up">
                    Create new Account
                </Link>
                <signOut />
            </div>
        )
    }
}

export default SignIn
// import React from 'react';


// const MyAwesomeReactComponent = () => (
//   <RaisedButton label="Default" />
// );

// export default MyAwesomeReactComponent;
