var t1m = gsap.timeline();

t1m.from("#page1 #image",{

    opacity:0,
    duration:1,
    stagger:0.3,

})

t1m.from("#textholder h1 span",{


    opacity:0,
    y:-10,
    duration:0.08,
    stagger:0.04,

})

t1m.fromTo("#built",{opacity:0},{opacity:1, duration:0.5,})