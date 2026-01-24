import React, { Component } from "react";
import logo from '../logo_AML.png';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({welcomeMessage:'Welcome'})
        },2000);
    }


    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
    }   

    componentWillUnmount(){

    }

    handlerButtonClick = () => {
        this.setState({isLoggedIn:true});
    }

    render() {
        return (
            <header>
                <div className="header__main">
                    <img className="header__logo" src={logo} alt="Alexandria Music Library"/>
                    <h1>Alexandria Music Library</h1>
                </div>
                <div className="header__login">
                    {!this.state.isLoggedIn ? <button onClick={this.handlerButtonClick} className="header__button">Ingresar</button>:<p>Bienvenido</p>}
                </div>
            </header>
        );
    }
}

export default Header;