import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const css = StyleSheet.create ({
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
})
class Header extends Component {
    render (){
        return (
            <View style={css.viewStyle}>
                <Text style={css.textStyle}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export {Header};