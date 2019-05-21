var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', {
    title: '你打篮球的样子真像乔丹', html: "<i>你需要脉动一下<i/>", arr: [
      {
        name: "蔡徐坤",
        hobby: "唱 跳 rap 还有篮球"
      },
      {
        name: "于谦",
        hobby: "抽烟 喝酒 烫头"
      },
      {
        name: "房森",
        hobby: "喝酒 健身 染发"
      }
    ]
  });
});

module.exports = router;
