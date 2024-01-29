import classes from './results-title.module.css';
import {Button} from "../../common/button/Button";
import React from "react";

interface IPropsResultsTitle {
    date: Date;
}

export const ResultsTitle: React.FC<IPropsResultsTitle> = ({
    date,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}
