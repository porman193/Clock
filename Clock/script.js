function setDate(){
   const date = new Date();
   const seconds = date.getSeconds();
   const minutes = date.getMinutes();
   const hours = date.getHours();
   if(seconds === 0){
        hand.style.transition = 'none';
        secondHand.style.transform = `rotate(${90}deg)`
   }else{
    let secondsDeg = (seconds * 6)+90;
    let minutesDeg = (minutes *6)+90;
    let hoursDeg = ((hours/12)*360)+90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minutedHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
   }
   console.log(seconds);
}  

setInterval(setDate,1000);
const secondHand = document.querySelector('.secHand');
const minutedHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');
const hand = document.querySelector('.hand');
