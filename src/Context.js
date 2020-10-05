import React, { Component } from 'react'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    render() {
        return (
            <RoomContext.Provider value={"From Room Provider"}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }
