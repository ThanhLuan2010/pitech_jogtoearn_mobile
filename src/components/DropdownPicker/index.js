import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

export default function App({placeholder, style, textStyle}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Spain', value: 'spain'},
    {label: 'Madrid', value: 'madrid', parent: 'spain'},
    {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome', parent: 'italy'},

    {label: 'Finland', value: 'finland'},
  ]);

  return (
    <View
      style={{
        zIndex: 2,
        height: 32,
      }}>
      <DropDownPicker
        style={[styles.container, style]}
        dropDownDirection={'BOTTOM'}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        multiple={false}
        mode="SIMPLE"
        placeholder={placeholder}
        textStyle={[styles.textStyle, textStyle]}
       
      />
    </View>
  );
}
