import React from 'react'

import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupsPage() {
    const history = useHistory();

    function AddMeetupHandler(meetupData) {
        // this takes the data gathered in the newMeetupForm.js file
        // and this is where we will use the HTTP request
        fetch('https://new-meetup-react-app-default-rtdb.firebaseio.com/meetups.json',
        // this is what we do when we send data, to the server
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
            // this is how we go back to the homepage, 
            // after entering in our data
        }); 
    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={AddMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage
