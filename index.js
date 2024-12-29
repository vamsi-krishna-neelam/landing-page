var thumbnails = document.querySelectorAll('.thumbnail img');
var modal = document.querySelector('.modal');
var modalImg = document.getElementById('modal-img');
var captionText = document.getElementById('caption');
var closeBtn = document.querySelector('.close');

thumbnails.forEach(function(thumbnail) {
    thumbnail.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};
