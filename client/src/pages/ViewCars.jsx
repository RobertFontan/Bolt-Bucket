import React from 'react'
import '../App.css'
import CarsAPI from '../services/CarsAPI.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const ViewCars = () => {
    
    const [cars, setCars] = useState(null)
    
    useEffect(() => {
        const getCars = async () => {
            const cars = await CarsAPI.getAllCars()
            console.log(cars)
            setCars(cars)
        }
        getCars()

    }, [])

    // const deleteCar = (id) => {
    //     CarsAPI.deleteCar(id)
    //     console.log('deleted car', id)
    // }
 
    return (
        <>
        {cars &&
        <div>
        {cars.map((car) => (
            <Link to={`/customcars/${car.id}`}>
                <div>
                    <h1>{car.name}</h1>
                    <h5>Exterior: {car.exterior}</h5>
                    <h5>Roof: {car.roof}</h5>
                    <h5>Wheels: {car.wheels}</h5>
                    <Link to={`/edit/${car.id}`}><button>Edit</button></Link>
                    {/* <button onClick={deleteCar(car.id)}>Delete</button> */}
                </div>
            </Link>
        ))}  
        </div>}
        </>
    )
}

export default ViewCars