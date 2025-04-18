

function NewSrc(currentSrc) {
    let scc = currentSrc.split('?')[0];
    let newSrc = `${scc}?reload=${new Date().getTime()}`;
    return newSrc;
}


function SuperFood_Select() {
    let p1 = document.getElementById('WELLNESSX');
    let p2 = document.getElementById('NIMNIM');
    let p3 = document.getElementById('KHAOPLAWAAN');

    let p1_child = p1.children;
    let p2_child = p2.children;
    let p3_child = p3.children;

    p1_child[0].style.opacity = '0';
    p1_child[1].style.opacity = '1';
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

    let p1 = document.getElementById('WELLNESSX');
    let p2 = document.getElementById('NIMNIM');
    let p3 = document.getElementById('KHAOPLAWAAN');
    console.log("FFFFFFFFFFFFFFF");
    let p1_child = p1.children;
    let p2_child = p2.children;
    let p3_child = p3.children;

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