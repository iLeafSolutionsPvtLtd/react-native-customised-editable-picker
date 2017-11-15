# react-native-customised-editable-picker

    React native Editable picker component for both android and ios

## Introduction

    Editable picker component can be used both as a picker and text input where picker when long pressed turn to text input and new items can be added to the list

## Features

* can be customised by the user to edit and add items
* styles can be customised
* pure javascript implementation

## Installation:

    Install the component through npm using:

    ```
    npm install react-native-customised-editable-picker --save
    ```
    <img src="https://user-images.githubusercontent.com/32927921/32820700-cc605df4-c9f5-11e7-8cd7-02863284ced7.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820707-d40bf3e2-c9f5-11e7-9e0b-d795f13ce1f9.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820710-d8ef8a40-c9f5-11e7-95a5-d9fd97b8fefb.png" width="280"/>
    <img src="https://user-images.githubusercontent.com/32927921/32820713-dce4ec26-c9f5-11e7-93c3-939aa9e96acf.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820721-e01e03d2-c9f5-11e7-8988-6c631ea92925.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32820724-e39cda42-c9f5-11e7-8cf7-170ba6708854.png" width="280"/>



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

Props Name          |               Description
------------------- | ---------------------------------------------------
` * data`           | array content listed for picker
` * isEditable`     | condition to check whether picker is editable or not
`   pickerStyle`    | styles applied to picker component
`   modalStyle`     | styles applied to the modal component
`   textinputStyle` | styles applied to the text input
