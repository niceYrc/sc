$('#banne>.rigz>.zhdl>a').on('click', function () {
    $('#banne .rigz .zhdl .zhdlxs').css('display', 'block');
    $('#banne .rigz .smdl .smdlxs').css('display', 'none');
    $('#banne .rigz .zhdl>a').css('color', '#ff6702');
    $('#banne .rigz .smdl>a').css('color', '#8a8a8a');
})


$('#banne>.rigz>.smdl>a').on('click', function () {
    $('#banne .rigz .zhdl .zhdlxs').css('display', 'none');
    $('#banne .rigz .smdl .smdlxs').css('display', 'block');
    $('#banne .rigz .zhdl>a').css('color', '#8a8a8a');
    $('#banne .rigz .smdl>a').css('color', '#ff6702');

})





$('#ljzcdj').on('click', function () {
    let yhxx = {
        'username': $('#yhmzc').val(),
        'password': $('#mmzc').val()
    }
    console.log(yhxx);
    let aApi = new Api;

    // aApi.addUser(yhxx);

    (aApi.addUser(yhxx)).then(function (i) {
        if ((JSON.parse(i).code) == 1) {
            alert('注册成功')
            window.open("dl.html")
        } else {
            alert('用户名重复 请重新输入')
        }
    });


    event.preventDefault();

})



$('#dlzhxx').on('click', function () {
    let dlxxa = {
        'username': $('#yhmxx').val(),
        'password': $('#mmxx').val()
    }
    console.log(dlxxa);

    let bApi = new Api;

//    console.log(bApi.login(dlxxa));

(bApi.login(dlxxa)).then(function (v) {
    // console.log(JSON.parse(v).code)
    
    if ((JSON.parse(v).code) == 1) {
        localStorage.setItem('Id',(dlxxa.username));
        localStorage.setItem('password',(dlxxa.password));
        alert('登录成功')
        window.open("index.html")
       
        
        
    } else {
        alert('用户名或密码错误 请重新输入')
    }
});


    event.preventDefault();

})




