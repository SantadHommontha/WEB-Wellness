let SuperFood = document.getElementById('Super_Food');
let Supplementary = document.getElementById('Supplementary');
let Medical = document.getElementById('toggle_btn');

let Ifram_Back_Btn = document.getElementById('Ifram_Back_Btn');

let iframeShow = false;
let SideBarLink = false;

function ShowIframe(url) {

    if (url == "none") return;
    if (iframeShow) return;
    if (Is_Side_Bar_Open ) return;
    let iFrame = document.getElementById('brandFrame');
    let iFrame_Container = document.getElementById('iframeContainer');

    iFrame.src = url;
    iFrame_Container.style.display = 'flex';

    iframeShow = true;

    SuperFood.classList.add('SideBarOpen');
    Supplementary.classList.add('SideBarOpen');
    Medical.classList.add('SideBarOpen');
}

function ShowIframe_SideBar(url) {

    if (url == "none") return;
    if (iframeShow) return;
   
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




//------------------------------------------------------------------------------------------------- Logo
Tmwta_Logo.addEventListener('click', function () {
    ShowIframe("https://tmwta.com/");

});







//------------------------------------------------------------------------------------------------- Product Button
WolfiaX.addEventListener('click', function () {
    ShowIframe('https://drwellnessx.com/');
});

NIMNIM.addEventListener('click', function () {
    ShowIframe('https://www.nimnimnoodle.com/?srsltid=AfmBOooiyCmz0YERHc_A-y-BZjuVQKFwDYArIjGXDZH0q3sqqwRx5CsF', 1);
});

KHAOPLAWAAN.addEventListener('click', function () {
    ShowIframe('https://neramitfood.tech/');
    //  ShowIframe('http://linktr.ee/NeramitFoodtech');
});

WAFFENHUND.addEventListener('click', function () {
    ShowIframe('http://www.waffenhund.com/');
});

PIMOL.addEventListener('click', function () {
    ShowIframe('https://pimol.co.th/ppm/');
});
KLONGTOM.addEventListener('click', function () {
    ShowIframe('https://www.amatayarehab.com/');
})


//------------------------------------------------------------------------------------------------- Side Bar

let FACILITATORS = document.getElementById('FACILITATORS');
let WELLNESS_ESTATE = document.getElementById('WELLNESS_ESTATE');
let WELLNESS_CENTER = document.getElementById('WELLNESS_CENTER');
let WELLNESS_CLINIC = document.getElementById('WELLNESS_CLINIC');


FACILITATORS.addEventListener('click', function () {
    SideBarLink = true;
    ShowIframe_SideBar("https://visitasian.com/");
    console.log("FACILITATORS");
})
WELLNESS_ESTATE.addEventListener('click', function () {
    SideBarLink = true;
    ShowIframe_SideBar("https://www.klongtomheritage.com/");
    console.log("WELLNESS_ESTATE");
})

WELLNESS_CENTER.addEventListener('click', function () {
    SideBarLink = true;
    ShowIframe_SideBar("https://mousaiwellness.com/");
    console.log("WELLNESS_CENTER");
})

WELLNESS_CLINIC.addEventListener('click', function () {
    SideBarLink = true;
    ShowIframe_SideBar("https://www.klosswellnessclinic.com/");
    console.log("WELLNESS_CLINIC");
})




// let IframeShow = iframeShow;
// export { IframeShow };

