setInterval(function() {
    let p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i++) {
        if (p[i].innerText.includes('😊')) {
            p[i].innerText = p[i].innerText.replace('😊', '');
        }

    }
})