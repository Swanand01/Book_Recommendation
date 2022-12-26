import { useState } from "react";

import SearchBar from "../SearchBar"
import StandardButton from "../StandardButton";

import styles from "./styles.module.scss";

export default function InputForm() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className={styles.inputForm}>
            <SearchBar
                onSearch={() => { }}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <StandardButton
                onClick={() => { }}
                disabled={searchQuery.trim() === ""}
                text={"Get Recommendations"}
            />
        </div>
    )
}