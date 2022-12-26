import styles from "./styles.module.scss";

export default function StandardButton({ text, onClick }) {
    return (
        <div
            className={styles.standardButton}
            onClick={onClick}
        >
            {text}
        </div>
    )
}