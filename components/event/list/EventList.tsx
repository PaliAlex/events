import React from "react";
import {IEventModel} from "../../../models/IEventModel";
import {EventItem} from "../item/EventItem";
import classes from "./event-list.module.css";

interface IPropsEventList {
    events: IEventModel[];
}

export const EventList: React.FC<IPropsEventList> = ({ events}) => {
    return(
        <ul className={classes.list}>
            {events.map(
                (it, index) => (
                    <EventItem
                        {...it}
                        event={it}
                        key={index}
                    />
                )
            )}
        </ul>
    )
}
