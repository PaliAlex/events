import classes from './event-summary.module.css';
import React from "react";

interface IPropsEventSummary {
    title: string,
}

const EventSummary: React.FC<IPropsEventSummary> = ({ title}) => (
    <section className={classes.summary}>
        <h1>{title}</h1>
    </section>
)

export default EventSummary;