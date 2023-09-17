

let tl1 = gsap.timeline();

tl1.from(".navbar a",{
    // scale:0,
    duration:0.8,
    y:-40,
    opacity:0,
    
})

tl1.from(".hero__sect_container img",{
    scale:2,
    opacity:0,
})


gsap.from(".hero__sect_container h1",{
    opacity:0,
    x:-80,
    duration:1.5
},"atatime")

gsap.from(".hero__sect_container .input__section",{
    opacity:0,
    x:80,
    duration:1.5
},"atatime")


tl1.from(".cards",{
    y:100,
    duration:0.8,
    opacity:0
})



// colletion cards .....

let tl2 = gsap.timeline({
    scrollTrigger: {
         scroller : "body",
         trigger:".collection__section",
        //  markers:true,
         start: "top bottom",
         end: "top 20%",
         scrub:true

    } 
});

tl2.from(".collection__section ",{
    x:-70,
    opacity:0
    
})

tl2.from(".collection__cards .coll__card",{
    scale : 0,
    opacity:0,
    rotate: -30,
    
})

let tl3 = gsap.timeline({
    scrollTrigger : {
          trigger : ".get__app",
          scroller : "body",
        //   markers : true,
          start : "top 75% ",
          end: "top -10%",
         scrub:true
    }
})

tl3.from(".left",{
    opacity :0,
    xPercent : -100,
},"attime")

tl3.from(".right",{
    opacity :0,
    xPercent : 100,
},"attime")


let tl4 = gsap.timeline({
    scrollTrigger :{

    }
})

tl4.from({

})