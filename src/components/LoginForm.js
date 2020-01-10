import React, { Component } from 'react';
import { Text } from 'react-native';

import {Button, Card, CardSection, Input } from './common' 

import firebase from 'firebase'

const styles = {
    errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
    }
}

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false   
    }

    onButtonPress = () => {
        const { email, password } = this.state

        this.setState ({error: ''})

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail);
        });
    }

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })

    }

    onLoginFail = () => {
        this.setState({error : 'Authentification Faile', loading: false})
    }
    

    renderButton() {
        if (this.state.loading) {
            return <Spinner />
        }
        return (<Button onPress={this.onButtonPress}>
            Log In
        </Button>)
    }
    
    render (){
        return (
            <Card>
                <CardSection>
                    <Input
                        label = "Email"
                        placeholder = 'user@gmail.com'
                        value = {this.state.email}
                        onChangeText = {email => this.setState ({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label = "Password"
                        placeholder = 'password'
                        value ={this.state.password}
                        onChangeText = {password => this.setState ({password})}
                    />
                </CardSection>

                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;