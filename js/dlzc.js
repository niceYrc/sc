$('#banne>.rigz>.zhdl>a').on('click', function () {
    $('#banne .rigz .zhdl .zhdlxs').css('display', 'block');
    $('#banne .rigz .smdl .smdlxs').css('display', 'none');

})


$('#banne>.rigz>.smdl>a').on('click', function () {
    $('#banne .rigz .zhdl .zhdlxs').css('display', 'none');
    $('#banne .rigz .smdl .smdlxs').css('display', 'block');

})





$('#ljzcdj').on('click', function () {
    let yhxx = {
        'username' : $('#yhmzc').val(),
        'password' : $('#mmzc').val()
    }
    console.log(yhxx);
    let aApi = new Api;

    // aApi.addUser(yhxx);

    (aApi.addUser(yhxx)).then(function(i) {
       if((JSON.parse(i).code) == 1){
        alert('注册成功')
        window.open("../dl.html")
       }else{
           alert('用户名重复 请重新输入')
       }
      });


    event.preventDefault(); 

})




