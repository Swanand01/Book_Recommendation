import styles from "./styles.module.scss";

export default function SearchBar({ onSearch, onChange, searchQuery, setSearchQuery }) {
    return (
        <input
            type="search"
            name="searchbar"
            placeholder="Enter a book title..."
            id={styles.searchbarInput}
            value={searchQuery}
            onChange={(e) => {
                onChange(e.target.value);
                setSearchQuery(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    searchQuery.trim() !== "" && onSearch(searchQuery);
                }
            }}
            autoComplete={"off"}
        />
    )
}