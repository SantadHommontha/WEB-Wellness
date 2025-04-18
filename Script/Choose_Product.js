

function NewSrc(currentSrc) {
    let scc = currentSrc.split('?')[0];
    let newSrc = `${scc}?reload=${new Date().getTime()}`;
    return newSrc;
}

let oldP1;
let oldP2;
let oldP3;

function SuperFood_Select() {
    let p1 = document.getElementById('WolfiaX');
    let p2 = document.getElementById('NIMNIM');
    let p3 = document.getElementById('KHAOPLAWAAN');

    let p1_child = p1.children;
    let p2_child = p2.children;
    let p3_child = p3.children;

    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    oldP1 = p1_child[1].src;
    p1_child[1].src = NewSrc(p1_child[1].src);
    p1_child[2].style.opacity = '1';

    p2_child[0].style.opacity = '0';
    p2_child[1].style.opacity = '1';
    p2_child[1].src = NewSrc(p2_child[1].src);
    p2_child[2].style.opacity = '1';

    p3_child[0].style.opacity = '0';
    p3_child[1].style.opacity = '1';
    p3_child[1].src = NewSrc(p3_child[1].src);
    p3_child[2].style.opacity = '1';

}

function SuperFood_UnSelect() {

    let p1 = document.getElementById('WolfiaX');
    let p2 = document.getElementById('NIMNIM');
    let p3 = document.getElementById('KHAOPLAWAAN');

    let p1_child = p1.children;
    let p2_child = p2.children;
    let p3_child = p3.children;
    p1_child[1].src = oldP1;
    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';

    p2_child[0].style.opacity = '1';
    p2_child[1].style.opacity = '0';
    p2_child[2].style.opacity = '0';

    p3_child[0].style.opacity = '1';
    p3_child[1].style.opacity = '0';
    p3_child[2].style.opacity = '0';

}


function Supplementary_Select() {
    let p1 = document.getElementById('WAFFENHUND');
    let p2 = document.getElementById('PIMOL');

    let p1_child = p1.children;
    let p2_child = p2.children;

    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    p1_child[1].src = NewSrc(p1_child[1].src);
    p1_child[2].style.opacity = '1';

    p2_child[0].style.opacity = '0';
    p2_child[1].style.opacity = '1';
    p2_child[1].src = NewSrc(p2_child[1].src);
    p2_child[2].style.opacity = '1';


}


function Supplementary_UnSelect() {

    let p1 = document.getElementById('WAFFENHUND');
    let p2 = document.getElementById('PIMOL');

    let p1_child = p1.children;
    let p2_child = p2.children;


    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';

    p2_child[0].style.opacity = '1';
    p2_child[1].style.opacity = '0';
    p2_child[2].style.opacity = '0';



}



function Services_Select() {
    let p1 = document.getElementById('House_Button');

    let p1_child = p1.children;

    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    p1_child[2].style.opacity = '0';


}

function Services_UnSelect() {
    let p1 = document.getElementById('House_Button');

    let p1_child = p1.children;


    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';


}



let WolfiaX = document.getElementById('WolfiaX')
let NIMNIM = document.getElementById('NIMNIM')
let KHAOPLAWAAN = document.getElementById('KHAOPLAWAAN')
let WAFFENHUND = document.getElementById('WAFFENHUND')
let PIMOL = document.getElementById('PIMOL')
let House_Button = document.getElementById('House_Button')

function Product1_Active(Product) {
    let p1_child = Product.children;
    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    p1_child[2].style.opacity = '1';
}

function Product1_UnActive(Product) {
    let p1_child = Product.children;
    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';
}



WolfiaX.addEventListener('mouseover', function () {
    console.log("Select Product 1");
    Product1_Active(WolfiaX);
}
)
WolfiaX.addEventListener('mouseout', function () {
    console.log("UnSelect Product 1");
    Product1_UnActive(WolfiaX);
}
)



NIMNIM.addEventListener('mouseover', function () {
    console.log("Select Product 2");
    Product1_Active(NIMNIM);
}
)
NIMNIM.addEventListener('mouseout', function () {
    console.log("UnSelect Product 2");
    Product1_UnActive(NIMNIM);
}
)


KHAOPLAWAAN.addEventListener('mouseover', function () {
    console.log("Select Product 3");
    Product1_Active(KHAOPLAWAAN);
}
)
KHAOPLAWAAN.addEventListener('mouseout', function () {
    console.log("UnSelect Product 3");
    Product1_UnActive(KHAOPLAWAAN);
}
)

WAFFENHUND.addEventListener('mouseover', function () {
    console.log("Select Product 4");
    Product1_Active(WAFFENHUND);
}
)
WAFFENHUND.addEventListener('mouseout', function () {
    console.log("UnSelect Product 4");
    Product1_UnActive(WAFFENHUND);
}
)

PIMOL.addEventListener('mouseover', function () {
    console.log("Select Product 5");
    Product1_Active(PIMOL);
}
)
PIMOL.addEventListener('mouseout', function () {
    console.log("UnSelect Product 5");
    Product1_UnActive(PIMOL);
}
)

House_Button.addEventListener('mouseover', function () {
    console.log("Select Product House");
    if (Is_Side_Bar_Open) return;
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
    p1_child[2].style.opacity = '0';
}
)
House_Button.addEventListener('mouseout', function () {
    console.log("UnSelect Product Hose");
    if (Is_Side_Bar_Open) return;
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '1';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '0';
}
)

House_Button.addEventListener('click', function () {
    console.log("UnSelect Product Hose");
    let p1_child = House_Button.children;
    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '0';
    p1_child[2].style.opacity = '1';
}
)