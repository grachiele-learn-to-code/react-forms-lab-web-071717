import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  isValidPoem = () => {
    const poem = this.state.content
    // The poem has three lines.
    // The first line has five words.
    // The second line has three words.
    // The third line has five words.
    const lines = poem.split("\n")
    let isValid = false
    let linesValid = false

    if (lines.length === 3){
      for (let i = 0; i < lines.length; i++){
        let mystring = lines[i]
        mystring = mystring.replace(/^\s+|\s+$/g, "").split(" ")
        if (i === 0 && mystring.length === 5){
          continue
        }
        if (i === 1 && mystring.length === 3) {
          continue
        }
        if (i === 2 && mystring.length === 5) {
          isValid = true
          linesValid = true
        } else {
          break
        }
      }
    }

    if (isValid === true && linesValid === true) {
      return true
    } else {
      return false
    }

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
          onClick={this.isValidPoem}
        />
      {(this.isValidPoem()) ? "" : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure! </div>}
      </div>
    );
  }
}

export default PoemWriter;
