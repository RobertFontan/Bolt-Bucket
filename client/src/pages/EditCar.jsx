import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CarsAPI from '../services/CarsAPI'

const EditCar = () => {
    
    const { id } = useParams()

    useEffect(() => {
        const getCar = async () => {
            const car = await CarsAPI.getCar(id)
            console.log('in edit car', id, car)
            setCar(car)
        }
        getCar()
    

    }, [])

    const [car, setCar] = useState(null)
    // const [car, setCar] = useState({
    //     id: 0,
    //     name: '',
    //     exterior: '', 
    //     roof: '', 
    //     wheels: ''
    // })

    const updateCar = (e) => {
        e.preventDefault()
        console.log('updated car values in frontend', car)
        CarsAPI.updateCar(id, car)
         
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setCar((prev) => { 
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div>
            <h1>Edit Car</h1>
            {car && 
            <form onSubmit={updateCar}>
                <label>Car Name</label>
                <input type='text' name='name' value={car.name} onChange={handleChange} />
                <label>Exterior Color</label>
                <input type='text' name='exterior' value={car.exterior} onChange={handleChange} />
                <label>Roof Color</label>
                <input type='text' name='roof' value={car.roof} onChange={handleChange} />
                <label>Wheel Color</label>
                <input type='text' name='wheels' value={car.wheels} onChange={handleChange} />
                <button type='submit'>Edit Car</button>
            </form>}
        </div>
    )
}

export default EditCar