import React, { useEffect, useState } from "react";
import useFetchSearchAlbum from "../../../hooks/useFetchSearchAlbum";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchBarContainer, SearchBarInput, SearchButton } from "./styles";
type FormState = {
    search: string;
}

const SearchBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [form,setForm] = useState<FormState>({
        search:'',
    });
    const [query, setQuery] = useState<string>("");
    const {album, isLoading, error, initial} = useFetchSearchAlbum({ 
        searchMusic: query
    });

    const useHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(form.search);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}));
    };

    useEffect(() => {
        if (query && location.pathname === "/") {
            navigate("/", {
            state: {
                list: album,
                isLoading,
                error,
                initial,
            },
            });
        }
    }, [album, isLoading, error, initial, query, navigate, location.pathname]);



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