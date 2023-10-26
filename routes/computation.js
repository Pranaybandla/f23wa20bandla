var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var x = Math.random() * 100;
    var y = Math.random() * 200;

    var fun1 = Math.fround(x);

    var fun2 = Math.round(y);

    res.send(`The random numbers are ${x} and ${y}
         <br> Math.fround applied to ${x} is ${fun1} 
         <br> Math.round applied to ${y} is ${fun2}`);
});

module.exports = router;