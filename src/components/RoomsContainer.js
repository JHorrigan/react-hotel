import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

export default function RoomsContainer() {
    return (
        <div>
            Message from Rooms Container
            <RoomsFilter />
            <RoomsList />
        </div>
    )
}
