import PropTypes from 'prop-types';
import { ListItem, ListTitle, ListText } from './EventItem.styled'

export function EventItem({
    iconPerson: FaPerson ,iconLocation: CiLocationOn,
    iconCalendar: AiFillCalendar, iconTime: CiAlarmOn,
    name, location,
    speaker, type, time}) {

    const firstDate = Date.parse(time.start)
    const secondDate = Date.parse(time.end)
    const fullTime = (secondDate - firstDate)/ 3600000

    return (
        <ListItem>
            <ListTitle> {name} </ListTitle>
            <ListText> <CiLocationOn/> {location} </ListText>
            <ListText> <FaPerson/> {speaker} </ListText>
            <ListText> <AiFillCalendar/> {type} </ListText>
            <ListText> <CiAlarmOn/>  {fullTime} hourse</ListText>
        </ListItem>
    )
}

EventItem.propType = {
    name: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    type: PropTypes.oneOf['free', 'vip', 'paid'],
    time: PropTypes.array
}
