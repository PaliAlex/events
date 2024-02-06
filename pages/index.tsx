import {EventList} from "../components/event/list/EventList";
import {getFeaturedEvents} from "../helpers/api-util";
import {GetStaticProps} from "next";
import React from "react";
import {IEventModel} from "../models/IEventModel";

interface IPropsHomePage {
    events: IEventModel[];
}

const HomePage: React.FC<IPropsHomePage> = ({ events}) => {
    return(
        <div>
            <EventList events={events}/>
        </div>
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