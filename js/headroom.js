function getScrollProgress() {
	let winTop = document.documentElement.scrollTop || document.body.scrollTop;
	let docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	let winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let progress = {
        'percent': winTop / (docHeight-winHeight) * 100,
        'pixel': winTop
    };
    return progress;
}

function updateHeader() {
    let progress = getScrollProgress();
    if (progress.pixel > 840 + 64) {
        let header = document.getElementsByClassName('mdui-appbar')[0];
        header.setAttribute('style', 'background-color: white;');
        let header_a = header.getElementsByTagName('a');
        for (let i = 0; i < header_a.length; i ++) {
            header_a[i].setAttribute('style', 'color: black !important;')
        }
        let btn = header.getElementsByClassName('mdui-btn');
        for (let i = 0; i < btn.length; i ++) {
            btn[i].classList.add('mdui-ripple');
        }
    } else {
        let header = document.getElementsByClassName('mdui-appbar')[0];
        header.setAttribute('style', '');
        let header_a = header.getElementsByTagName('a');
        for (let i = 0; i < header_a.length; i ++) {
            header_a[i].setAttribute('style', '')
        }
        let btn = header.getElementsByClassName('mdui-btn');
        for (let i = 0; i < btn.length; i ++) {
            btn[i].classList.remove('mdui-ripple');
        }
    }
}

(function() {
    window.addEventListener('load', function() {
        updateHeader();
        window.addEventListener('scroll', updateHeader);
    });
})();