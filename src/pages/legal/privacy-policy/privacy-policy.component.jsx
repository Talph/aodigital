import React from 'react';
import './privacy-policy.styles.scss';
// import { ReactComponent as Logo } from '../../assets/ao.svg';
import {ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';
import EmailScrapingProtection from '../../../components/emails/email.component';

const email = " legal@aodigital.co.za";
const PrivacyPolicy = () => (
    <div className="our-privacy-policy-page content">
        <div className="wrapper">
        <div className="container">
            <div className="offside">
            <Arrow width="40"/>
                </div>
            <div className="p-content">
            <div className="page-header-p">
            <h1 className="header__title"> Privacy policy</h1></div>
            <h4 className="h4 subheading__heading">
            AO Digital Agency Pty Ltd is an South African registered company. We are committed to protecting the privacy of those who visit the AO Digital Agency Website and/or use the AO Digital Agency Services.
            </h4>

            <p className="paragraph">
            Amendments to this statement will be posted to this URL and will be effective when posted. Your continued use of this site following the posting of any amendment, modification, or change shall constitute your acceptance of the amendment.
            </p>

            <h3>Information We Collect</h3>

            <p>When you visit www.aodigital.co.za you provide us with two types of information: personal information that you knowingly choose to disclose and Website use information collected by us as you interact with our Web Site</p>
            
            <h3>Submitting a form</h3>
            <p>When you submit a form, you choose to provide us with two types of information: personal information and information about your project. You provide us with certain personal information, such as your name, and email address. At this time, the most information you would be required to submit is your name, email address and project description.</p>
            
            <h3>Browsing the site</h3>
            <p>When you visit www.aodigital.co.za, we collect your browser type and IP address. This is done via Google Analytics. This information is gathered for all AO Digital Agency visitors.</p>

            <h3>Use of Cookies</h3>
            <p>When you use the AO Digital Agency Service, we may store some information on your computer. This information will be in the form of a “cookie” or similar file. Cookies are small pieces of information stored on your hard drive, not on the AO Digital Agency website. We do not use cookies to gather personal information or otherwise invade your privacy. They cannot be used to steal information. We use the following cookies:</p>

            <h3>Necessary Cookies</h3>
            <p>Necessary cookies help make a website usable by enabling basic functionality. The website cannot function as intended without these cookies.</p>
<ul>
<li>__cfduid – used by the content network, Cloudflare, to identify trusted web traffic</li>
<li>cookiesAccepted – stores the user’s cookie consent state for the current domain</li>
</ul>
            <h3>Statistics</h3>
            <p>Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
            <ul>
<li>_ga, _gat, _gid – used by Google Analytics to generate anonymous data about our website usage</li>
{/* <li>img/beacon.gif – used by Pingdom to monitor performance of our website</li> */}
</ul>
            <h3>Marketing</h3>
            <p>Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>
<ul>
    <li>ads/ga-audiences – used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor’s online behaviour across websites.</li>
    <li>collect – used to send data to Google Analytics about the visitor’s device and behaviour. Tracks the visitor across devices and marketing channels.</li>
    <li>GPS  – used by YouTube embed videos, registers a unique ID on mobile devices to enable tracking based on geographical GPS location.</li>
    <li>PREF – used by YouTube embed videos, registers a unique ID that is used by Google to keep statistics of how the visitor uses YouTube videos across different websites.</li>
    <li>VISITOR_INFO1_LIVE  – used by YouTube embed videos, tries to estimate the users’ bandwidth on pages with integrated YouTube videos.</li>
    <li>YSC – used by YouTube embed videos, registers a unique ID to keep statistics of what videos from YouTube the user has seen.</li>

    </ul>
            <h3>Unclassified</h3>
            <p>Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.</p>
<ul>
    <li>ahoy_track, etc. – Codepen cookies on some pages where Codepen examples are embed</li>
    </ul>
            <h3>How do I change my cookie settings?</h3>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org">www.allaboutcookies.org</a>. Find out how to manage cookies on popular browsers:</p>
<ul>
<li>Google Chrome</li>
<li>Microsoft Edge</li>
<li>Mozilla Firefox</li>
<li>Microsoft Internet Explorer</li>
<li>Opera</li>
    <li>Apple Safari</li>
    </ul>
    <p>To find information relating to other browsers, visit the browser developers website. To opt out of being tracked by Google Analytics across all websites, visit http://tools.google.com/dlpage/gaoptout.</p>
            <h3>Security and Storage</h3>
            <p>The AO Digital Agency website and Service has industry standard security measures in place to protect the loss, misuse, and alteration of the information under our control. While there is no such thing as “perfect security” on the internet, we will take all reasonable steps to ensure the safety of your information. Additionally, you retain all rights of ownership to the data you have stored with the AO Digital Agency Service. We will not sell or share this data with any third-parties or use this data to compete with you or advertise to your clients. Your privacy and the privacy of your clients are of utmost importance to us.</p>

            <h3>Contacting AO Digital Agency</h3>
            <p>If you have any questions about this Privacy Policy or the practices of this Website, you can at 
            <EmailScrapingProtection
                    timeout={10000}
                    mask={email.split("").map(char => (char === "@" ? "@" : "."))}
                    text={email}
                    />
            </p>
            
            </div>
    </div>
    </div>
    </div>
)

export default PrivacyPolicy;