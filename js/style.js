var nav_links = document.getElementsByClassName('nav-link scroll');
var nav_link_active;

for(i=0; i<nav_links.length; i++){
    // console.log(nav_links[i].innerHTML);
    if(nav_links[i].classList.contains('active')){
        nav_link_active = nav_links[i];
    }
    nav_links[i].addEventListener('click', function(){
        this.classList.add('active');
        nav_link_active.classList.remove('active');
        nav_link_active = this;
    });
}
