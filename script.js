const counters = document.querySelectorAll(".counter");

window.addEventListener("load",()=>{

    counters.forEach(counter =>{

        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";
        const prefix = counter.dataset.prefix || "";

        let count = 0;
        const duration = 1000; // 1 second duration
        const intervalTime = 10;
        const steps = duration / intervalTime;
        const increment = target / steps;

        const timer = setInterval(()=>{

            count += increment;

            if(count >= target){
                count = target // prevent from overshoot
                clearInterval(timer);
            }

            counter.innerText = `${prefix}${Math.ceil(count)}${suffix}`;

        }, intervalTime);
    });
})

const toggleBtn = document.querySelector("#toggleBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
        toggleBtn.classList.replace("fa-bars", "fa-circle-xmark");
    }

    else{
        toggleBtn.classList.replace("fa-circle-xmark", "fa-bars");
    }

});

  overlay.addEventListener("click",()=>{
  sidebar.classList.remove("active");
  toggleBtn.classList.replace("fa-circle-xmark", "fa-bars");

})