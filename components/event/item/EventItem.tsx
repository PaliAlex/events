import React from "react";
import {IEventModel} from "../../../models/IEventModel";
import classes from "./event-item.module.css";
import {Button} from "../../common/button/Button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";
import Image from "next/image";

interface IPropsEventItem {
    event: IEventModel;
    title: string;
    image: string;
    date: string;
    location: string;
    id: string;
}

export const EventItem: React.FC<IPropsEventItem> = ({
    event,
    title,
    image,
    date,
    location,
    id,
}) => {

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return(
        <li className={classes.item}>
            <Image src={'/' + image} alt={title} width={250} height={160}/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}