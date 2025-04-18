function ShowIframe(url) {
    if (Is_Side_Bar_Open) return;
    if (url == "none") return;
    let iFrame = document.getElementById('brandFrame');
    let iFrame_Container = document.getElementById('iframeContainer');

    iFrame.src = url;
    iFrame_Container.style.display = 'flex';
}
function HideIframe() {
    let iFrame_Container = document.getElementById('iframeContainer');
    iFrame_Container.style.display = 'none';

}


















Tmwta_Logo.addEventListener('click', function () {
    ShowIframe("none");

})



WolfiaX.addEventListener('click', function () {
    ShowIframe('https://drwellnessx.com/')
})

NIMNIM.addEventListener('click', function () {
    ShowIframe('https://www.wikipedia.org/')
})

KHAOPLAWAAN.addEventListener('click', function () {
    ShowIframe('https://linktr.ee/NeramitFoodtech')
})

WAFFENHUND.addEventListener('click', function () {
    ShowIframe('none')
})

PIMOL.addEventListener('click', function () {
    ShowIframe('https://pimol.co.th/ppm/')
})


House_Button.addEventListener('click', function () {
    ShowIframe('none')
})




