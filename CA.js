function PHForm_CAEncode(src, key) {
	let text = new Array();
	for (var i = 0; i < src.length; i++) {
		text.push(src[i]);
	}
	let len = text.length;
	let pwdlen = (key.length - 1);
	let index = 0;
	for (var i = 0; i < len; i++) {
		text[i] = String.fromCharCode(parseInt(src.charCodeAt(i)) + parseInt(key.charCodeAt(index)));
		if (index < pwdlen) {
			index++;
		} else {
			index = 0;
		}
	}
	return text.toString().replace(/,/ig, "");
}

function PHForm_CADecode(src, key) {
	let text = new Array();
	for (var i = 0; i < src.length; i++) {
		text.push(src[i]);
	}
	let len = text.length;
	let pwdlen = (key.length - 1);
	let index = 0;
	for (var i = 0; i < len; i++) {
		text[i] = String.fromCharCode(parseInt(src.charCodeAt(i)) - parseInt(key.charCodeAt(index)));
		if (index < pwdlen) {
			index++;
		} else {
			index = 0;
		}
	}
	return text.toString().replace(/,/ig, "");
}
