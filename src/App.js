import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
let marked = require('marked')
class App extends Component {

state ={
  markdown: ` 
### User Stories
- I can type GitHub-flavored Markdown into a text area.
- I can see a preview of the output of my markdown that is updated as I type.
### Install Instructions
- npm install
- yarn start
`
}
//Updates the state to markdown value which is called on change of formcontrol
updateMarkdown = function(markdown){
  this.setState({markdown})
}

  render() {
    let {markdown} = this.state;
    // marked.sanitize = true;

    return (
      <div className="App container">
  <div>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Markdown Input</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" value={markdown} onChange={(event)=> this.updateMarkdown(event.target.value)}/>
    </FormGroup>
  </div>
  <div>
    <h1>Markdown Output</h1>
    {/*Converts string version of html into actual html  */}
    <div dangerouslySetInnerHTML= {{__html:marked(markdown)}}>

    </div>
  </div>
      </div>
    );
  }
}

export default App;
