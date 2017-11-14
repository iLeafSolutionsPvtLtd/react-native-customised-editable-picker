# react-native-customised-editable-picker
React native Editable picker component for both android and ios

## Installation:

Install the component through npm using:

```
npm install react-native-customised-editable-picker --save
```
<img src="https://user-images.githubusercontent.com/32927921/32774858-a6c03d46-c953-11e7-9c79-a84347e9d9eb.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32774950-f39498f6-c953-11e7-9d73-b362e19f5d50.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32774974-104ed088-c954-11e7-9fdb-14a32c5cf9ba.png" width="280"/>
<img src="https://user-images.githubusercontent.com/32927921/32774999-29240bc8-c954-11e7-94af-e90a961722c0.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32775048-566e2730-c954-11e7-8eb4-776bea507aa5.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32775064-65c3def0-c954-11e7-9b8e-16e406dfed15.png" width="280"/>



## Example:
```js
import CustomDropDown from 'react-native-customised-editable-picker';

data  = ["React","Native","Android","Java","Hello World"];

<CustomDropDown
data={data}
isEditable={true}
/>
```

## Props:

  ` * ` - mandatory

Props Name | Description
---------- | -----------
`  data` | array content listed for picker
`  isEditable` | condition to check whether picker is editable or not
`  pickerStyle` | styles applied to picker component
`  modalStyle` | styles applied to the modal component
`  textinputStyle` | styles applied to the text input
