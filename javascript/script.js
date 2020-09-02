{
    console.log("Script loaded");
    //implementing functionality of slider

    let slider = tns({
        mode: 'gallery',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        navPosition: 'bottom-right',
        navContainer: '.slider-controller'
    });

    
    var customizedFunction = function (info, eventName) {
        // direct access to info object
        console.log(info.displayIndex);
        let active_slide = info.displayIndex;

        let active_btn = `<img class="slider-btn" src="assets/images/button-act.png" />`;
        let inactive_btn = `<img class="slider-btn" src="assets/images/button.png" />`;
        let ctr1 = document.getElementById('controller-1');
        let ctr2 = document.getElementById('controller-2');
        let ctr3 = document.getElementById('controller-3');

        switch (active_slide) {
            case 1: ctr1.innerHTML = active_btn;
                ctr2.innerHTML = inactive_btn;
                ctr3.innerHTML = inactive_btn;
                break;

            case 2: ctr1.innerHTML = inactive_btn;
                ctr2.innerHTML = active_btn;
                ctr3.innerHTML = inactive_btn;
                break;

            case 3: ctr1.innerHTML = inactive_btn;
                ctr2.innerHTML = inactive_btn;
                ctr3.innerHTML = active_btn;
                break;
        }
    }

    // bind function to event
    slider.events.on('indexChanged', customizedFunction);

}