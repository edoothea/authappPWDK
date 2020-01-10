import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'


const css = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,  
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
        }
    })

class CardSection extends Component{
    render(){
        return(
            <View style={css.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

export {CardSection};