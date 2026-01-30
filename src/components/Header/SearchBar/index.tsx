import React, { useState } from "react";
import "./style.css";
import useFetchSearchAlbum from "../../../hooks/useFetchSearchAlbum";
import { useNavigate } from "react-router-dom";
type FormState = {
    search: string;
}

const SearchBar = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<FormState>({
        search:'',
    });
    const [query, setQuery] = useState<string>("");
    const {album, isLoading, error} = useFetchSearchAlbum({ searchMusic: query });

    const useHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(form.search);
        navigate("/", { state: { list: album, isLoading, error } });
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}));
    };


    return (
        <form className="searchbar" onSubmit={useHandleSubmit}>
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