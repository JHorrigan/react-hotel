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
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type"
                    value={type} className="form-control"
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}
