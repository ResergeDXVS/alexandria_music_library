import React, { useState } from "react";
import useFetchSearchAlbum from "../../../hooks/useFetchSearchAlbum";
import { useNavigate } from "react-router-dom";
import { SearchBarContainer, SearchBarInput, SearchButton } from "./styles";
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
        <SearchBarContainer 
            onSubmit={useHandleSubmit}>
            <SearchBarInput
                type="text"
                name="search"
                value={form.search}
                placeholder="Buscar artista"
                onChange={
                    (e) => {
                        handleInputChange(e);
                    }
                }
            ></SearchBarInput>
            <SearchButton
                type="submit">
                <i className="fi fi-rs-search"></i>
            </SearchButton>
        </SearchBarContainer>
    );
}


export default SearchBar;