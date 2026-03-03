function copyIP() {
    // כאן תכניס את ה-IP האמיתי של השרת שלך
    const serverIP = "connect play.blackzone.co.il"; 
    
    navigator.clipboard.writeText(serverIP).then(() => {
        const copyText = document.getElementById("copy-text");
        copyText.innerText = "IP Copied!";
        copyText.style.color = "#00ff00"; // משנה לירוק להמחשה
        
        // מחזיר את הטקסט לקדמותו אחרי 3 שניות
        setTimeout(() => {
            copyText.innerText = "Click to Copy IP";
            copyText.style.color = "#00ffff";
        }, 3000);
    });
}
