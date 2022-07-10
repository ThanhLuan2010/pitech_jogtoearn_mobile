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
        const {placeholder,style} = this.props
        return (
            <View>
                <TextInput
                    {...this.props}
                    placeholder={placeholder}
                    style={[style,styles.input]}
                />
            </View>
        );
    }

}
export default InputField
