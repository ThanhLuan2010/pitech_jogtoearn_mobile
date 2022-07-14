import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style'

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const {placeholder,style,rightComponent}  = this.props
        return (
            <View style={[style,styles.container]}>
                <TextInput
                    {...this.props}
                    placeholder={placeholder}
                    placeholderTextColor={'white'}
                    style={[styles.input]}
                />
                {rightComponent&&rightComponent}
            </View>
        );
    }

}
export default InputField
