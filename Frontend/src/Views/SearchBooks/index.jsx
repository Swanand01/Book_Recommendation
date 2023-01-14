import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_ENDPOINTS } from "../../API/ENDPOINTS";
import useFetch from "../../API/useFetch";
import BookList from "../../Components/BookList";
import InputForm from "../../Components/InputForm";
import COLORS from "../../COLORS";

import styles from "./styles.module.scss";

export default function SearchBooks() {
    const [getSearchResults, searchResults, isLoading] = useFetch();
    const { titleQuery } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getSearchResults(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.SEARCH_BOOKS + titleQuery);
    }, [titleQuery])

    return (
        <div className="mainContainer">
            <div className={styles.header}>
                <div className={styles.backToHome} onClick={() => { navigate("/") }}>
                    {"< Home"}
                </div>
            </div>
            <InputForm style={{
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: COLORS.darkBlack,
                padding: 20
            }}
                initialValue={titleQuery}
            />
            <div className={styles.searchResults}>
                {
                    Object.keys(searchResults).length > 0 && searchResults.success ?
                        <BookList data={searchResults.books} title={`Search results for ${titleQuery}`} />
                        :
                        <h2 className={styles.bookNotFound}>{`No results found for ${titleQuery}`}</h2>
                }
            </div>
        </div>
    )
}