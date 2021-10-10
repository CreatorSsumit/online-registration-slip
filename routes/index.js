var express = require('express');
var router = express.Router();

const html = require('../public/javascripts/html2canvas.js')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.post("/reg", function(req, res) {

    if (req.body.value === "Frontend") {

        var price = 4000;

    } else if (req.body.value === "Backend") {
        var price = 4500;
    } else if (req.body.value === "React") {
        var price = 2000;
    } else if (req.body.value === "Angular") {
        var price = 3000;
    } else if (req.body.value === "UIUX") {
        var price = 1000;
    }

    res.render("data", { data: req.body, price: price })


})

module.exports = router;