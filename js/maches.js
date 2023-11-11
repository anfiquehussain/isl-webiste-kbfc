function showContent(contentId) {
    var contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function(div) {
        div.style.display = 'none';
    });


    var selectedDiv = document.getElementById(contentId);
    selectedDiv.style.display = 'block';


    var navLinks = document.querySelectorAll('.nav-items');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });


    var clickedLink = document.getElementById(contentId + '-link');
    clickedLink.classList.add('active');
}