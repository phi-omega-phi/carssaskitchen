function getScrollProgress() {
	let winTop = document.documentElement.scrollTop || document.body.scrollTop;
	let docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	let winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let progress = winTop / (docHeight-winHeight) * 100;
    return progress;
}
