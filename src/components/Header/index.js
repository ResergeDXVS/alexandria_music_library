import logo from '../../logo_AML.png';

const Header = () => {

    return (
        <header>
            <div className="header__main">
                <img className="header__logo" src={logo} alt="Alexandria Music Library"/>
                <h1>Alexandria Music Library</h1>
            </div>
        </header>
    );
}


export default Header;