import { useNavigate } from 'react-router-dom';
import logo from '../../logo_AML.png';
import SearchBar from './SearchBar';
import { HeaderContainer, HeaderLibrary, HeaderMain } from './styles';
const Header = () => {
    const navigate = useNavigate();
    
    return (
        <HeaderContainer>
            <HeaderMain
                onClick={()=>navigate("/", 
                    { state: { list: [], isLoading: false, error: null, initial: true} })}
                >
                <img 
                    className="header__logo" 
                    src={logo} 
                    alt="Alexandria Music Library"/>
                <h1>Alexandria Music Library</h1>
            </HeaderMain>
            <SearchBar/>
            <HeaderLibrary id="header__library">
                <i className="fi fi-rs-album-circle-user"></i>
            </HeaderLibrary>
        </HeaderContainer>
    );
}


export default Header;