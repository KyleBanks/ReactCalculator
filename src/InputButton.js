/**
 * InputButton.js
 * 
 * Created by kylewbanks on 2016-08-07.
 */
'use strict';

import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {
    
    render() {
        return (
            <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}
