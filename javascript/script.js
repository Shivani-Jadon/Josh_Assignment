{
    console.log("Script loaded");
    //implementing functionality of slider

    var slider = tns({
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
        var active_slide = info.displayIndex;

        var active_btn = `<img class="slider-btn" src="assets/images/button-act.png" />`;
        var inactive_btn = `<img class="slider-btn" src="assets/images/button.png" />`;
        var ctr1 = document.getElementById('controller-1');
        var ctr2 = document.getElementById('controller-2');
        var ctr3 = document.getElementById('controller-3');

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
    var pop_images_src = [
        "assets/images/full-photo.png",
        "assets/images/lifestyle_thmb_img01.png",
        "assets/images/lifestyle_thmb_img02.png",
        "assets/images/lifestyle_thmb_img03.png"
    ];
    var img_count = pop_images_src.length;

    var current_image = 0;

    // Get the modal
    var img_modal = document.getElementById("image-Modal");
    var image_frame = document.getElementById("modal-image");

    // Get the thumbnails that opens the image-modal
    var image_thumbnails = document.getElementsByClassName("image-thumbnail");

    // Get the <span> element that closes the modal
    var close_btns_list = document.getElementsByClassName("close-image");

    // When the user clicks on the thumnail, open the modal
    for (var img_thumbnail of image_thumbnails) {

        img_thumbnail.onclick = function () {
            var thumb_no = img_thumbnail.getAttribute('thumb');
            image_frame.src = pop_images_src[thumb_no];
            img_modal.style.display = "flex";
            current_image = thumb_no;
            console.log(current_image);
        }
    }    

    var next_btn = document.getElementsByClassName('next-image')[0];
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

    var prev_btn = document.getElementsByClassName('prev-image')[0];
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
    for (var close_btn of close_btns_list) {
        close_btn.onclick = function () {
            img_modal.style.display = "none";
        }
    }




     //  Implementing videos pop ups through modals
    var video_srcs = [
        "https://www.youtube.com/embed/07d2dXHYb94",
        "https://www.youtube.com/embed/8AGgbIQyqR8",
        "https://www.youtube.com/embed/vPuRBiBCxyk",
        "https://www.youtube.com/embed/DtujJRFuIi0"
    ];

    var video_count = video_srcs.length;
    var current_video = 0;

    // Get the modal
    var video_modal = document.getElementById("video-Modal");
    // get the iframe element
    var video_frame = document.getElementById("video-frame");

    // Get the thumbnails that opens the image-modal
    var video_thumbnails = document.getElementsByClassName("video-thumbnails");

    // When the user clicks on the video thumnail, open the modal
    for (var video_thumb of video_thumbnails) {

        video_thumb.onclick = function () {
            var thumb_no = video_thumb.getAttribute('thumb');
            video_frame.src = video_srcs[thumb_no];
            video_modal.style.display = "flex";
            current_video = thumb_no;

        }
    }    

    var next_btn_vid = document.getElementsByClassName('next-video')[0];
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

    var prev_btn_vid = document.getElementsByClassName('prev-video')[0];
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

    var close_btns = document.getElementsByClassName('close-video');
    // When the user clicks on <span> (x), close the modal
    for (var close_btn of close_btns) {
        close_btn.onclick = function () {
            video_modal.style.display = "none";
        }
    }

}