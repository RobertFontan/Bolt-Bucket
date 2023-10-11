import { pool } from '../config/database.js'

const getCars = async (req, res) => {
    try {
        const cars = await pool.query("SELECT * FROM cars")
        res.status(200).json(cars.rows)
    }
    catch (err){
        res.status(400).json({err: err.message})
    }
}

const getCarById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const cars = await pool.query(`SELECT * FROM cars WHERE id = ${id}`)
        res.status(200).json(cars.rows[0])
    } catch (err) {
        res.status(409).json({err:err.message})
    }

}

const createCar = async (req, res) => {
    try {
        const {name, exterior, roof, wheels } = req.body
        const results = await pool.query(`
        INSERT INTO cars (name, exterior, roof, wheels)
        VALUES($1, $2, $3, $4)
        RETURNING *`, [name, exterior, roof, wheels])
        res.status(201).json(results.rows[0])
    } catch (err) {
        res.status(409).json({err:err.message})
    }

}

const updateCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {name, exterior, roof, wheels } = req.body
        const results = await pool.query(`
        UPDATE cars SET name = $1, exterior = $2, roof = $3, wheels = $4
        WHERE id = $5`
        , [name, exterior, roof, wheels, id])
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(409).json({err:err.message})
    }
}

const deleteCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query(`DELETE FROM cars WHERE id = $1`, [id])
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(409).json({err:err.message})
    }


}

export default { getCars, getCarById, createCar, updateCar, deleteCar }