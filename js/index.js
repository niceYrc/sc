let list = $('.listsp>li>.tpxx>img');
let aList = $('#cd-warp');
$('#search>.nav-list>li>.nav-cd1').mouseover(()=>{
        for(let i = 0; i < list.length; i++ ){
            list.eq(i).attr("src","img/sj"+[i+1]+".png")
        }
        aList.css('display','block')
        $('#cd-warp').hover(function () {  },function () {
            aList.css('display','none')
          })
}) 


$('#search>.nav-list>li>.nav-cd2').mouseover(()=>{
        for(let i = 0; i < list.length; i++ ){
            list.eq(i).attr("src","img/hm"+[i+1]+".png")
        }
        aList.css('display','block')
        $('#cd-warp').hover(function () {  },function () {
            aList.css('display','none')
          })
    
    
})
$('#search>.nav-list>li>.nav-cd3').mouseover(()=>{
    
        for(let i = 0; i < list.length; i++ ){
            list.eq(i).attr("src","img/ds"+[i+1]+".png")
        }
        aList.css('display','block')
        $('#cd-warp').hover(function () {  },function () {
            aList.css('display','none')
          })
    
})
$('#search>.nav-list>li>.nav-cd4').mouseover(()=>{
   
        
        for(let i = 0; i < list.length; i++ ){
            list.eq(i).attr("src","img/bjb"+[i+1]+".png")
        }
        aList.css('display','block')
        $('#cd-warp').hover(function () {  },function () {
            aList.css('display','none')
          })
    
})
$('#search>.nav-list>li>.nav-cd5').mouseover(()=>{
   
        for(let i = 0; i < list.length; i++ ){
            list.eq(i).attr("src","img/jd"+[i+1]+".png")
        }
        aList.css('display','block')
        $('#cd-warp').hover(function () {  },function () {
            aList.css('display','none')
          })
    
})
$('#search>.nav-list>li>.nav-cd6').mouseover(()=>{
   
    for(let i = 0; i < list.length; i++ ){
        list.eq(i).attr("src","img/xp"+[i+1]+".png")
    }
    aList.css('display','block')
    $('#cd-warp').hover(function () {  },function () {
        aList.css('display','none')
      })

})
$('#search>.nav-list>li>.nav-cd7').mouseover(()=>{
   
    for(let i = 0; i < list.length; i++ ){
        list.eq(i).attr("src","img/lyq"+[i+1]+".png")
    }
    aList.css('display','block')
    $('#cd-warp').hover(function () {  },function () {
        aList.css('display','none')
      })
})


