import React from "react";
import LogisticsItem from '../logistics-item/logistics-item';
import classes from './event-logistics.module.css';
import DateIcon from "../../../icons/date-icon";
import AddressIcon from "../../../icons/address-icon";

interface IPropsEventLogistics {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<IPropsEventLogistics> = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<DateIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<AddressIcon />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;