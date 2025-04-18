

function SideBarToggle() {

    console.log("Side Bar Toggle");
    const sidebar = document.getElementById('Sidebar');

    setTimeout(() => {
        sidebar.classList.toggle('open');
    }, 0.1);


}





document.addEventListener('click', function (event) {

    const sidebar = document.getElementById('Sidebar');
    if (!sidebar.contains(event.target)) {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            console.log('close side bar');
        }
    }
});







