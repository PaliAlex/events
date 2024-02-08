import React from "react";
import {getFilteredEvents} from "../../helpers/api-util";
import {EventList} from "../../components/event/list/EventList";
import {ResultsTitle} from "../../components/event/results/results-title";
import {Button} from "../../components/common/button/Button";
import {ErrorAlert} from "../../components/error/error-alert";
import {GetServerSideProps} from "next";
import {IEventModel} from "../../models/IEventModel";
import Head from "next/head";

interface IPropsFilteredEventsPage {
    events: IEventModel[];
    hasError: boolean;
    date: {
        year: number;
        month: number;
    };
}

const FilteredEventsPage: React.FC<IPropsFilteredEventsPage> = ({
    events,
    hasError ,
    date: {
        year,
        month,
    }
}) => {
    const headData = (
        <Head>
            <title>Filtered Events</title>
            <meta
                name='description'
                content={`All events for ${month}/${year}`}
            />
        </Head>
    );

    if(hasError) {
        return <>
            { headData }
            <ErrorAlert>No events for chosen filters</ErrorAlert>
            <div className="center">
                <Button link='/events'>Show all events</Button>
            </div>
        </>
    }
    const date = new Date(year, month - 1)

    return(
        <>
            { headData }
            <ResultsTitle date={date}/>
            <EventList events={events} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params} = context;

    const filteredData = params.slug;

    const year = +filteredData[0];
    const month = +filteredData[1];

    const events = await getFilteredEvents({year, month});

    if(!events || events.length === 0) {
        return {
            props: {
                hasError: true,
            }
        }
    }

    return ({
        props: {
            events,
            date: {
                year,
                month,
            },
        }
    })
}

export default FilteredEventsPage;