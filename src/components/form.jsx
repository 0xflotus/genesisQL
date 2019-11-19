/**
 * ***********************************
 *
 * @module Form
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Form for selecting which data is submitted in schema
 * @dataListSource https://blog.teamtreehouse.com/creating-autocomplete-dropdowns-datalist-element
 * ***********************************
 */

import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import InputField from './inputField';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // create state array for non-nullable inputs
    // each element will correspond to a specific switch
    // default false
    // onchange will switch it to true
    //
    // this array will be taken into the submit funciton and
    // appen a ! to the end of the corresponding data types in code output
    //
    // create new field index and increment with new fields
    // };
  }

  render() {

    // // console.log("this.state.formDataTypes", this.state.formDataTypes)
    // console.log('fieldInputOptions', formInputOptions);
    return (
      <div id="formContainer">
        <div className="sbTitle">
          <p>Field Editor</p>
        </div>
        <div id="form">
          <InputField dataViewContent={this.props.dataViewContent} />
          {/* https://reactjs.org/docs/forms.html
            <label>
              <input className="objectType" type="text" name="objectType" placeholder="Object Type" />
            </label>
            <div className="inputFields">
              <label>
                <input className="fieldNames" type="text" name="fieldName" list="formDataTypesKeys" placeholder="Field Name" />
                <datalist id="formDataTypesKeys">
                  {formInputOptions}
                </datalist>
              </label>
              <label>
                <input className="fieldTypes" type="text" name="fieldType" list="graphQLTypes" placeholder="Field Type" />
                <datalist id="graphQLTypes">
                  {formTypesOptions}
                </datalist>
              </label>
              <label id="formSwitch">
                Required:
                <Switch
                  type="checkbox"
                  name="required"
                  // checked={this.state.nullable}
                  // onChange={this.handleSwitchChange('nonNullable')}
                  value="required"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </label>
            </div> */}
          <div>
            <Fab
              id="addNewField"
              size="small"
              color="secondary"
              aria-label="add"
              onClick={
                () => {
                  // adds new field input options
                  const inputContainer = document.querySelector('#inputContainer');
                  const inputFields = document.querySelector('.inputFields');
                  console.log(inputFields);
                  const clonedInputFields = inputFields.cloneNode(true);

                  // remove pre-existing text that was entered from our cloned inputs, before we append them
                  clonedInputFields.querySelector('.fieldNames').value = '';
                  clonedInputFields.querySelector('.fieldTypes').value = '';

                  inputContainer.appendChild(clonedInputFields);
                }
              }
            >
              <AddIcon />
            </Fab>
          </div>
          <div id="submitContainer">
            <Button variant="contained" color="secondary" id="formSubmit" type="submit" value="Submit" onClick={this.props.handleFormSubmitButton}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
