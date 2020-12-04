var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  /**
   * 由 express.urlencoded 幫我們在 req 物件中加入 query 物件
   */  
  let {op1, op2} = req.query


  /**
   * 建立 http response的body
   */
  let httpResponseBody = {
    service: 'add',
    operand1: op1,
    operand2: op2,
    result: Number.parseFloat(op1) + Number.parseFloat(op2)
  }

  /**
   * send http response
   */
  res.json(httpResponseBody)
});

router.get('/sub', function(req, res, next) {
     /**
   * 由 express.urlencoded 幫我們在 req 物件中加入 query 物件
   */  
  let {op1, op2} = req.query


  /**
   * 建立 http response的body
   */
  let httpResponseBody = {
    service: 'sub',
    operand1: op1,
    operand2: op2,
    result: Number.parseFloat(op1) - Number.parseFloat(op2)
  }

  /**
   * send http response
   */
  res.json(httpResponseBody)
  });

module.exports = router;
