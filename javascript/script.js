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




    //  Implementing images pop ups through modals

    //list of images for op ups
    let pop_images_src = [
        "assets/images/full-photo.png",
        "assets/images/lifestyle_thmb_img01.png",
        "assets/images/lifestyle_thmb_img02.png",
        "assets/images/lifestyle_thmb_img03.png"
    ];
    let img_count = pop_images_src.length;

    let current_image = 0;

    // Get the modal
    let modal = document.getElementById("image-Modal");
    let image_modal = document.getElementById("modal-image");

    // Get the button that opens the modal
    let image_thumbnails = document.getElementsByClassName("image-thumbnail");

    // Get the <span> element that closes the modal
    let close_btns_list = document.getElementsByClassName("close");

    // When the user clicks on the thumnail, open the modal
    for (let img_thumbnail of image_thumbnails) {

        img_thumbnail.onclick = function () {
            let thumb_no = img_thumbnail.getAttribute('thumb');
            image_modal.src = pop_images_src[thumb_no];
            modal.style.display = "flex";
            current_image = thumb_no;
            console.log(current_image);
        }
    }    

    let next_btn = document.getElementsByClassName('next-image')[0];
    // When the user clicks on next-image btn
    next_btn.onclick = function (event) {
        if (current_image < img_count - 1) {
            ++current_image;
            image_modal.src = pop_images_src[current_image];
        } else {
            image_modal.src = pop_images_src[0];
            current_image = 0;
        }
    }

    let prev_btn = document.getElementsByClassName('prev-image')[0];
    // When the user clicks on prev-image btn
    prev_btn.onclick = function (event) {
        if (current_image > 0) {
            --current_image;
            image_modal.src = pop_images_src[current_image];
        } else {
            image_modal.src = pop_images_src[img_count - 1];
            current_image = img_count-1;
        }
    }

    // When the user clicks on <span> (x), close the modal
    for (let close_btn of close_btns_list) {
        close_btn.onclick = function () {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}