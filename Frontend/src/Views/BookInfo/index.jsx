import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../API/useFetch";

import BookList from "../../Components/BookList";
import SkeletonLoader from "../../Components/SkeletonLoader";

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
                (apiData.success ? (
                    <div className={styles.container}>
                        <div className={styles.bookInfoContainer}>
                            <div className={styles.bookInfo}>
                                <div className={styles.bookCoverImage}>
                                    {
                                        isLoading ?
                                            <SkeletonLoader
                                                style={{
                                                    height: 300,
                                                    width: 200,
                                                    backgroundColor: "#cccdcd",
                                                    borderRadius: 5,
                                                    marginBottom: 10
                                                }}
                                            />
                                            : <img
                                                src={apiData.cover_image}
                                                alt=""
                                            />
                                    }
                                </div>
                                <div className={styles.bookTitle}>
                                    {
                                        isLoading ?
                                            <SkeletonLoader
                                                style={{
                                                    height: 30,
                                                    width: 250,
                                                    backgroundColor: "#cccdcd",
                                                    borderRadius: 5,
                                                    marginBottom: 10
                                                }}
                                            /> :
                                            apiData.book_name
                                    }
                                </div>
                                <div className={styles.bookAuthor}>
                                    {
                                        isLoading ?
                                            <SkeletonLoader
                                                style={{
                                                    height: 20,
                                                    width: 200,
                                                    backgroundColor: "#cccdcd",
                                                    borderRadius: 5,
                                                    marginBottom: 10
                                                }}
                                            /> :
                                            apiData.author
                                    }
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.BookList}>
                            <BookList
                                data={apiData.similar_books}
                                title={`Books similar to ${apiData.book_name}`}
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                )
                    :
                    <h2 className={styles.bookNotFound}>Book not found.</h2>)
            }
        </div>
    )
}