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

  <img src="https://user-images.githubusercontent.com/32927921/32874880-f0669de2-caba-11e7-9dff-b760dfd87d0c.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32874891-04560c0c-cabb-11e7-9dc8-d0f546773d8c.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32874906-171a3692-cabb-11e7-8607-85f6a840f017.png" width="280"/>
  <img src="https://user-images.githubusercontent.com/32927921/32874920-2c977c00-cabb-11e7-99ba-a21c17851f77.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32874920-2c977c00-cabb-11e7-99ba-a21c17851f77.png" width="280"/><img src="https://user-images.githubusercontent.com/32927921/32874977-79b11442-cabb-11e7-887a-b471e36cc18a.png" width="280"/>


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
