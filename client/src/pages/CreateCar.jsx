import React, {useState} from 'react'
import '../App.css'
import CarAPI from '../services/CarsAPI'
const CreateCar = () => {

    const [car, setCar] = useState({
        id: 0,
        name: '',
        exterior: '', 
        roof: '', 
        wheels: ''
    })


    const createCar = (e) => {
        e.preventDefault()
        console.log('created car in frontend', car)
        CarAPI.createCar(car)
            // .then((res) => {
            //     console.log('response from create car', res)
            // })
            // .catch((err) => {
            //     console.log('error from create car', err)
            // })
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
            <h1>Create Car</h1>
            <form onSubmit={createCar}>
                <label>Car Name</label>
                <input type='text' name='name' value={car.name} onChange={handleChange} />
                <label>Exterior Color</label>
                <input type='text' name='exterior' value={car.exterior} onChange={handleChange} />
                <label>Roof Color</label>
                <input type='text' name='roof' value={car.roof} onChange={handleChange} />
                <label>Wheel Color</label>
                <input type='text' name='wheels' value={car.wheels} onChange={handleChange} />
                <button type='submit'>Create Car</button>
            </form>
        </div>
    )
}

export default CreateCar