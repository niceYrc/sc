



// for( let i = 0; i++){}

let xrapi = new Api;
for (let i = 1; i <= 7; i++) {
    let a = i;
    (xrapi.goodsList(a)).then(function (xr) {
        for(let j = 0 ; j < 12; j++) {
            // console.log(j)
            let b = j;
            let lby = (JSON.parse(xr).data.list);
            // console.log(lby[b].name);
            // let c = lby[b];
            str = `
            <a href="xqy.html?id=${lby[b].id}">
            <img src="" alt="">
            <span></span>
            <p></p>
            </a>
            `
            
            $('#lbyxx').last().append(" <div class='crwb'></div>");
            $('#lbyxx .crwb:last').append(''+str);
           
            $('#lbyxx .crwb:last>a>span').text(lby[b].name);
            $('#lbyxx .crwb:last>a>p').text(lby[b].price + '元');
            $('#lbyxx .crwb:last>a>img').attr("src",lby[b].pic);
            // $('#lbyxx .crwb:last>a').append(''+lby[b].id);
            
        }
       
    });
}
