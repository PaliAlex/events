import {getAllEvents} from "../../dummy-data";
import {EventList} from "../../components/event/list/EventList";
import {EventSearch} from "../../components/event/search/EventSearch";
import {useRouter} from "next/router";

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const onSearch = (year: number, month: number) => {
        const fullPath = `events/${year}/${month}`;

        router.push(fullPath);
    };

    return(
        <div>
            <EventSearch onSearch={onSearch}/>
            <EventList events={events} />
        </div>
    )
}

export default AllEventsPage;