import React from "react"
import styles from "./loader.module.scss"

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles["lds-ripple"]}><div></div><div></div></div>
        </div>
    )
}

export default Loader