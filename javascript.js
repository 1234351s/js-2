let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Повідомлення №${counter}`);
    
    if (counter >= 5) {
        clearInterval(intervalId);
        console.log("Інтервал зупинено після 5 повідомлень.");
    }
}, 1000);