import React from 'react';
// import Popup from '../../components/popup/popup.component';
// import CustomButton from '../../components/custom-button/custom-button.component';
import './contacts.styles.scss';
import ContactForm from '../forms/contact-form/contact-form.component';

class Contacts extends React.Component{
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      render() {
        return (
        <div className="contacts">
    <div className="wrapper">
    <div className="container">

    <div className="page-header">
            <h1 className="header__title">Get in touch with us.<br/>lets talk business.<br/>We deliver efficient solutions.
            </h1>
        </div>
{/* 
        <div className="contacts__contact">
            <div className="blocks">
                <div className="block__6 push__right">
                </div>
                <div className="block__6">
                </div>
            </div>
        </div> */}
        <div className="blocks contact__form">          
                {/* <CustomButton onClick={this.togglePopup.bind(this)}> 
                &nbsp;&nbsp;&nbsp;Contact Form 
                    </CustomButton>
                 {this.state.showPopup ? 
                 <Popup text='Close Me' closePopup={this.togglePopup.bind(this)}/> 
                 : null } */}
                 <ContactForm/>
        </div>
    </div>
</div>
        </div>
    )
}
}

export default Contacts;