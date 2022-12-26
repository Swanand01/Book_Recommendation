import InputForm from "../../Components/InputForm";

import styles from "./styles.module.scss";

export default function Homepage() {
    return (
        <div className="mainContainer">
            <div className={styles.homepage}>
                <InputForm />
            </div>
        </div>
    )
}