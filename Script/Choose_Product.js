

let WolfiaX = document.getElementById('WolfiaX');
let NIMNIM = document.getElementById('NIMNIM');
let KHAOPLAWAAN = document.getElementById('KHAOPLAWAAN');
let WAFFENHUND = document.getElementById('WAFFENHUND');
let PIMOL = document.getElementById('PIMOL');
let House_Button = document.getElementById('House_Button');
let KLONGTOM = document.getElementById('KLONGTOM');

let Tmwta_Logo = document.getElementById('Tmwta_Logo');
let Amazing_Thailand = document.getElementById('Amazing_Thailand');




function Product_Active(Product) {
    if (Is_Side_Bar_Open) return;
    if (!Product) return;
    let allChild = Product.children;
    if (allChild[0]) allChild[0].style.opacity = '0';
    if (allChild[1]) allChild[1].style.opacity = '1';
  //  console.log("1111111111111111111111111111");
    if (allChild[2]) allChild[2].style.opacity = '1';
}

function Product_Active2(Product) {
    if (Is_Side_Bar_Open) return;
    if (!Product) return;
    let allChild = Product.children;
    if (allChild[0]) allChild[0].style.opacity = '0';
    if (allChild[1]) {
        allChild[1].src = NewSrc(allChild[1].src);
        allChild[1].style.opacity = '1';
    }
 //   console.log("22222222222222222222222");
    if (allChild[2]) allChild[2].style.opacity = '1';
    if (allChild[3]) allChild[3].style.opacity = '1';

}


function Product_UnActive(Product) {
    if (!Product) return;
    let allChild = Product.children;

    if (allChild[0]) allChild[0].style.opacity = '1';
    if (allChild[1]) allChild[1].style.opacity = '0';

    if (allChild[2]) allChild[2].style.opacity = '0';
    if (allChild[3]) allChild[3].style.opacity = '0';
}


Tmwta_Logo.addEventListener('mouseover', function () {
    console.log("Select Tmwta Logo");
    Product_Active(Tmwta_Logo);
}
)
Tmwta_Logo.addEventListener('mouseout', function () {
    console.log("UnSelect Tmwta Logo");
    Product_UnActive(Tmwta_Logo);
}
)

Amazing_Thailand.addEventListener('mouseover', function () {
    console.log("Select Tmwta Logo");
    Product_Active(Amazing_Thailand);
}
)
Amazing_Thailand.addEventListener('mouseout', function () {
    console.log("UnSelect Tmwta Logo");
    Product_UnActive(Amazing_Thailand);
}
)


let p1Click = false;
let p2Click = false;
let p3Click = false;
let p4Click = false;
let p5Click = false;
let p6Click = false;

function ClearProduct() {
    p1Click = false;
    p2Click = false;
    p3Click = false;
    p4Click = false;
    p5Click = false;
    let p6Click = false;

    Product_UnActive(WolfiaX);
    Product_UnActive(NIMNIM);
    Product_UnActive(KHAOPLAWAAN);
    Product_UnActive(WAFFENHUND);
    Product_UnActive(PIMOL);
    Product_UnActive(KLONGTOM);
}

WolfiaX.addEventListener('mouseover', function () {
    console.log("Select Product 1");
    ClearProduct();
    Product_Active(WolfiaX);

}
)
WolfiaX.addEventListener('mouseout', function () {
    if (!p1Click) {
        console.log("UnSelect Product 1");
        Product_UnActive(WolfiaX);
    }
    else {
        p1Click = false;
    }

}
)
WolfiaX.addEventListener('click', function () {
    console.log("Click Product 1");
    Product_Active(WolfiaX);
    p1Click = true;
}
)




NIMNIM.addEventListener('mouseover', function () {
    console.log("Select Product 2");
    ClearProduct();
    Product_Active(NIMNIM);
}
)
NIMNIM.addEventListener('mouseout', function () {
    if (!p2Click) {
        console.log("UnSelect Product 2");
        Product_UnActive(NIMNIM);
    }
    else {
        p2Click = false;
    }

}
)
NIMNIM.addEventListener('click', function () {
    console.log("Click Product 2");
    Product_Active(NIMNIM);
    p2Click = true;
}
)



KHAOPLAWAAN.addEventListener('mouseover', function () {
    console.log("Select Product 3");
    ClearProduct();
    Product_Active(KHAOPLAWAAN);
}
)
KHAOPLAWAAN.addEventListener('mouseout', function () {
    if (!p3Click) {
        console.log("UnSelect Product 3");
        Product_UnActive(KHAOPLAWAAN);
    }
    else {
        p3Click = false;
    }

}
)
KHAOPLAWAAN.addEventListener('click', function () {
    console.log("Click Product 3");
    Product_Active(KHAOPLAWAAN);
    p3Click = true;
}
)


WAFFENHUND.addEventListener('mouseover', function () {
    console.log("Select Product 4");
    ClearProduct();
    Product_Active(WAFFENHUND);
}
)
WAFFENHUND.addEventListener('mouseout', function () {
    if (!p4Click) {
        console.log("UnSelect Product 4");
        Product_UnActive(WAFFENHUND);
    }
    else {
        p4Click = false;
    }

}
)
WAFFENHUND.addEventListener('click', function () {
    console.log("Click Product 4");
    Product_Active(WAFFENHUND);
    p4Click = true;
}
)


PIMOL.addEventListener('mouseover', function () {
    console.log("Select Product 5");
    ClearProduct();
    Product_Active(PIMOL);
}
)
PIMOL.addEventListener('mouseout', function () {
    if (!p5Click) {
        console.log("UnSelect Product 5");
        Product_UnActive(PIMOL);
    }
    else {
        p5Click = false;
    }

}
)
PIMOL.addEventListener('click', function () {
    console.log("Click Product 5");
    Product_Active(PIMOL);
    p5Click = true;
}
)


KLONGTOM.addEventListener('mouseover', function () {
    console.log("Select Product 6");
    ClearProduct();
    Product_Active(KLONGTOM);
}
)


KLONGTOM.addEventListener('mouseout', function () {
    console.log("UnSelect Product 6");
    if (!p6Click) {
        console.log("UnSelect Product 6");
        Product_UnActive(KLONGTOM);
    }
    else {
        p6FClick = false;
    }
}
)

KLONGTOM.addEventListener('click', function () {
    console.log("Click Product 6");
    Product_Active(KLONGTOM);
    p6Click = true;
}
)


House_Button.addEventListener('mouseover', function () {
    if (Is_Side_Bar_Open) return;
    console.log("Select Product House");
    ClearProduct();
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

    Product_Active2(WolfiaX, 1);
    Product_Active2(NIMNIM, 1);
    Product_Active2(KHAOPLAWAAN, 1);

}

function SuperFood_UnSelect() {

    Product_UnActive(WolfiaX);
    Product_UnActive(NIMNIM);
    Product_UnActive(KHAOPLAWAAN);

}


function Supplementary_Select() {

    Product_Active2(WAFFENHUND, 1);
    Product_Active2(PIMOL, 1);
    Product_Active2(KLONGTOM, 1);
}


function Supplementary_UnSelect() {

    let p1 = document.getElementById('WAFFENHUND');

    Product_UnActive(WAFFENHUND);
    Product_UnActive(PIMOL);
    Product_UnActive(KLONGTOM)
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
