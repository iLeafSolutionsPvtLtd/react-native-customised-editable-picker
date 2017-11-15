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
    <img src="https://user-images.githubusercontent.com/32927921/32820114-b9e21a26-c9f2-11e7-9176-1113de74fa67.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820128-ccbc4586-c9f2-11e7-962e-1f3fd926c548.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820138-e626a958-c9f2-11e7-8136-6798a94abd88.png" width="280"/>
    <img src="https://user-images.githubusercontent.com/32927921/32820071-91cf36d6-c9f2-11e7-8393-5847d7aded70.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820051-73d749b6-c9f2-11e7-9732-73e168a64689.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820030-57e4f898-c9f2-11e7-8867-c3652f0eb502.png" width="280"/>



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
