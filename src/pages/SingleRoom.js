import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import  { RoomContext } from '../Context'

export default class SingleRoom extends Component {

    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.params.slug,
            defaultBcg,
        };
    }

    static contextType = RoomContext

    // Without context we would use slug in props
    // from router to make API call
    //componentDidMount() {
        // API call using slug
    //}

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        return (
            <div>
                Message from Single Room Page
            </div>
        )
    }
}
