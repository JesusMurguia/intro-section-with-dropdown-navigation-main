window.onload = function () {
    let dropdownsdesktop = document.querySelectorAll('[data-dropdown-desktop]');
    dropdownsdesktop.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function (e) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.add('open');
        });
        dropdown.addEventListener('mouseout', function (e) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.remove('open');
        });
    });
    let dropdownsmobile = document.querySelectorAll('[data-dropdown-mobile]');
    dropdownsmobile.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('open');
        });
    });
    let closeMenu = document.querySelector('[data-close-menu]');
    let openMenu = document.querySelector('[data-open-menu]');
    let navMobile = document.querySelector('[data-nav-mobile]');
    let navMobileContent = document.querySelector('[data-nav-mobile-content]');
    closeMenu.addEventListener('click', function (e) {
        console.log('close');
        navMobile.classList.remove('open');
    });
    openMenu.addEventListener('click', function (e) {
        console.log('click');
        navMobileContent.classList.add('open');
        navMobile.classList.add('open');
    });
    let btns = document.querySelectorAll('.nav-link');
    btns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            navMobile.classList.remove('open');
        });
    });
}