import {Button} from "../../common/button/Button";
import classes from "./events-search.module.css";
import React, {SyntheticEvent, useRef} from "react";

const YEARS = [2021, 2022];
export const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1)
export const MONTHS_NAMES: Record<number, string> = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

interface IPropsEventSearch {
    onSearch(year: number, month: number): void;
}

export const EventSearch: React.FC<IPropsEventSearch> = ({
    onSearch,
}) => {
    const yearsFieldRef = useRef(null);
    const monthFieldRef = useRef(null);

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        const currentYear = yearsFieldRef.current;
        const currentMonth = monthFieldRef.current;


        if(!currentYear || !currentMonth) {
            return;
        }

        onSearch(currentYear.value, currentMonth.value)
    };

    return(
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearsFieldRef}>
                        {YEARS.map(it => (
                            <option value={`${it}`}>{it}</option>
                        ))}
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthFieldRef}>
                        {MONTHS.map(it => (
                            <option value={`${it}`}>{MONTHS_NAMES[it]}</option>
                        ))}
                    </select>
                </div>
            </div>
            <Button onClick={submitHandler}>Submit</Button>
        </form>
    )
}