function updateTime() {
    const t = new Date();

    if (t.getMinutes() < 10) {
        let time = t.getHours() + ":0" + t.getMinutes(); 
        document.getElementById("time").innerHTML = time;
    }
    else {
        let time = t.getHours() + ":" + t.getMinutes();  
        document.getElementById("time").innerHTML = time;
    }
    
    setTimeout(updateTime, 1000); 
}

updateTime(); 

function updateDate() {
    const d = new Date();
    let date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    document.getElementById("date").innerHTML = date;

    setTimeout(updateTime, 1000); 
}

updateDate();