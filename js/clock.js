(function(){ 


    console.info("Hello JS"); 
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock")
    digitalClock.appendChild(myNode)
    const myDate = new Date();
    console.dir(myDate);
    myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });


    })();