

let WolfiaX = document.getElementById('WolfiaX');
let NIMNIM = document.getElementById('NIMNIM');
let KHAOPLAWAAN = document.getElementById('KHAOPLAWAAN');
let WAFFENHUND = document.getElementById('WAFFENHUND');
let PIMOL = document.getElementById('PIMOL');
let House_Button = document.getElementById('House_Button');
let ProductX = document.getElementById('ProductX');

let Tmwta_Logo = document.getElementById('Tmwta_Logo');
let Amazing_Thailand = document.getElementById('Amazing_Thailand');




function Product_Active(Product) {
    if (Is_Side_Bar_Open) return;
    if (!Product) return;
    let allChild = Product.children;
    if (allChild[0]) allChild[0].style.opacity = '0';
    if (allChild[1]) allChild[1].style.opacity = '1';

    if (allChild[2]) allChild[2].style.opacity = '1';
}

function Product_UnActive(Product) {
    let allChild = Product.children;
    if (!Product) return;
    if (allChild[0]) allChild[0].style.opacity = '1';
    if (allChild[1]) allChild[1].style.opacity = '0';

    if (allChild[2]) allChild[2].style.opacity = '0';
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


function ClearProduct() {
    p1Click = false;
    p2Click = false;
    p3Click = false;
    p4Click = false;
    p5Click = false;

    Product_UnActive(WolfiaX);
    Product_UnActive(NIMNIM);
    Product_UnActive(KHAOPLAWAAN);
    Product_UnActive(WAFFENHUND);
    Product_UnActive(PIMOL);
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


// ProductX.addEventListener('mouseover', function () {
//     console.log("Select Product 6");
//     Product_Active(ProductX);
// }
// )


// ProductX.addEventListener('mouseout', function () {
//     console.log("UnSelect Product 6");
//     Product_UnActive(ProductX);
// }
// )

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
    Product_Active(ProductX);
}


function Supplementary_UnSelect() {

    let p1 = document.getElementById('WAFFENHUND');

    Product_UnActive(WAFFENHUND);
    Product_UnActive(PIMOL);
    Product_UnActive(ProductX)
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
