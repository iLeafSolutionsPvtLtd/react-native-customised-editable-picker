# react-native-customised-editable-picker
    React native Editable picker component for both android and ios

## Introduction
    Editable picker component can be used both as picker and text input where picker when long pressed turn to text input and new items can be added to the list

## Features
   a. can be customised by the user to edit and add items
   b. styles can be customised
   c. pure javascript implementation

## Installation:

    Install the component through npm using:

    ```
    npm install react-native-customised-editable-picker --save
    ```
    <img src="https://user-images.githubusercontent.com/32927921/32819371-f087ed34-c9ee-11e7-97c6-8c8e3a622a39.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32819374-f48e9dd8-c9ee-11e7-9007-16b1285c8efc.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32819377-f8b3a926-c9ee-11e7-9680-5586a4b91771.png" width="280"/>
    <img src="https://user-images.githubusercontent.com/32927921/32819381-fc8c6506-c9ee-11e7-982d-fe53c9ba87c4.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32819385-00952bb0-c9ef-11e7-926d-ae7a3ffd020b.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32819388-0459001e-c9ef-11e7-85e4-a32ce6d0d9d1.png" width="280"/>



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
    ` * data` | array content listed for picker
    ` * isEditable` | condition to check whether picker is editable or not
    `   pickerStyle` | styles applied to picker component
    `   modalStyle` | styles applied to the modal component
    `   textinputStyle` | styles applied to the text input
