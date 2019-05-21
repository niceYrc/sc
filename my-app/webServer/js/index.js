let list = $('.listsp>li>.tpxx>img');
let aList = $('#cd-warp');

let nv1 = $('#search>.nav-list>li>.nav-cd1');
let nv2 = $('#search>.nav-list>li>.nav-cd2');
let nv3 = $('#search>.nav-list>li>.nav-cd3');
let nv4 = $('#search>.nav-list>li>.nav-cd4');
let nv5 = $('#search>.nav-list>li>.nav-cd5');
let nv6 = $('#search>.nav-list>li>.nav-cd6');
let nv7 = $('#search>.nav-list>li>.nav-cd7');
let nv = function (dh, wjm) {
    dh.mouseover(() => {
        for (let i = 0; i < list.length; i++) {
            list.eq(i).attr("src", "img/" + wjm + [i + 1] + ".png")
        }
        aList.css('display', 'block')
        $('#cd-warp').hover(function () {
            aList.css('display', 'block')
        }, function () {
            aList.css('display', 'none')
        })
        $('.nav-list').hover(function () {
            aList.css('display', 'block')
        }, function () {
            aList.css('display', 'none')
        })

    })
}
nv(nv1, 'sj')
nv(nv2, 'hm')
nv(nv3, 'ds')
nv(nv4, 'bjb')
nv(nv5, 'jd')
nv(nv6, 'xp')
nv(nv7, 'lyq')



let cblist = $('.cplist>li>.cpxx>img');
let cbaList = $('#xq');

let cb1 = $('#cbl>.cblist>.cblist-1');
let cb2 = $('#cbl>.cblist>.cblist-2');
let cb3 = $('#cbl>.cblist>.cblist-3');
let cb4 = $('#cbl>.cblist>.cblist-4');
let cb5 = $('#cbl>.cblist>.cblist-5');
let cb6 = $('#cbl>.cblist>.cblist-6');
let cb7 = $('#cbl>.cblist>.cblist-7');
let cb8 = $('#cbl>.cblist>.cblist-8');
let cb9 = $('#cbl>.cblist>.cblist-9');
let cb10 = $('#cbl>.cblist>.cblist-10');
let gb = function (mz, wj) {
    mz.mouseover(() => {
        for (let i = 0; i < cblist.length; i++) {
            cblist.eq(i).attr("src", "img/" + wj + [i + 1] + ".png")
        }
        cbaList.css('display', 'block');

        $('#xq').hover(function () {
            cbaList.css('display', 'block');
        }, function () {
            cbaList.css('display', 'none')
        })

        $('.cblist').hover(function () {
            cbaList.css('display', 'block');
        }, function () {
            cbaList.css('display', 'none')
        })
    })
}
gb(cb1, 'cb')
gb(cb2, 'hz')
gb(cb3, 'pb')
gb(cb4, 'cxb')
gb(cb5, 'cb')
gb(cb6, 'hz')
gb(cb7, 'cb')
gb(cb8, 'hz')
gb(cb9, 'pb')
gb(cb10, 'cxb')


onload = function () {
    if ((typeof (localStorage.getItem('Id'))) == 'string') {
        $('.nav-rtxt .li1 .dls').text('我的信息');
        $('.nav-rtxt .li2 .dls2').text('消息通知');
        $('.nav-rtxt .li1 .dls').attr("href", "javascript:;")
        $('.nav-rtxt .li2 .dls2').attr("href", "javascript:;")
    } else {
        $('.nav-rtxt .li1 .dls').text('登录');

        $('.nav-rtxt .li2 .dls2').text('注册');

        //    $('#yhwc .dls').css('我的信息') 
    }
}


