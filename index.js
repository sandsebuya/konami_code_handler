(()=>{
    const konamiCode = [38,38,40,40,37,39,37,39,66,65,13]
    const tempList = []

    let konamiHandler = (event)=>{
        let pushedIndex = tempList.push(event.keyCode) - 1
        console.log(event);
        
        if(event.keyCode !== konamiCode[pushedIndex]){
            tempList.length=0
        }
    
        if(tempList.length === 11){
            alert("konamicode")
            //SOME KONAMI LOGIC
            tempList.length=0
        }
    
    }

    const konamiEvent=document.addEventListener("keyup",konamiHandler)  
})()

