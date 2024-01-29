import classes from './logistics-item.module.css';
import React, {ReactElement, ReactNode} from "react";

interface IPropsLogisticsItem {
    icon: ReactElement;
    children: ReactNode;
}

const LogisticsItem: React.FC<IPropsLogisticsItem> = ({
    icon,
    children
}) => (
    <li className={classes.item}>
        <span className={classes.icon}>
          {icon}
        </span>
        <span className={classes.content}>{children}</span>
    </li>
)

export default LogisticsItem;
