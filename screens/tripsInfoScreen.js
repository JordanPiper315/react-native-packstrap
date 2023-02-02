import RenderTrip from "../features/trips/RenderTrip";

const TripsInfoScreen = ({ route }) => {
  const { trip } = route.params;
  return <RenderTrip trip={trip} />;
};

export default TripsInfoScreen;
