import axios from 'axios';
import React, { Component } from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './contact-form.styles.scss';

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name__: '', surname__: '', email__: '', phone__: '', company__name_: '', contact__message_: '', terms__and__conditions_: false,
      errors: [], response: ''
    }
    this.change = this.change.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
  };
 
  change = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  };
  
 CheckBoxChange = e => {
  this.setState({
  terms__and__conditions_: e.target.checked
  });
  }

  onSubmit = e =>{
    e.preventDefault();
    this.setState({
      isLoading: true
  },
  () => {
      setTimeout(() => {
          this.setState({
              isLoading: false
          })
      }, 6000);
  }
  )

    const data = new FormData();

    data.append('name__', this.state.name__);
    data.append('surname__', this.state.surname__);
    data.append('email__', this.state.email__);
    data.append('phone__', this.state.phone__);
    data.append('company__name_', this.state.company__name_);
    data.append('contact__message_', this.state.contact__message_);
    data.append('terms__and__conditions_', this.state.terms__and__conditions_);
    
    axios.post('https://digital.ao/api/contact-agency', data, {
      headers: {
        // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      
    })
    .then(response => {
      this.setState(() => ({
        response: response.data.message
      }));
        console.log(this.state.response);
    })
    .catch(error => {
      this.setState(()=> ({
        errors: error.response.data.errors
      }));
      console.log(this.state.errors)
    }) 
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor(field){
    if(this.hasErrorFor(field)){
      return(
        <span className='invalid-feedback'>
          {this.state.errors[field][0]}
        </span>
      )
    }
  }

  render() {

    const {isLoading} = this.state;

    return (
      <div className="sign-up-form">

                      {this.state.response &&
             <div className="alert alert-drip"> 
             {this.state.response}
             </div>
             }

              <form>
              <div className="blocks_contact" >
                      <div className="block__6 first">
                <FormInput
                type="text"
                name="name__"
                id="name__"
                label="Name" 
                className={`form-input ${this.hasErrorFor('name__') ? 'is-invalid' : ''}`} 
                value={this.state.name__} 
                onChange={e => this.change(e)} 
                autoComplete="off"
                />
                
                {this.renderErrorFor('name__')}
</div>
<div className="block__6">
<FormInput 
                name="surname__"
                id="surname__"
                label="Surname" 
                className={`form-input ${this.hasErrorFor('surname__') ? 'is-invalid' : ''}`}
                value={this.state.surname__} 
                onChange={e => this.change(e)}  
                autoComplete="off"
                />
                {this.renderErrorFor('surname__')}
                </div>

</div>

<div className="blocks_contact" >
  <div className="group">
                <FormInput 
                type="email" 
                name="email__" 
                label="Email"
                className={`form-input ${this.hasErrorFor('email__') ? 'is-invalid' : ''}`} 
                value={this.state.email__} 
                onChange={e => this.change(e)} 
                aria-label="Email" 
                aria-describedby="basic-addon2"
                autoComplete="off"
                />
{this.renderErrorFor('email__')}
</div>
<div className="group">
              <FormInput type="tel" 
              name="phone__" 
              className={`form-input ${this.hasErrorFor('phone__') ? 'is-invalid' : ''}`}  
              label="Phone Number"
              value={this.state.phone__} 
              onChange={e => this.change(e)} 
              aria-label="Phone Number" 
              aria-describedby="basic-addon3" 
              autoComplete="off"
              maxLength="13"
              minLength="10"
              />
{this.renderErrorFor('phone__')}
</div>
<div className="group">
            <FormInput type="text" 
            name="company__name_"
            id="company__name_" 
            label="Company Name"
            className={`form-input ${this.hasErrorFor('company__name_') ? 'is-invalid' : ''}`}  
            value={this.state.company__name_} 
            onChange={e => this.change(e)} 
            aria-describedby="basic-addon4" 
            autoComplete="off"
            />
{this.renderErrorFor('company__name_')}
</div>

<div className="group">
              <label htmlFor="contact__message_"
              className="contact__message_">	How may we help? 
              </label>
            
            <textarea 
            name="contact__message_" 
            className={`form-input ${this.renderErrorFor('contact__message_') ? 'is-invalid' : ''}`} 
            value={this.state.contact__message_} 
            onChange={e => this.change(e)} 
            rows="8"
            id="contact__message_" 
            aria-label="Message">
            </textarea>
            {this.renderErrorFor('contact__message_')}
            </div>
            <div>
          <input 
          defaultChecked={this.state.terms__and__conditions_} 
          onChange={e => this.CheckBoxChange(e)}
          className={`form-check-input ${this.hasErrorFor('terms__and__conditions_') ? 'is-invalid' : ''}`}
          type="checkbox" 
          id="autoSizingCheck" />
          <label 
          className="form-check-label small" 
          htmlFor="autoSizingCheck"> We care about your <a href="/privacy-policy">privacy</a> and automatically agree to our NDA. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. </label>
<div>
{this.renderErrorFor('terms__and__conditions_')}
{this.renderErrorFor('smtp')}
</div>
</div>
        <CustomButton onClick={e => this.onSubmit(e)} > {isLoading ? "Submitting..." : "Submit"} </CustomButton>
        </div>
              </form>
          </div>
    )
  }
}