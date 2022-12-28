import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function BookCard({ coverImage, title, author }) {
    const navigate = useNavigate();
    return (
        <div
            className={styles.bookCard}
            onClick={() => {
                navigate(`/book/${title}`)
            }}
        >
            <img
                className={styles.bookCoverImage}
                src={coverImage}
                alt=""
            />
            <div className={`${styles.bookTitle} ${styles.textOverflow}`}>
                {title}
            </div>
            <div className={`${styles.bookAuthor} ${styles.textOverflow}`}>
                {author}
            </div>
        </div>
    )
}