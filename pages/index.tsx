import {EventList} from "../components/event/list/EventList";
import {getFeaturedEvents} from "../helpers/api-util";
import {GetStaticProps} from "next";
import React from "react";
import {IEventModel} from "../models/IEventModel";
import Head from "next/head";

interface IPropsHomePage {
    events: IEventModel[];
}

const HomePage: React.FC<IPropsHomePage> = ({ events}) => {
    return(
        <>
            <Head>
                <title>NextJs Events</title>
                <meta
                    name='description'
                    content='Fing a lot of great events, basing on your personality'
                />
            </Head>
            <EventList events={events}/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const events = await getFeaturedEvents();

    return {
        props: {
            events: events.filter(it => it.isFeatured),
        },
        revalidate: 1800,
    }
}

export default HomePage;