function Ajax(type,url,data,success) {

	var xhr = null;

	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();  //其他浏览器
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');  //ie浏览器
	}
	if(type == 'GET'){
		if(data){
			xhr.open('GET',url+'?'+data,true);
		}else{
			xhr.open('GET',url,true);
		}
		xhr.send();
	}else{
		xhr.open('POST',url,true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}

	xhr.onreadystatechange = function(){
		if(xhr.status == 200 && xhr.readyState == 4){
			success(xhr.responseText)
		}
	}
	
}