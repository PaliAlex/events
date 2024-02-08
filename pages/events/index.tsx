import {EventList} from "../../components/event/list/EventList";
import {EventSearch} from "../../components/event/search/EventSearch";
import {useRouter} from "next/router";
import {getAllEvents} from "../../helpers/api-util";
import {IEventModel} from "../../models/IEventModel";
import React from "react";
import Head from "next/head";

interface IPropsAllEventsPage {
    events: IEventModel[];
}

const AllEventsPage: React.FC<IPropsAllEventsPage> = ({ events }) => {
    const router = useRouter();

    const onSearch = (year: number, month: number) => {
        const fullPath = `events/${year}/${month}`;

        router.push(fullPath);
    };

    return(
        <div>
            <Head>
                <title>All Events</title>
                <meta
                    name='description'
                    content='Fing a lot of great events, basing on your personality'
                />
            </Head>
            <EventSearch onSearch={onSearch}/>
            <EventList events={events} />
        </div>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events,
        },
        revalidate: 1800,
    }
}

export default AllEventsPage;