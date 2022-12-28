import BookCard from "../BookCard";
import SkeletonLoader from "../SkeletonLoader";
import styles from "./styles.module.scss";

export default function SimilarBooks({ data, title, isLoading }) {
    return (
        <div>
            {
                isLoading ?
                    <SkeletonLoader
                        style={{
                            height: 30,
                            width: 300,
                            backgroundColor: "#cccdcd",
                            borderRadius: 5,
                            margin: "auto",
                            marginBottom: 30
                        }}
                    /> :
                    <h1>Books similar to {title}</h1>
            }
            <div className={styles.similarBooks}>
                {
                    isLoading ? <SkeletonLoader
                        style={{
                            height: 300,
                            width: 200,
                            backgroundColor: "#cccdcd",
                            borderRadius: 5,
                            marginBottom: 10
                        }}
                    /> :
                        data.map((book, i) => {
                            return (
                                <BookCard
                                    key={i}
                                    coverImage={book.cover_image}
                                    title={book.title}
                                    author={book.author}
                                />
                            )
                        })}
            </div>
        </div>
    )
}