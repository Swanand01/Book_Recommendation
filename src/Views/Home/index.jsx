import InputForm from "../../Components/InputForm";

import styles from "./styles.module.scss";

export default function Homepage() {
    return (
        <div className="mainContainer">
            <h1 className={styles.siteName}>Book Recommender</h1>
            <div className={styles.homepage}>
                <InputForm />
            </div>
        </div>
    )
}