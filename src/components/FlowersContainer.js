import React from "react";
import FlowersFilter from "./FlowersFilter";
import FlowersList from "./FlowersList";
import { withFlowerConsumer } from "../context";
import Loading from "./Loading";

function FlowersContainer({ context }) {
  const { loading, sortedFlowers, flowers } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <FlowersFilter flowers={flowers} />
      <FlowersList flowers={sortedFlowers} />
    </>
  );
}

export default withFlowerConsumer(FlowersContainer);

/* export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value
                    if (loading) {
                        return <Loading/>
                    }
                    return (
                        <div>
                            Hello from roomsContainer
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms}/>
                        </div>
                    )
                }
            }
        </RoomConsumer>
        
    )
} */
