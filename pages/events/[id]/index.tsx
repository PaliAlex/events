import {useRouter} from "next/router";
import {getEventById} from "../../../dummy-data";
import EventSummary from "../../../components/event/detail/summary/EventSummary";
import EventLogistics from "../../../components/event/detail/logistics/EventLogistics";
import EventContent from "../../../components/event/detail/content/EventContent";

const EventDetailPage = () => {
    const router = useRouter();

    const id = router.query.id;

    const event = getEventById(id);

    if(!event) {
        return <p>No event found</p>
    }
    return(
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default EventDetailPage;