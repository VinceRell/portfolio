import $ from 'jquery';

 class MobileMenu {
    constructor() {
        this.toggleButton = $(".main-header__toggle-button");
        this.mainNav = $(".main-nav");
        this.navLinks = $(".main-nav__item a");
        this.sitebody = $("main");
        this.eventHandlers();
    }

    eventHandlers() { 
        this.toggleButton.click(() => {
            this.mainNav.toggleClass("main-nav--open");
        });

        this.navLinks.click(() => {
            this.closeMobileNav();
        });
        
        this.sitebody.click(() => {
            this.closeMobileNav();
        })
    }

    closeMobileNav(){
        this.mainNav.removeClass("main-nav--open");
    }
}

export default MobileMenu;