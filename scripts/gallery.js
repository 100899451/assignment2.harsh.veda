$(document).ready(function() {
    // Sample gallery data (replace with your actual data)
    var galleryData = [
        { image: "./content/img_1.png", caption: "Image 1" },
        { image: "./content/img_2.png", caption: "Image 2" },
        { image: "./content/img_3.png", caption: "Image 3" }
    ];

    // Function to render gallery
    function renderGallery(data) {
        var galleryContainer = $("#mainContent");
        var galleryHTML = "";

        data.forEach(function(item, index) {
            galleryHTML += '<div class="gallery-item">';
            galleryHTML += '<a href="' + item.image + '" data-lightbox="gallery" data-title="' + item.caption + '">';
            galleryHTML += '<img src="' + item.image + '" alt="' + item.caption + '">';
            galleryHTML += '</a>';
            galleryHTML += '<div class="caption">' + item.caption + '</div>';
            galleryHTML += '</div>';
        });

        galleryContainer.html(galleryHTML);
    }

    // Render the gallery when the page loads
    renderGallery(galleryData);
});
