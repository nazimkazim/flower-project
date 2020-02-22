import React from "react";
import BlogsList from "./BlogsList";
import { withBlogsConsumer } from "../contextBlog";
import Loading from "./Loading";

function BlogsContainer({ context }) {
  const { loading, blogs } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BlogsList blogs={blogs} />
    </>
  );
}

export default withBlogsConsumer(BlogsContainer);

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
