import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../API/useFetch";

import StandardButton from "../StandardButton";
import SearchBar from "../SearchBar"
import DropDown from "../Dropdown";

import { API_ENDPOINTS } from "../../API/ENDPOINTS";

import styles from "./styles.module.scss";

export default function InputForm({ style, initialValue }) {
    const [searchQuery, setSearchQuery] = useState(initialValue || "");
    const [dropDownActive, setDropDownActive] = useState(false);
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

    const navigate = useNavigate();
    const [getAutocompleteSuggestions, suggestionData] = useFetch();

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setAutocompleteSuggestions([]);
        }
        else {
            getAutocompleteSuggestions(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.TITLE_COMPLETE + searchQuery)
        }
    }, [searchQuery, getAutocompleteSuggestions]);

    useEffect(() => {
        if (suggestionData && suggestionData.suggestions) {
            setAutocompleteSuggestions(suggestionData.suggestions)
        }
    }, [suggestionData])


    return (
        <div className={styles.inputForm} style={style}>
            <div style={{ position: "relative" }}>
                <SearchBar
                    onSearch={() => { navigate(`/search/${searchQuery}`) }}
                    onChange={(e) => {
                        if (e.trim() !== "") {
                            setDropDownActive(true);
                        }
                        else {
                            setDropDownActive(false);
                        }
                    }}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                {
                    dropDownActive &&
                    <DropDown
                        values={autocompleteSuggestions}
                        onChange={(v) => {
                            if (v !== searchQuery) setSearchQuery(v);
                            setDropDownActive(false);
                        }}
                        dropDownActive={dropDownActive}
                        setDropDownActive={setDropDownActive}
                    />
                }
            </div>
            <StandardButton
                onClick={() => { navigate(`/search/${searchQuery}`) }}
                disabled={searchQuery.trim() === ""}
                text={"Search"}
            />
        </div>
    )
}