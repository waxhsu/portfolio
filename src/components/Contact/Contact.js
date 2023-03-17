import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
    state = {
      name: '',
      message: '',
      email: '',
      sent: false,
      buttonText: 'Send Message',
    };
  
    formSubmit = (e) => {
      e.preventDefault();
  
      this.setState({ buttonText: '...sending' });
  
      const name = this.state.name;
      const email = this.state.email;
      const message = this.state.message;
  
      axios({
        method: 'POST',
        url: 'https://portfolio-api-beta.vercel.app/api/send',
        data: {
          name: name,
          email: email,
          message: message,
        },
      })
        .then((res) => {
          if (res.data.msg === 'success') {
            this.setState({ sent: true });
            this.resetForm();
          } else if (res.data.msg === 'fail') {
            console.log('Message not sent');
          }
        })
        .catch(() => {
          console.log('Message not sent');
        });
    };
  
    resetForm = () => {
      this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent',
      });
    };
  
    render() {
      return (
        <div className='Contact' id='contact'>
          <div className='header'>
                <h1>Contact</h1>
          </div>
          <div className='contactBody'>
            <div className='inputForm'>
              <p>Have a question or want to work together?</p>
              <form
                className='contactForm'
                method='POST'
                onSubmit={this.formSubmit.bind(this)}
              >
                <input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  name='name'
                  className='messageName'
                  type='text'
                  placeholder='Name'
                  value={this.state.name}
                />
                <input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  name='email'
                  className='messageEmail'
                  type='email'
                  placeholder='Email'
                  required
                  value={this.state.email}
                />
                <input
                  onChange={(e) => this.setState({ message: e.target.value })}
                  name='message'
                  className='messageInput'
                  type='text'
                  placeholder='Your message'
                  value={this.state.message}
                  required
                />
                <div className='buttonContainer'>
                  <button type='submit' className='buttonPrimary'>
                    {this.state.buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

export default Contact