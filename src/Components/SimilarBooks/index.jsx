import BookCard from "../BookCard";
import styles from "./styles.module.scss";

export default function SimilarBooks({ data, title }) {
    return (
        <div>
            <h1>Books similar to {title}</h1>
            <div className={styles.similarBooks}>
                {data.map((book, i) => {
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