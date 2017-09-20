import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentChars: "",
      maxChars: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      currentChars: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.currentChars}/>
        <p>Remaining characters: {this.state.maxChars - this.state.currentChars.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
