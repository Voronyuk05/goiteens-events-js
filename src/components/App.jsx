import { EventList } from "./EventList/EventList"
import { Container } from "./Container/Container";
import { Title } from "./Title/Title";
import upcomingEvents from '../upcoming-events.json'

export const App = () => {
  return (
    <Container>
      <Title />
      <EventList events={upcomingEvents} />
    </Container>
  );
};
