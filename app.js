


let randomIndexOne;
let randomIndexTwo;
let randomIndexThree;


let container = document.getElementById('sectionOne');
let firstImage = document.getElementById('imageOne');
let secondImage = document.getElementById('imageTwo');
let thirdImage = document.getElementById('imageThree');


let selectionTimes = 25;
let numberOfClicks = 0;

let arrOfNames = [];
let arrOfVotes = [];


function images (productName, imagePath){
    this.productName = productName;
    this.imagePath = imagePath;
    this.shown = 0;
    this.votes = 0;

    arrOfObjects.push(this);

}

arrOfObjects = [];



new images ('bag', 'img/bag.jpg');
new images  ('banana', 'img/banana.jpg');
new images  ('bathroom', 'img/bathroom.jpg');
new images  ('boots', 'img/boots.jpg');
new images  ('breakfast', 'img/breakfast.jpg');
new images  ('bubblegum', 'img/bubblegum.jpg');
new images ('chair', 'img/chair.jpg');
new images  ('cthulhu', 'img/cthulhu.jpg');
new images  ('dog-duck', 'img/dog-duck.jpg');
new images  ('dragon', 'img/dragon.jpg');
new images  ('pen', 'img/pen.jpg');
new images  ('pet-sweep', 'img/pet-sweep.jpg');
new images  ('scissors', 'img/scissors.jpg');
new images  ('shark', 'img/shark.jpg');
new images  ('sweep', 'img/sweep.png');
new images  ('tauntaun', 'img/tauntaun.jpg');
new images  ('unicorn', 'img/unicorn.jpg');
new images  ('usb', 'img/usb.gif');
new images  ('water-can', 'img/water-can.jpg');
new images ('wine-glass', 'img/wine-glass.jpg');



function randomNumber (){

    let randomValue = Math.floor(arrOfObjects.length * Math.random());

    return randomValue;

};

    let previousShownItems = [];


function generateAndDisplay (){
    randomIndexOne = randomNumber();
    randomIndexTwo = randomNumber();
    randomIndexThree = randomNumber();

    while ( randomIndexOne === randomIndexTwo || randomIndexOne === randomIndexThree || randomIndexTwo === randomIndexThree || previousShownItems.includes(randomIndexOne) || previousShownItems.includes(randomIndexTwo) || previousShownItems.includes(randomIndexThree) ){
        randomIndexOne = randomNumber();
        randomIndexTwo = randomNumber();
        randomIndexThree = randomNumber();
    } 



    previousShownItems = [randomIndexOne, randomIndexTwo, randomIndexThree];

    firstImage.src = arrOfObjects[randomIndexOne].imagePath;
    arrOfObjects[randomIndexOne].shown++;

    secondImage.setAttribute('src', arrOfObjects[randomIndexTwo].imagePath);
    arrOfObjects[randomIndexTwo].shown++;
    
    thirdImage.setAttribute('src', arrOfObjects[randomIndexThree].imagePath);
    arrOfObjects[randomIndexThree].shown++;


}

generateAndDisplay();

container.addEventListener('click', clicking);
let buttonElement;


function clicking(event){

    numberOfClicks++;

    if(numberOfClicks <= selectionTimes){

        if(event.target.id === 'imageOne'){
            arrOfObjects[randomIndexOne].votes++;
        }else if (event.target.id === 'imageTwo'){
            arrOfObjects[randomIndexTwo].votes++;
        }else if (event.target.id === 'imageThree'){
            arrOfObjects[randomIndexThree].votes++;
        }else {
            numberOfClicks--;
            return
        }
        

       

        generateAndDisplay();


        


    }else {
        buttonElement = document.getElementById('btn');
        buttonElement.addEventListener('click', showItems);
        section.removeEventListener('click', clicking);
    } 

   
}


let array =  [];

function showItems(){
showList();
showChart();
buttonElement.removeEventListener('click', showItems);

}

let arrOfShownItems = [];

function showList(){
    let unOrderedList = document.getElementById('list');
    for(let i = 0; i < arrOfObjects.length; i++){
        arrOfVotes.push(arrOfObjects[i].votes);

        arrOfShownItems.push(arrOfObjects[i].shown);
        arrOfNames.push(arrOfObjects[i].productName);


        let li =document.createElement('li');
        unOrderedList.appendChild(li);
        li.textContent = `${arrOfObjects[i].productName} has ${arrOfObjects[i].votes} votes and was shown ${arrOfObjects[i].shown}`;

    }
}

function showChart (){

    let ctx = document.getElementById('barChart')
let barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfNames,
        datasets: [{
            label: 'Number of Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgb(230, 98, 212);',
            ],
            borderWidth: 1
        },{
          label: 'Times Shown',
          data: arrOfShownItems,
          backgroundColor: [
              'rgb(70, 21, 63)',
          ],
          borderWidth: 1
      }
      ]
    },
});
}






