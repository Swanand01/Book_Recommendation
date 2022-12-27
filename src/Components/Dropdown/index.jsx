import { useEffect, useCallback, useRef } from "react";
import styles from "./styles.module.scss";

/**
 *
 * @prop {array} values :  [string, ...] options of the dropdown
 */

const DropDown = ({
    values,
    onChange,
    style,
    setDropDownActive
}) => {
    const wrapperRef = useRef();

    const handleMouseUp = useCallback(event => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            setDropDownActive(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleMouseUp);
        return () => {
            window.removeEventListener("mousedown", handleMouseUp);
        };
    }, [handleMouseUp]);

    const options = values;

    return (
        <div ref={wrapperRef} className={styles.dropDownContainer} style={style}>
            <div className={styles.dropDownValuesContainer}>
                {options.map((value) => {
                    return (
                        <div
                            className={styles.dropDownItem}
                            key={value}
                            onClick={() => {
                                onChange(value);
                                setDropDownActive(false);
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    gap: 12,
                                }}
                            >
                                <p className={styles.dropDownItemTitle}>{value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DropDown;
