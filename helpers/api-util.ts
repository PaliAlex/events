export const getAllEvents = async () => {
    const response = await fetch('https://events-nextjs-cc6d2-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
            location: data[key].location,
            date: data[key].date,
            image: data[key].image,
            isFeatured: data[key].isFeatured,
        });
    }

    return events;
}

export const getFeaturedEvents = async() => {
    const allEvents = await getAllEvents();

    return allEvents.filter((event) => event.isFeatured);
}

export const getEventById = async(id: string) => {
    const allEvents = await getAllEvents();

    return allEvents.find((event) => event.id === id);
}