import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';



function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        // this is what we do when we get data from the server, 
        // also GET is the default HTTP request
        fetch('https://new-meetup-react-app-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }
            // this is how we transform the data after fetching it
            // because when we get it, its still in the wrong form

            setIsLoading(false);
            setLoadedMeetups(meetups);
            // This is the actual data we retrieved 
        });
        }, []);
        // we could add setIsLoading, setLoadedMeetups as dependencies
        // but react already automatically does this for us

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
};

export default AllMeetupsPage;
