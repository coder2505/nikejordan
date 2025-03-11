let tl = gsap.timeline();
tl.to("#quote",{
    transform:"translateX(-350%)",
    ease:"none",
    scrollTrigger:{
        trigger:"#quote",
        // scroller:"body",
        // markers:true,
        start:"top 0%",
        end: "top -300%",
        scrub:2,
        pin: true
    }
})