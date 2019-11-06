/**
 * ***********************************
 *
 * @module MainContainer
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Main app container, rendering all components for creating GraphQL schema
 *
 * ***********************************
 */

import React, { Component } from 'react';

// component imports
import NavBar from '../components/navBar';
import ProductionContainer from './productionContainer';
import SchemaBuilderContainer from './schemaBuilderContainer';
import CodeOutput from '../components/codeOutput';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    // methods being passed down
    this.changeCurrentTab = this.changeCurrentTab.bind(this);
    this.handleFormSubmitButton = this.handleFormSubmitButton.bind(this);

    this.state = {
      currentTab: <SchemaBuilderContainer dataViewContent={this.props.dataViewContent} handleFormSubmitButton={this.handleFormSubmitButton} />,
      codeGeneratedString: '',
    };
  }

  // changes the current tab state to swich displays from SchemaBuilderContainer to CodeOutput
  changeCurrentTab(buttonId) {
    // console.log('changeCurrentTab function in MAIN CONTAINER');
    // console.log('BUTTON ID: ', buttonId);
    // console.log('STATE CURRENTTAB: ', this.state.currentTab)

    switch (buttonId) {
      case 'schemaBuilderTab':
        this.setState({ currentTab: <SchemaBuilderContainer dataViewContent={this.props.dataViewContent} handleFormSubmitButton={this.handleFormSubmitButton} /> });
        console.log('CHANGING CURRENT TAB TO SCB');
        break;
      case 'codeOutputTab':
        this.setState({ currentTab: <CodeOutput /> });
        console.log('CHANGING CURRENT TAB TO CO');
        break;
      default:
        this.setState({ currentTab: <SchemaBuilderContainer dataViewContent={this.props.dataViewContent} handleFormSubmitButton={this.handleFormSubmitButton} /> });
    }
  }

  // when user clicks submit button in 'Form', sends data to back-end
  handleFormSubmitButton() {
    const objectType = document.querySelector('.objectType').value;

    const fieldNames = [];
    document.querySelectorAll('.fieldNames').forEach(
      (el) => fieldNames.push(el.value),
    );
    const fieldTypes = [];
    document.querySelectorAll('.fieldTypes').forEach(
      (el) => fieldTypes.push(el.value),
    );
    // const objectType = document.getElementsByClassName('objectType');
    // const fieldName = document.getElementsByClassName('fieldName');
    // const fieldType = document.getElementsByClassName('fieldType');
    console.log(objectType);
    console.log(fieldNames);
    console.log(fieldTypes);

    // CREATE PAYLOAD OBJECT TO SEND TO CODE-GENERATOR SERVER-SIDE
    const codeGenPayload = {
      objectTypes: [
        {
          objTypeName: objectType,
          fieldNames,
          fieldTypes,
        },
      ],
    };
    console.log('codeGenPayload:', codeGenPayload);

    // SEND FETCH REQUEST TO CODE-GEN ENDPOINT, WITH PAYLOAD
    fetch('/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(codeGenPayload),
    })
      .then((data) => data.json())
      .then((data) => console.log('data', data));
  }

  render() {
    // console.log('DVC IN MC', this.props.dataViewContent)

    return (
      <div id="mainContainer">
        {/* <p>'MainContainer Component'</p> */}
        <NavBar changeCurrentTab={this.changeCurrentTab} currentTab={this.state.currentTab} />
        <ProductionContainer currentTab={this.state.currentTab} />
      </div>
    );
  }
}

export default MainContainer;
