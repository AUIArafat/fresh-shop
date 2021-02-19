import React, { Component} from 'react';
import Header from './Header';
import MainTop from './MainTop';

class Layout extends Component{
    state = {
        sideOn: false
    }
    toggleSide = () =>{
        this.setState({
            sideOn: !this.state.sideOn
        })
    }
    
    render(){
        return(
            <React.Fragment>
            <MainTop/>
            <Header sideOn={this.state.sideOn} toggleSide={this.toggleSide}/>
            <main>
                {this.props.children}
            </main>
            </React.Fragment>
        )
    }
}
export default Layout;