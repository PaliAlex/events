import EventSummary from "../../../components/event/detail/summary/EventSummary";
import EventLogistics from "../../../components/event/detail/logistics/EventLogistics";
import EventContent from "../../../components/event/detail/content/EventContent";
import {GetStaticPaths, GetStaticProps} from "next";
import { getEventById, getFeaturedEvents } from "../../../helpers/api-util";

const EventDetailPage = ({ currentEvent }) => {
    if(!currentEvent) {
        return (
            <div className="center">
                <p>...Loading</p>
            </div>
        )
    }

    return(
        <>
            <EventSummary title={currentEvent.title} />
            <EventLogistics
                date={currentEvent.date}
                address={currentEvent.location}
                image={currentEvent.image}
                imageAlt={currentEvent.title}
            />
            <EventContent>
                <p>{currentEvent.description}</p>
            </EventContent>
        </>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context

    const id = params.id as unknown as string;

    const currentEvent = await getEventById(id);

    if(!currentEvent) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            currentEvent,
        },
        revalidate: 30,
    }
}

export const getStaticPaths: GetStaticPaths = (async () => {
    const events = await getFeaturedEvents();

    const pathsWithParams = events.map((it) => ({ params: { id: it.id} }));

    return {
        paths: pathsWithParams,
        fallback: true,
    }
});

export default EventDetailPage;