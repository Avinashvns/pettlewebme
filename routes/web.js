import express from 'express'
const router=express.Router()
import { homeController } from '../controllers/homeController.js'
import { clientleadController } from '../controllers/clientleadController.js'



// create Routes
router.get('/',homeController)
router.get('/clientleads',clientleadController)

export default router