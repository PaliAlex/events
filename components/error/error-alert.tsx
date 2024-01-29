import classes from './error-alert.module.css';
import React, {ReactNode} from "react";

interface IPropsErrorAlert {
  children: ReactNode;
}

export const ErrorAlert: React.FC<IPropsErrorAlert> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
}
