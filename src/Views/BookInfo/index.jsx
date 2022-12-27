import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../API/useFetch";

import SimilarBooks from "../../Components/SimilarBooks";

import { API_ENDPOINTS } from "../../API/ENDPOINTS";

import styles from "./styles.module.scss";

export default function BookInfo() {
    const { bookName } = useParams();
    const navigate = useNavigate();
    const [getBookInfo, apiData, isLoading] = useFetch();

    useEffect(() => {
        getBookInfo(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.RECOMMEND_BOOKS + bookName);
    }, [bookName]);

    return (
        <div className="mainContainer">
            <div className={styles.header}>
                <div className={styles.backToHome} onClick={() => { navigate("/") }}>
                    {"< Home"}
                </div>
            </div>
            {
                Object.keys(apiData).length > 0 &&
                    apiData.success ? (
                    <div className={styles.container}>
                        <div className={styles.bookInfoContainer}>
                            <div className={styles.bookInfo}>
                                <div className={styles.bookCoverImage}>
                                    <img
                                        src={apiData.cover_image}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.bookTitle}>
                                    {apiData.book_name}
                                </div>
                                <div className={styles.bookAuthor}>
                                    {apiData.author}
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.similarBooks}>
                            <SimilarBooks data={apiData.similar_books} title={apiData.book_name} />
                        </div>
                    </div>
                )
                    :
                    <h2 className={styles.bookNotFound}>Book not found.</h2>
            }
        </div>
    )
}