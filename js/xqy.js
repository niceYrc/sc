



   let href = location.href;
   console.log(href)
   let x = (href.substr(href.indexOf('?')+1).split('=')[1]);
   console.log(x);
  

let tpApi = new Api;

// console.log(tpApi.singleGood(1));

(tpApi.singleGood(x)).then(function (tp) {
    let sj = JSON.parse(tp).data[0];
    console.log(sj)
    $('#hpwz .wzxx').text(sj.name)
    $('#hpwz .wzjg').text(sj.price + '元')
    $('#hphq .tp img').attr("src",sj.pic)
   
    // if ((JSON.parse(i).code) == 1) {
    //     alert('注册成功')
    //     window.open("dl.html")
    // } else {
    //     alert('用户名重复 请重新输入')
    // }
});
