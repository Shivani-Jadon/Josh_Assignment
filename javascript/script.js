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
    let img_modal = document.getElementById("image-Modal");
    let image_frame = document.getElementById("modal-image");

    // Get the thumbnails that opens the image-modal
    let image_thumbnails = document.getElementsByClassName("image-thumbnail");

    // Get the <span> element that closes the modal
    let close_btns_list = document.getElementsByClassName("close-image");

    // When the user clicks on the thumnail, open the modal
    for (let img_thumbnail of image_thumbnails) {

        img_thumbnail.onclick = function () {
            let thumb_no = img_thumbnail.getAttribute('thumb');
            image_frame.src = pop_images_src[thumb_no];
            img_modal.style.display = "flex";
            current_image = thumb_no;
            console.log(current_image);
        }
    }    

    let next_btn = document.getElementsByClassName('next-image')[0];
    // When the user clicks on next-image btn
    next_btn.onclick = function (event) {
        if (current_image < img_count - 1) {
            ++current_image;
            image_frame.src = pop_images_src[current_image];
        } else {
            image_frame.src = pop_images_src[0];
            current_image = 0;
        }
    }

    let prev_btn = document.getElementsByClassName('prev-image')[0];
    // When the user clicks on prev-image btn
    prev_btn.onclick = function (event) {
        if (current_image > 0) {
            --current_image;
            image_frame.src = pop_images_src[current_image];
        } else {
            image_frame.src = pop_images_src[img_count - 1];
            current_image = img_count-1;
        }
    }
    // When the user clicks on <span> (x), close the modal
    for (let close_btn of close_btns_list) {
        close_btn.onclick = function () {
            img_modal.style.display = "none";
        }
    }




     //  Implementing videos pop ups through modals
    let video_srcs = [
        "https://www.youtube.com/embed/07d2dXHYb94",
        "https://www.youtube.com/embed/8AGgbIQyqR8",
        "https://www.youtube.com/embed/vPuRBiBCxyk",
        "https://www.youtube.com/embed/DtujJRFuIi0"
    ];

    let video_count = video_srcs.length;
    let current_video = 0;

    // Get the modal
    let video_modal = document.getElementById("video-Modal");
    // get the iframe element
    let video_frame = document.getElementById("video-frame");

    // Get the thumbnails that opens the image-modal
    let video_thumbnails = document.getElementsByClassName("video-thumbnails");

    // When the user clicks on the video thumnail, open the modal
    for (let video_thumb of video_thumbnails) {

        video_thumb.onclick = function () {
            let thumb_no = video_thumb.getAttribute('thumb');
            video_frame.src = video_srcs[thumb_no];
            video_modal.style.display = "flex";
            current_video = thumb_no;

        }
    }    

    let next_btn_vid = document.getElementsByClassName('next-video')[0];
    // When the user clicks on next-image btn
    next_btn_vid.onclick = function (event) {
        if (current_video < video_count - 1) {
            ++current_video;
            video_frame.src = video_srcs[current_video];
        } else {
            video_frame.src = video_srcs[0];
            current_video = 0;
        }
    }

    let prev_btn_vid = document.getElementsByClassName('prev-video')[0];
    // When the user clicks on prev-image btn
    prev_btn_vid.onclick = function (event) {
        if (current_video > 0) {
            --current_video;
            video_frame.src = video_srcs[current_video];
        } else {
            video_frame.src = video_srcs[video_count - 1];
            current_video = video_count - 1;
        }
    }

    let close_btns = document.getElementsByClassName('close-video');
    // When the user clicks on <span> (x), close the modal
    for (let close_btn of close_btns) {
        close_btn.onclick = function () {
            video_modal.style.display = "none";
        }
    }

}