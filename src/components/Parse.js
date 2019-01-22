import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Server extends React.Component {
    constructor (props){
      super(props)

      this.state = {
        name: '',
        messages: '',
      }

    }
}


var Parse = {

  server: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',


    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json'
      dat
    })

};