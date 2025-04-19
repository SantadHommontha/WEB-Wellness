let SuperFood = document.getElementById('Super_Food');
let Supplementary = document.getElementById('Supplementary');
let Medical = document.getElementById('toggle_btn');

let Ifram_Back_Btn = document.getElementById('Ifram_Back_Btn');

let iframeShow = false;
let SideBarLink = false;

function ShowIframe(url) {

    if (url == "none") return;
    let iFrame = document.getElementById('brandFrame');
    let iFrame_Container = document.getElementById('iframeContainer');

    iFrame.src = url;
    iFrame_Container.style.display = 'flex';

    iframeShow = true;

    SuperFood.classList.add('SideBarOpen');
    Supplementary.classList.add('SideBarOpen');
    Medical.classList.add('SideBarOpen');
}
function HideIframe() {
    let iFrame_Container = document.getElementById('iframeContainer');
    let iFrame = document.getElementById('brandFrame');
    iFrame.src = "";
    iFrame_Container.style.display = 'none';

    iframeShow = false;

    SuperFood.classList.remove('SideBarOpen');
    Supplementary.classList.remove('SideBarOpen');
    Medical.classList.remove('SideBarOpen');

    
}

Ifram_Back_Btn.addEventListener('click', function () {
    HideIframe();
})





// let Amazing_Thailand = document.getElementById('Amazing_Thailand');


let FACILITATORS = document.getElementById('FACILITATORS');
let WELLNESS_ESTATE = document.getElementById('WELLNESS_ESTATE');
let WELLNESS_CENTER = document.getElementById('WELLNESS_CENTER');
let WELLNESS_CLINIC = document.getElementById('WELLNESS_CLINIC');

//------------------------------------------------------------------------------------------------- Logo
Tmwta_Logo.addEventListener('click', function () {
    ShowIframe("https://tmwta.com/");

});

Amazing_Thailand.addEventListener('click', function () {
    ShowIframe("https://tmwta.com/");
});






//------------------------------------------------------------------------------------------------- Product Button
WolfiaX.addEventListener('click', function () {
    ShowIframe('https://drwellnessx.com/');
});

NIMNIM.addEventListener('click', function () {
    ShowIframe('https://www.wikipedia.org/');
});

KHAOPLAWAAN.addEventListener('click', function () {
    ShowIframe('https://linktr.ee/NeramitFoodtech');
});

WAFFENHUND.addEventListener('click', function () {
    ShowIframe('none');
});

PIMOL.addEventListener('click', function () {
    ShowIframe('https://pimol.co.th/ppm/');
});
// ProductX.addEventListener('click',function()
// {
//     ShowIframe('none');
// })


//------------------------------------------------------------------------------------------------- Side Bar
FACILITATORS.addEventListener('click', function () {
    ShowIframe("none");
    SideBarLink = true;
})
WELLNESS_ESTATE.addEventListener('click', function () {
    ShowIframe("none");
    SideBarLink = true;
})

WELLNESS_CENTER.addEventListener('click', function () {
    ShowIframe("https://mousaiwellness.com/");
    SideBarLink = true;
})

WELLNESS_CLINIC.addEventListener('click', function () {
    ShowIframe("none");
    SideBarLink = true;
})




// let IframeShow = iframeShow;
// export { IframeShow };

