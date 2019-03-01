import $ from 'jquery';

//navigation smooth scrolling

class SmoothScroll {
    constructor() {
        this.scrollLink = $(".scroll");
        this.pageBody = $("body,html");
        this.eventHandlers();
    }

    eventHandlers() {
        this.scrollLink.click(e => {
            e.preventDefault();
            this.pageBody.animate({
                scrollTop: ( $(e.target.hash).offset().top - 10)
            }, 1600);
        })
    }

}

export default SmoothScroll;