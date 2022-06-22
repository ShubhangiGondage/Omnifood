console.log("hello there!");

// GET THE CURRENT YEAR
const yearEl=document.querySelector('.year');
yearEl.textContent=new Date().getFullYear();

// MOBILE NAVIGATION WORK

const btnNavEl=document.querySelector('.btn-mobile-nav');
const headerNavEl=document.querySelector('.header');
btnNavEl.addEventListener("click",function(){
    headerNavEl.classList.toggle('nav-open');
})

// SCROLLING BEHAVIOR
const allLinks=document.querySelectorAll("a:link");
allLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href=link.getAttribute("href");
        if(href==="#"){
            window.scrollTo({
                top:0,
                behavior:"smooth",
            });
        }

        if(href!=="#" && href.startsWith("#")){
            const sectionEl=document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior:"smooth"
            })
        }
        // CLOSE THE NAVIGATION
        if(link.classList.contains("main-nav-link")){
            headerNavEl.classList.toggle('nav-open');
        }

    })
});

// STICKY NAVIGATION

const sectionHeroEl=document.querySelector('.section-hero');
const obs=new IntersectionObserver(
    function (entries) {
        const ent=entries[0];
        if(ent.isIntersecting===false){
            document.body.classList.add("sticky");
        }
        if(ent.isIntersecting===true){
            document.body.classList.remove("sticky");
        }
    },
    {
        root:null,
        threshold:0,
        rootMargin:'-80px'
    }
)
obs.observe(sectionHeroEl);
