import React, { useState } from "react";
import "./style.css";

type FormState = {
    search: string;
}

const SearchBar = () => {
    //const navigate = useNavigate();
    const [form, setForm] = useState<FormState>({
        search:'',
    });
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        //navigate('/');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}));
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input 
                className="searchbar__input"
                type="text"
                name="search"
                value={form.search}
                placeholder="Buscar canción o disco"
                onChange={
                    (e) => {
                        handleInputChange(e);
                    }
                }
            ></input>
            <button 
                className="searchbar__button"
                type="submit">
                <i className="fi fi-rs-search"></i>
            </button>
        </form>
    );
}


export default SearchBar;