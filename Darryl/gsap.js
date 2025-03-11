let t1 = gsap.timeline();
t1.to('.shoe', {
    y: '-100vh',scrollTrigger: {
        scroller: 'body',
        trigger: '.shoe',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false,
    }
})
t1.from('.jump', {
    x: '-150vh',scrollTrigger: {
        scroller: 'body',
        trigger: '.shoe',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        markers: false,
    }
})
t1.from('.man', {
    x: '150vh',scrollTrigger: {
        scroller: 'body',
        trigger: '.shoe',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        markers: false,
    }
})
gsap.from(".grid-hero h1",{

})
gsap.from(".card1",{duration : 1, x : "-100vw", ease : 'powe3.out',opacity: 0}, 1)
gsap.from(".card2",{duration : 1, delay:1, y : "100vw", ease : 'powe3.out', opacity: 0}, 1)
gsap.from(".card3",{duration : 1, x : "100vw", ease : 'powe3.out',opacity: 0}, 1)