(function(){ 


    console.info("Hello JS"); 
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock")
    digitalClock.appendChild(myNode)
    console.dir(myDate);

    const updateTime = () => {
        console.info("tick tock");
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        
    };
    setInterval(updateTime, 1000);
    updateTime();


    })();