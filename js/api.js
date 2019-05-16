

class Api {
    constructor() {
        this.urls = {
            cookieLogin: 'http://39.105.192.164:9090/apitest/cookielogin', // get
            login: 'http://39.105.192.164:9090/apitest/login', //  post 参数： *username *password classname remark
            goodsList: 'http://39.105.192.164:9090/apitest/goodslist', // get  参数：pager:int
            addUser: 'http://39.105.192.164:9090/apitest/adduser', // post *username:string *password:string
            singleGood: 'http://39.105.192.164:9090/apitest/singlegood', // get *id: string
        };
    }

    goodsList(pager = 4) {
        return AJAX('get', this.urls.goodsList, `pager=${pager}`);
    }

    // 商品详情
    singleGood(id = 1) {
        return AJAX('get', this.urls.singleGood, `id=${id}`);
    }

    // 登录
    login({ username, password }) {
        return AJAX('POST', this.urls.login, `username=${username}&password=${password}`);
    }

    // 注册
    addUser({ username, password, classname, remark }) {
        return AJAX('POST', this.urls.addUser, `username=${username}&password=${password}&classname=${classname}&remark=${remark}`);
    }

    // 有cookie登录
    cookieLogin() {
        return AJAX('POST', this.urls.cookieLogin, data);
    }
}


