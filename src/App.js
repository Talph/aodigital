import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ContactUs from './pages/contact-us/contact-us.component';
import OurWork from './pages/our-work/our-work.component';
import Agency from './pages/agency/agency.component';
import HomePage from './pages/homepage/homepage.component';
import Solutions from './pages/solutions/solutions.component';
import WhiteLabel from './pages/white-label/white-label.component';
import CasePage from './pages/case-studies/case.component';
import PrivacyPolicy from './pages/legal/privacy-policy/privacy-policy.component';

import AnimatedCursor from "react-animated-cursor"
import './App.css';

class App extends React.Component{
  constructor(){
super();

this.state = {
  navbarOpen: false,
  searchField : ''
}}

handleChange = (e) =>{
  this.setState({
    searchField: e.target.value 
  })
}

  render(){
    return (
      <div>
        <Header className="app-header"/>
              <AnimatedCursor
                className='animatedCursor'
                innerSize={12}
                outerSize={18}
                color='255, 222, 23'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
              />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/agency" component={Agency}/>
          <Route path="/solutions" component={Solutions}/>
          <Route path="/white-label" component={WhiteLabel}/>
          <Route path="/shop" component={OurWork}/>
          <Route path="/contact-us" component={ContactUs}/>
          <Route path="/our-work" component={CasePage}/>
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
        </Switch>
        <Footer/>
      </div>
    );
  }

}

export default App;
