import React from 'react'
import classes from './MeetUpList.module.css'
import MeetUpItem from './MeetUpItem'

function MeetUpList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(({ title, id, image, address, description }) => <MeetUpItem
                key={id}
                title={title}
                id={id}
                image={image}
                address={address}
                description={description} />)}
        </ul>
    )
}

export default MeetUpList
