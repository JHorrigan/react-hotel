import React, { Component } from 'react'

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    render() {
        return (
            <RoomConext.Provider value="From Room Provider">
                {this.props.children}
            </RoomConext.Provider>
        )
    }
}
