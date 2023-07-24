import express from 'express'
const router=express.Router()
import { homeController } from '../controllers/homeController.js'
import { bookingController } from '../controllers/bookingController.js'
import { loginController,login } from '../controllers/loginController.js'
import { registerController } from '../controllers/registerController.js'
import { forgotpasswordController } from '../controllers/forgotpasswordController.js'
import { calendarController } from '../controllers/calendarController.js'
import { clientenquiresController } from '../controllers/clientenquiresController.js'
import {clientsController } from '../controllers/clientsController.js'
import {clientleadsController} from '../controllers/clientleadsController.js'
import {clientnewController} from '../controllers/clientnewController.js'



// define Routes
router.post('/createuser',login)
router.get('/',homeController)
router.get('/login', loginController)
router.get('/register', registerController)
router.get('/forgotpassword',forgotpasswordController)

// router.get('/signup',signupController)
router.get('/calendar', calendarController)
router.get('/clientenquires', clientenquiresController)
router.get('/clients',clientsController)
router.get('/clientleads',clientleadsController)
router.get('/clientnew', clientnewController)

router.get('/booking',bookingController)


export default router
