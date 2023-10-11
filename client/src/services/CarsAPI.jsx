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

const createCar = async () => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }

        fetch('http://localhost:3000/cars', options)
        return // maybe unnecessary
    } catch (err) {
        console.log(err)
    }
}

export default {
    getAllCars, 
    getCar, 
    createCar
}