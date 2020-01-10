import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const css = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,  
        borderColor: '#ddd',  
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
        }
    })

class Card extends Component{
    render(){
        return(
            <View style={css.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

export {Card};