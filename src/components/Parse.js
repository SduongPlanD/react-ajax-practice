import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      message: '',
      response: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    var message = {
      name: $('#name').val(),
      message: $('#message').val()
    }
    

    $.ajax({
      url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          response: data,
          name: message.name,
          message: message.message
        });
        //console.log('[STATE-NAME]', this.state.name,'[STATE-MESSAGE]:', this.state.message, '[STATE-RESPONSE]', this.state.response)
      }
  })
}
    
      render() {
        return (
          <div>
            <div>
              <h2 className="response"> Server Response:{this.state.response}</h2>
              <h2>Name</h2>
              <input type="text" id="name" />
            </div>
            <div>
              <h2>Message</h2>
              <input type="text"  id="message" />
            </div>
            <button type="button" onClick={this.onSubmit}>Send</button> 
          </div>
        )
      };
}
  




export default Body