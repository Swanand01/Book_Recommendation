import styles from "./styles.module.scss";

export default function StandardButton({ text, onClick, disabled, style }) {
    return (
        <div
            className={`${styles.standardButton} ${disabled && styles.disabled}`}
            onClick={!disabled && onClick}
            style={style}
        >
            {text}
        </div>
    )
}