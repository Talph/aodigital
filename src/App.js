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
        <Header className="App-header"/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/agency" component={Agency}/>
          <Route path="/solutions" component={Solutions}/>
          <Route path="/white-label" component={WhiteLabel}/>
          <Route path="/our-work" component={OurWork}/>
          <Route path="/contact-us" component={ContactUs}/>
        </Switch>
        <Footer className="app-footer"/>
      </div>
    );
  }

}

export default App;
