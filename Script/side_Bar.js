






function SideBarToggle() {

    console.log("Side Bar Toggle");
    const sidebar = document.getElementById('Sidebar');

    setTimeout(() => {
        sidebar.classList.toggle('open');

        let houseBtn = document.getElementById('House_Button')
        let allChild = houseBtn.children;

        allChild[0].style.opacity = '0';
        allChild[1].style.opacity = '0';
        allChild[2].style.opacity = '1';

    }, 0.1);


}





document.addEventListener('click', function (event) {

    const sidebar = document.getElementById('Sidebar');
    if (!sidebar.contains(event.target)) {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            console.log('close side bar');

            let houseBtn = document.getElementById('House_Button')
            let allChild = houseBtn.children;


            allChild[0].style.opacity = '1';
            allChild[1].style.opacity = '0';
            allChild[2].style.opacity = '0';

        }
    }
});







