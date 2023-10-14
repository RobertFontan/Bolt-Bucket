const getAllCars = async () => {
    try {
        const response = await fetch("http://localhost:3000/cars")
        const result = await response.json()
        return result
    } catch (err) {
        console.log(error)
    }
}

const getCar = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/cars/${id}`)
        const result = await response.json()
        return result
    } catch (err) {
        console.log(err)
    }

}

const createCar = async (car) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }

        fetch('http://localhost:3000/cars', options)

    } catch (err) {
        console.log(err)
    }
}

const deleteCar = async (id) => {
    try {
        const options = {
            method: 'DELETE',
        }
        fetch(`http://localhost:3000/cars/${id}`, options)
    } catch (err) {
        console.log(err)   
    }
}

const updateCar = async (id, car) => {
    try {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        fetch(`http://localhost:3000/cars/${id}`, options)

    } catch (err) {
        
    }
}


export default {
    getAllCars, 
    getCar, 
    createCar,
    deleteCar,
    updateCar
}