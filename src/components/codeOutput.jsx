/**
 * ***********************************
 *
 * @module CodeOutput
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Schema code output based on form inputs
 *
 * ***********************************
 */

import React, { Component } from 'react';


class CodeOutput extends Component {
  render() {
    return (
      <div id="codeOutput">
        <pre>{this.props.codeGeneratedString}</pre>
      </div>
    );
  }
}

export default CodeOutput;
