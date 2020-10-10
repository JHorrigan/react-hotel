import React from 'react'
import Room from './Room'

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your 
                search parameters</h3>
            </div>
        )
    }
    return (
        <div>
            Message from Rooms List
        </div>
    )
}
