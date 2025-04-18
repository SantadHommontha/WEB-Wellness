

let WolfiaX = document.getElementById('WolfiaX')
let NIMNIM = document.getElementById('NIMNIM')
let KHAOPLAWAAN = document.getElementById('KHAOPLAWAAN')
let WAFFENHUND = document.getElementById('WAFFENHUND')
let PIMOL = document.getElementById('PIMOL')
let House_Button = document.getElementById('House_Button')

let Tmwta_Logo = document.getElementById('Tmwta_Logo');

function Product_Active(Product) {
    if (Is_Side_Bar_Open) return;
    let allChild = Product.children;
    if (allChild[0]) allChild[0].style.opacity = '0';
    if (allChild[1]) allChild[1].style.opacity = '1';
   
    if (allChild[2]) allChild[2].style.opacity = '1';
}

function Product_UnActive(Product) {
    let allChild = Product.children;
    if (allChild[0]) allChild[0].style.opacity = '1';
    if (allChild[1]) allChild[1].style.opacity = '0';

    if (allChild[2]) allChild[2].style.opacity = '0';
}


Tmwta_Logo.addEventListener('mouseover', function () {
    console.log("Select Product 1");
    Product_Active(Tmwta_Logo);
}
)
Tmwta_Logo.addEventListener('mouseout', function () {
    console.log("UnSelect Product 1");
    Product_UnActive(Tmwta_Logo);
}
)



WolfiaX.addEventListener('mouseover', function () {
    console.log("Select Product 1");
    Product_Active(WolfiaX);
}
)
WolfiaX.addEventListener('mouseout', function () {
    console.log("UnSelect Product 1");
    Product_UnActive(WolfiaX);
}
)



NIMNIM.addEventListener('mouseover', function () {
    console.log("Select Product 2");
    Product_Active(NIMNIM);
}
)
NIMNIM.addEventListener('mouseout', function () {
    console.log("UnSelect Product 2");
    Product_UnActive(NIMNIM);
}
)


KHAOPLAWAAN.addEventListener('mouseover', function () {
    console.log("Select Product 3");
    Product_Active(KHAOPLAWAAN);
}
)
KHAOPLAWAAN.addEventListener('mouseout', function () {
    console.log("UnSelect Product 3");
    Product_UnActive(KHAOPLAWAAN);
}
)

WAFFENHUND.addEventListener('mouseover', function () {
    console.log("Select Product 4");
    Product_Active(WAFFENHUND);
}
)
WAFFENHUND.addEventListener('mouseout', function () {
    console.log("UnSelect Product 4");
    Product_UnActive(WAFFENHUND);
}
)

PIMOL.addEventListener('mouseover', function () {
    console.log("Select Product 5");
    Product_Active(PIMOL);
}
)
PIMOL.addEventListener('mouseout', function () {
    console.log("UnSelect Product 5");
    Product_UnActive(PIMOL);
}
)

House_Button.addEventListener('mouseover', function () {
    if (Is_Side_Bar_Open) return;
    console.log("Select Product House");
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    p1_child[2].style.opacity = '0';
}
)
House_Button.addEventListener('mouseout', function () {
    if (Is_Side_Bar_Open) return;
    console.log("UnSelect Product Hose");
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';
}
)

House_Button.addEventListener('click', function () {
    let p1_child = House_Button.children;
    console.log("UnSelect Product Hose");
    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '1';
}
)



function NewSrc(currentSrc) {
    let scc = currentSrc.split('?')[0];
    let newSrc = `${scc}?reload=${new Date().getTime()}`;
    return newSrc;
}



function SuperFood_Select() {

    Product_Active(WolfiaX);
    Product_Active(NIMNIM);
    Product_Active(KHAOPLAWAAN);

}

function SuperFood_UnSelect() {

    Product_UnActive(WolfiaX);
    Product_UnActive(NIMNIM);
    Product_UnActive(KHAOPLAWAAN);

}


function Supplementary_Select() {

    Product_Active(WAFFENHUND);
    Product_Active(PIMOL);

}


function Supplementary_UnSelect() {

    let p1 = document.getElementById('WAFFENHUND');

    Product_UnActive(WAFFENHUND);
    Product_UnActive(PIMOL);

}



function Services_Select() {
    if (Is_Side_Bar_Open) return;
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    p1_child[2].style.opacity = '0';


}

function Services_UnSelect() {

    if (Is_Side_Bar_Open) return;
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';
}
