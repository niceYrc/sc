let list = $('.listsp>li>.tpxx>img');
// let list = $('.listsp')
$('#search>.nav-list>li>.nav-cd1').mouseover(()=>{
    for(let i = 0; i < list.length; i++ ){
     list.attr("src","img/hm"+[i+1]+".jpg")
    }
})  


