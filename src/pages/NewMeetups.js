import React from 'react'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupsPage() {
    function AddMeetupHandler(meetupData) {
        // this takes the data gathered in the newMeetupForm.js file
        // and this is where we will use the HTTP request

    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={AddMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage
