import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import  { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {

    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
        };
    }

    static contextType = RoomContext;

    // Without context we would use slug in props
    // from router to make API call
    //componentDidMount() {
        // API call using slug
    //}

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room

        // Array destructure - separate first image from others
        const [mainImg,...otherImages] = images;

        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {otherImages.map((item, index) => (
                        <img key={index} src={item} alt={name}/>
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                    <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                    <h6>Price : ${price}</h6>
                    </article>
                </div>
            </section>
            </>
        )
    }
}
