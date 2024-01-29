import React from "react";
import Link from "next/link";
import classes from './main-header.module.css';

interface IPropsMainHeader {

}

export const MainHeader: React.FC<IPropsMainHeader> = ({}) => {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}