import styles from "./styles.module.scss";

export default function SkeletonLoader({ style }) {
    return <div style={style} className={styles.skeletonLoader}></div>;
};
