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