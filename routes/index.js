const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auz");


// *****************************************************************************************************************

//                                           Admin Routes 

//*******************************************************************************************************************

const { createBook , createBookCategory , deleteBookCategory , deleteBook , updateBook , updateBookCategory, adminLogin } = require("../controller/admin");

router.post( '/createbook' , createBook );
router.post( '/createbookcategory' , createBookCategory );
router.delete( '/deletebookcategory' , deleteBookCategory );
router.delete( '/deletebook' , deleteBook );
router.put( '/updatebook' , updateBook );
router.put( '/updatebookcategory' , updateBookCategory );
router.post( '/adminlogin' , adminLogin );

// *****************************************************************************************************************

//                                           Auth Routes 

//*******************************************************************************************************************


const{ signup , login , sendOtp } = require("../controller/auth");

router.post("/signup" , signup);
router.post("/login" , login);
router.post("/sendotp" , sendOtp);

// *****************************************************************************************************************

//                                           User Routes 

//*******************************************************************************************************************


const { update_user , getFine } = require("../controller/user");

router.put( '/updateuser' , auth , update_user );
router.get( '/getfine' , auth , getFine);




















module.exports=router;