const express = require("express");
const router = express.Router();
const ListsController = require("../controllers/ListsController");
const MainController = require("../controllers/MainController");
const SignupController = require("../controllers/SignupCotroller");
const SigninController = require("../controllers/SigninController");
const middle = require("../controllers/middle");


router.route('/').get(ListsController.displayLists)

router.route('/signin').get(middle.RedirectToProfile, MainController.signin)
router.route('/signup').get(middle.RedirectToProfile, MainController.signup)

router.route('/signup').post(SignupController.signup)
router.route('/signin').post(SigninController.signin)

router.route('/add').post(ListsController.addItem)
router.route('/edit').post(ListsController.editItem)
router.route('/delete').post(ListsController.deleteItem)


router.route('/signout').get(MainController.signout)


module.exports=router;