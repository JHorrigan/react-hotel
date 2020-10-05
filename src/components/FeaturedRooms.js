import React, { Component } from 'react'
import { RoomContext } from '../Context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { name, age } = this.context;
        return (
            <div>
                Message from Featured Rooms ({name}, {age})
            </div>
        )
    }
}
