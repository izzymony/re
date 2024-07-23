function showImage(imageSrc) {
    var displayedImage = document.getElementById('displayedImage');
    displayedImage.src = imageSrc;
    displayedImage.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-items');
    const menuItems = document.querySelector('.men');

    toggleButton.addEventListener('click', function() {
        menuItems.classList.toggle('expanded');
    });
});
