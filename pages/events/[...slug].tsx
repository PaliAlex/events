import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import {EventList} from "../../components/event/list/EventList";
import {ResultsTitle} from "../../components/event/results/results-title";
import {Button} from "../../components/common/button/Button";
import {ErrorAlert} from "../../components/error/error-alert";

const FilteredEventsPage = () => {
    const router = useRouter();

    const data = router.query.slug;

    if(!data) {
        return <p>...Loading</p>
    }

    const year = +data[0];
    const month = +data[1];


    const events = getFilteredEvents({year, month});

    if(!events || events.length === 0) {
        return <>
            <ErrorAlert>No events for chosen filters</ErrorAlert>
            <div className="center">
                <Button link='/events'>Show all events</Button>
            </div>
        </>
    }

    const date = new Date(year, month - 1)

    return(
        <>
            <ResultsTitle date={date}/>
            <EventList events={events} />
        </>
    )
}

export default FilteredEventsPage;