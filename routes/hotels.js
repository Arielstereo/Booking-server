import express from 'express'
const router = express.Router()
import {getAllHotels, getHotelById} from '../controllers/hotels.js'


router.get('/', getAllHotels)
router.get('/:id', getHotelById)

export default router