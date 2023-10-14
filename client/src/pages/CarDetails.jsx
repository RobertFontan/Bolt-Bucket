import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CarsAPI from '../services/CarsAPI'
import { Link } from 'react-router-dom'
const CarDetails = () => {
    const { id } = useParams()
    console.log('Selected id' , id)
    
    const [car, setCar] = useState(null)


    useEffect(() => {
        const getCar = async () => {
            const car = await CarsAPI.getCar(id)
            console.log('fetching car', id, car)
            setCar(car)
        }
        getCar()


    }, [])


    const deleteCar = async () => {
        await CarsAPI.deleteCar(id)
        window.location.href = '/customcars'
    }
    return (
        <>        
        {car && <div>
            <h1>Car Name: {car.name}</h1>
            <h2>Exterior: {car.exterior}</h2>
            <h2>Roof: {car.roof}</h2>
            <h2>Wheels: {car.wheels}</h2>
            <Link to={`/edit/${id}`}><button>Edit</button></Link>
            <button onClick={deleteCar}>Delete</button>
        </div>}
        </>
    )
}

export default CarDetails