import React, { useState } from "react";
import "./style.css";
import useFetchSearchAlbum from "../../../hooks/useFetchSearchAlbum";
import { useNavigate } from "react-router-dom";
type FormState = {
    search: string;
}

const SearchBar = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState<FormState>({
        search:'',
    });
    const {album, isLoading, error, initial} = useFetchSearchAlbum({ searchMusic: form.search});

    const useHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        navigate("/", { 
            state: { 
            list: album, 
            isLoading, 
            error, 
            initial 
            } 
        });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}));
        navigate("/", { 
            state: { 
            list: [], 
            isLoading:true, 
            error:null, 
            initial:false, 
            } 
        });
    };



    return (
        <form className="searchbar" onSubmit={useHandleSubmit}>
            <input 
                className="searchbar__input"
                type="text"
                name="search"
                value={form.search}
                placeholder="Buscar artista"
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