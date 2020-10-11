import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price,
        minPrice, maxPrice, minSize, maxSize,
        breakfast, pets
    } = context

    // get unique types
    let types = getUnique(rooms, 'type')
    // add all option to types
    types = ['all',...types]
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    // get unique capacity
    let people = getUnique(rooms, 'capacity')
    // map to jsx
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* Start select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type"
                    value={type} className="form-control"
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End select type */}
                {/* Start guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity"
                    value={capacity} className="form-control"
                    onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* End guests */}
                {/* Start room price */}
                <div className="form-group">
                    <label htmlFor="capacity">
                        Room Price £{price}
                    </label>
                    <input type="range" name="price" min={minPrice}
                    max={maxPrice} id="price" value={price} onChange=
                    {handleChange} className="form-control"/>

                </div>
                {/* End of room price */}
            </form>
        </section>
    )
}
