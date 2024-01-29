import {EventList} from "../components/event/list/EventList";
import {getFeaturedEvents} from "../dummy-data";

const HomePage = () => {
    const events = getFeaturedEvents();

    return(
        <div>
            <EventList events={events}/>
        </div>
    )
}

export default HomePage;