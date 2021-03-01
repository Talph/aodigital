import React from 'react';
import ContactForm from '../forms/contact-form/contact-form.component';
import './popup.styles.scss';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <ContactForm/>
            <span className="Close__icon Close__arrow " onClick={this.props.closePopup}>X</span>
          </div>
        </div>
      );
    }
  }

  export default Popup;