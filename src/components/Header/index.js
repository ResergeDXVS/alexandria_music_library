import logo from '../../logo_AML.png';
import SearchBar from './SearchBar';
import { HeaderContainer, HeaderLibrary, HeaderMain } from './styles';
import { useAppDispatch } from '../../redux/store/store';
import { resetResults } from '../../redux/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const resetView = () =>{
        dispatch(resetResults());
        navigate("/");
    }
    return (
        <HeaderContainer>
            <HeaderMain onClick={()=>resetView()}>
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