import React from 'react';
import RightNav from '../right-menu/rightnav.component';

import './burger.styles.scss';


class Burger extends React.Component{
  constructor(){
    super();

    this.state = {
      isOpen: false
    }
  }

  handleMenu = () =>{
    this.setState({
      isOpen: ! this.state.isOpen,
    })
  }

render() {
  const { isOpen } = this.state;

  return (
    <div>
      <div className={`${isOpen ? 'open' : 'close'} burger`} onClick={(this.handleMenu)}>
        <div />
        <div />
        <div />
      </div>
      <RightNav handleMenu={this.handleMenu} isOpen={isOpen}/>
    </div>
  )
}
}

export default Burger;