// app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles/not-found.module.css";

export default function NotFound() {
    const [digits, setDigits] = useState( { first: "4", second: "0", third: "4" } );

    useEffect( () => {
        // Add the CSS class to the document's body
        document.body.classList.add( styles.notFoundBody );

        // Remove the CSS class when the component unmounts
        return () => {
            document.body.classList.remove( styles.notFoundBody );
        };
    }, [] );

    return (
        <>
            <div className={`${ styles.notFoundContainer }`}>
                <div>
                    <div className={`${ styles.digitContainer }`}>
                        <span className={styles.digit}>{digits.first}</span>
                        <span className={styles.digit}>{digits.second}</span>
                        <span className={styles.digit}>{digits.third}</span>
                    </div>
                    <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
                    <Link href="/" className={styles.backHomeLink}>
                        Go back to Home
                    </Link>
                </div>
            </div>
        </>

    );
}
