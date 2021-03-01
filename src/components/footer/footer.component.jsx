import React from 'react';
import { ReactComponent as Logo } from '../../assets/ao.svg';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import './footer.styles.scss';
import EmailScrapingProtection from '../emails/email.component';

const email = "backoffice@aodigital.co.za";

const footer = () => (
<footer className="footer-container">
    <div className="wrapper">
    <div className="container">
        <div className="footer__header">
            <h2 className="footer_title">Let's Talk</h2>
        </div>
        <div className="footer__contact">
            <div className="blocks">
                <div className="block__6 first push__right">
                Do you wish to talk to a consultant <br/> 
                <Arrow/><a href="tel:0877015969"> +27 877 015 969</a>
                </div>
                <div className="block__6">
                    For new business inquiries<br/>
                    <Arrow/> <EmailScrapingProtection
                    timeout={10000}
                    mask={email.split("").map(char => (char === "@" ? "@" : "."))}
                    text={email}
                    />
                </div>
            </div>
        </div>
        <div className="blocks">
            <div className="block__6 first">Follow us</div>
            <div className="block__6">
                <Arrow/> <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/AOdigitalAgen/" >Facebook<br/></a>
                <Arrow/> <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/AOdigitalAgen/" > LinkedIn</a>
                </div>
        </div>
        <div className="blocks">
        <div className="block-text dream">
      <span className="footer__logo"><Logo width="30" alt="AO Digital Agency"/></span> <span className="all__rights"> &copy; 2020 All rights reserved |<a href="/privacy-polic"> Privacy Policy</a></span>
            </div>
        </div>
    </div>
</div>

</footer>
)

export default footer;