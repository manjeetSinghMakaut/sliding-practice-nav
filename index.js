document.addEventListener("DOMContentLoaded", function(){
    const navbarlinks =document.querySelectorAll('nav ul li a');

    navbarlinks.forEach(link => {
        link.addEventListener('click',function(e){
            e.preventDefault();

            const targetid =this.getAttribute('href');

            const targetsection =document.querySelector(targetid)
            
            targetsection.scrollIntoView({
                behavior:"smooth"
            });

        });
    });


});