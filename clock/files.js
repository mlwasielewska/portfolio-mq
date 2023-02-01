
secHand = document.querySelector('.sec'); 
hourHand = document.querySelector('.hour');
minHand = document.querySelector('.min');

// seconds
setInterval (second, 1000);
    function second() {
    let now = new Date();
    let sec = now.getSeconds();
    const secDeg= 360*sec/60; 
    secHand.style.transform=`rotate(${secDeg}deg)`;
   } 
   
// minutes
   // setInterval (minute, 1000);
   function countryMinute(countryTimeMinutes) {
      let now = new Date();
      let sec = now.getSeconds(); // potrzebujemy rowniez sekundy zeby wskazowka minutowa przesuwala sie co sekunde w stopniach pomiedzy JEDNA minuta a DRUGA
      let min = now.getMinutes() + countryTimeMinutes; // potrzebujemy minuty zeby wiedziec ktora jest obecnie minuta w zegarze zeby wyswietlic aktualna minute
      
      setInterval (hour(sec, min), 1000);
      function hour() {
      const minDeg= ((min*60)+sec)/10; // ruch minutowej wskazowki odbywac sie bedzie co sekunde wiec wszystkie liczby musimy sprowadzic do sekund stad minuta * 60. pozniej musimy dodac obecna wartosc sekundy z systemu, zeby wiedziec w jakiej pozycji ma byc minutnik pomiedzy JEDNA minuta a DRUGA. Na koniec dzielimy przez dziesiec, zeby uzyskac stopnie np. dla wskazowki minutowej pokazujacej 30 minut, bedzie to 180 stopnii tzn. (30min z systemu * 60) + 0 sekund bo np. tyle akurat, bylo w systemie to bedzie rowne 1800 sekund to podzielimy przez dziesiec i otrzymamy 180 stopnii, czyli wskazowka minutowa, bedzie na 30 minucie, dlatego dzielimy zawsze przez 10 w przypadku uzuskania stopni z sekund.
      minHand.style.transform=`rotate(${minDeg}deg)`;
      
   }}; 


// hour from the system time and added time from the country
function countryHour(countryTimeHours){
   let now = new Date(); // pobieramy cala date z systemu
   let min = now.getMinutes(); // filtrujemy tylko do potrzebnych minut
   let hou = now.getHours() + countryTimeHours; // filtrujemy tylko do potrzebnych godzin i dodakemy dodatkowe godziny zaleznie od kraju
   
   setInterval (hour(min, hou), 1000); // wywolujemy co sekunde funkcje hour (ponizej), ktora ma dwa parametry wczesniej wyliczone, czyli minuty i godziny z uwzglednionym krajem. Przekazujemy bo inaczej funcja nie bedzie miala do nich dostepu tzn uruchomi sie ale bez przekazanych wartosci wiec pokaze sie blad NaN.
   function hour() {
         const houDeg= ((hou*60)+min)/2;// jak wczesniej z minutami tylko tutaj musimy zamienic godziny na minuty, czyli dla godziny 6 tej mnozymy przez minuty * 60 i mamy minuty, pozniej dodajemy minuty obecne, zeby wiedziec, gdzie bedzie wskazowka pomiedzy jedna a druga minuta i dzielimy przez 2 poniewaz, (6 * 60) daje 360 + jezeli minut bylo zero na zegarze to 360 + 0 minut i musimy podzelic to podzielic przez 2, zeby uzyskac stopnie, czyli da nam to 180 stopni, czyli wskazowka bedzie na 6ce
      hourHand.style.transform=`rotate(${houDeg}deg)`;
   }};


let city = document.querySelector('#city');
let aa = document.querySelector('.watch');

city.addEventListener('change', (event) =>{
let optionValue = event.target.value;
const watch = document.querySelector('.watch');



switch (optionValue) {

   case 'l':
      aa.className = "watch lC";
      countryMinute(0);
      countryHour(0);
      break;

   case 'ny':
      aa.className = "watch nyC";
      
      countryMinute(0);
      countryHour(-5);
      break;

   case 'p':
      aa.className = "watch peC";
    
      countryMinute(0);
      countryHour(8);
      break;

   case 'nd':
      aa.className = "watch ndC";

      countryMinute(30);
      countryHour(5);
      break;

   case 's':
      aa.className = "watch sC";
        
      countryMinute(0);
      countryHour(11); 
      break;
      // nie umieszczalem default na koncu bo w tym przypadku nie ma mozliwosci wybrac cos innego niz z wyboru listy, wiec default nie jest potrzebny w tym switch'u
}});

countryMinute(0);
countryHour(0);