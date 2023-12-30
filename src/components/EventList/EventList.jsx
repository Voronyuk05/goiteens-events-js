import { EventItem } from "../EventItem/EventItem";
import { List } from './EventList.styled'
import PropTypes from 'prop-types';
import { FaPerson } from "react-icons/fa6";
import { CiAlarmOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiFillCalendar } from "react-icons/ai";


export function EventList({events}) {
    return (
        <List>
            {events.map(({name, location, speaker, type, time}) => (
                <EventItem
                iconLocation={CiLocationOn}
                iconTime={CiAlarmOn}
                iconPerson={FaPerson}
                iconCalendar={AiFillCalendar}
                key={name}
                name={name}
                location={location}
                speaker={speaker}
                type={type}
                time={time}
                />
            ))}
        </List>
    )
}

EventList.propType = {
    events: PropTypes.array
}

