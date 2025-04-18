

let iFrame_Container;

function ShowIframe(url) {
    if (Is_Side_Bar_Open) return;
    let iFrame = document.getElementById('brandFrame');
    let iFrame_Container = document.getElementById('iframeContainer');

    iFrame.src = url;
    iFrame_Container.style.display = 'flex';
}
function HideIframe() {
    let iFrame_Container = document.getElementById('iframeContainer');
    iFrame_Container.style.display = 'none';

}

