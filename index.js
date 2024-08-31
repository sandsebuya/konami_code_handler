(()=>{
    const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"]
    const tempList = []

    let konamiHandler = (event)=>{
        let pushedIndex = tempList.push(event.key) - 1
        console.log(tempList);
        
        if(event.key !== konamiCode[pushedIndex]){
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

