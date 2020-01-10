import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const css = StyleSheet.create ({
    buttonStyle: {
        // flex: 1,
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})

class Button extends Component {
    render(){
        return(
            <TouchableOpacity
                style={css.buttonStyle}
                onPress={this.props.onPress}>
                <Text style={css.textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        )
    }
}

export {Button}