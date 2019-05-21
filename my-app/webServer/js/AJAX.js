/**
 * @param type
 * @param url
 * @param data
 * @returns {Promise<any>}
 * @constructor
 */
function AJAX(type, url, data) {
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (type.match(/^post$/i)) {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    } else {
        if (data) {
            xhr.open('GET', url + '?' + data, true);
        } else {
            xhr.open('GET', url, true);
        }
        xhr.send();
    }

    return new Promise(resolve => {
        xhr.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                resolve(xhr.responseText)
            }
        }
    })
}

