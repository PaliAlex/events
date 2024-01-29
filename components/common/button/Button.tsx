import React, {ReactNode, SyntheticEvent} from "react";
import Link from "next/link";
import classes from "./button.module.css";

interface IPropsButton {
    link?: string;
    children: ReactNode;
    onClick?(event: SyntheticEvent): void;
}

export const Button: React.FC<IPropsButton> = ({
    link,
    onClick,
    children,
}) => {
    if(link) {
        return <Link href={link} className={classes.btn}>{children}</Link>

    }
    return(
        <button className={classes.btn} onClick={onClick}>{children}</button>
)}