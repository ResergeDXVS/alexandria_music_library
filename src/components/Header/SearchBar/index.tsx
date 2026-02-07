import React, { useEffect, useState } from "react";
import { SearchBarContainer, SearchBarInput, SearchButton } from "./styles";
import { fetchSongs } from "../../../redux/slices/searchSlice";
import { useAppDispatch } from "../../../redux/store/store";
type FormState = {
    search: string;
}

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const [form,setForm] = useState<FormState>({
        search:'',
    });
    const [query, setQuery] = useState<string>("");

    const useHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(form.search);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}));
    };

    useEffect(() => {
        if (query.trim()!=="") {
            dispatch(fetchSongs(query));
        }
    }, [query, dispatch]);







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