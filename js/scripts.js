const hamburger=document.querySelector(".hamburger");
const linkContainer=document.querySelector(".link_container");
const links=document.querySelectorAll(".link_container li");hamburger.addEventListener("click",()=>{linkContainer.classList.toggle("open");
links.forEach(link=>{link.classList.toggle("fade");});});


document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            this.value = 'View Less';
        } else {
            content.style.display = 'none';
            this.value = 'View More';
        }
    });
});
