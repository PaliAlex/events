import classes from './event-content.module.css';
import React, {ReactNode} from "react";

interface IPropsEventContent {
    children: ReactNode;
}

const EventContent: React.FC<IPropsEventContent> = (props) => {
    return (
        <section className={classes.content}>
            {props.children}
       </section>
    );
}

export default EventContent;
