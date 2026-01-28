import logo from '../../logo_AML.png';
import SearchBar from './SearchBar';
import "./style.css";
const Header = () => {

    return (
        <header>
            <div className="header__main">
                <img className="header__logo" src={logo} alt="Alexandria Music Library"/>
                <h1>Alexandria Music Library</h1>
            </div>
            <SearchBar/>
            <div className="header__library">
                <i className="fi fi-rs-album-circle-user"></i>
            </div>
        </header>
    );
}


export default Header;