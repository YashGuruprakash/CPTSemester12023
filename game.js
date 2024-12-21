
let answerImage = [];
answerImage[0] = "Images/_MG_4367.jpg";
answerImage[1] = "Images/_MG_4519.jpg";
answerImage[2] = "Images/_MG_4653.jpg";
answerImage[3] = "Images/_MG_4655.jpg";
answerImage[4] = "Images/_MG_4656.jpg";
answerImage[5] = "Images/_MG_4658-Enhanced-NR.jpg";	
answerImage[6] = "Images/_MG_4664-Enhanced-NR.jpg";
answerImage[7] = "Images/_MG_4998.jpg";
answerImage[8] = "Images/_MG_5808-Enhanced-NR.jpg";
answerImage[9] = "Images/_MG_6911.jpg";
answerImage[10] = "Images/_MG_6914.jpg";
answerImage[11] = "Images/_MG_6935.jpg";
answerImage[12] = "Images/_MG_7404.jpg";
answerImage[13] = "Images/_MG_7493.jpg";
answerImage[14] = "Images/_MG_7506.jpg";
answerImage[15] = "Images/_MG_7606.jpg";
answerImage[16] = "Images/_MG_7661.jpg";
answerImage[17] = "Images/_MG_7707.jpg";	
answerImage[18] = "Images/_MG_7770.jpg";	
answerImage[19] = "Images/_MG_7774.jpg";
answerImage[20] = "Images/_MG_7874.jpg";
answerImage[21] = "Images/_MG_7879.jpg";
answerImage[22] = "Images/_MG_7897.jpg";
answerImage[23] = "Images/_MG_7929.jpg";
answerImage[24] = "Images/_MG_7931.jpg";
answerImage[25] = "Images/_MG_7933.jpg";
answerImage[26] = "Images/_MG_7953.jpg";
answerImage[27] = "Images/_MG_8003.jpg";
answerImage[28] = "Images/_MG_8011.jpg";
answerImage[29] = "Images/_MG_8021.jpg";
answerImage[30] = "Images/_MG_8031.jpg";
answerImage[31] = "Images/DSC_0441.jpg";
answerImage[32] = "Images/DSC_0448.jpg";
answerImage[33] = "Images/DSC_0455.jpg";
answerImage[34] = "Images/DSC_0459.jpg";
answerImage[35] = "Images/DSC_0467.jpg";
answerImage[36] = "Images/DSC_0478.jpg";
answerImage[37] = "Images/DSC_0487.jpg";
answerImage[38] = "Images/DSC_0490.jpg";
answerImage[39] = "Images/DSC_0496.jpg";
answerImage[40] = "Images/DSC_0510.jpg";
answerImage[41] = "Images/DSC_0528.jpg";
answerImage[42] = "Images/DSC_0557.jpg";
answerImage[43] = "Images/IMG_3976.jpg";
answerImage[44] = "Images/DSC_0021.jpg";

let answerText = []; //All the values within answerText correlate with those of AnswerImage
answerText[0] = "f/1.8 1/3200 iso-50";
answerText[1] = "f/1.8 1/1250 iso-50";
answerText[2] = "f/1.8 1/400 iso-100";
answerText[3] = "f/1.8 1/800 iso-100";
answerText[4] = "f/1.8 1/3200 iso-100";
answerText[5] = "f/1.8 1/1600 iso-100";
answerText[6] = "f/1.8 1/1000 iso-100";
answerText[7] = "f/1.8 1/5000 iso-100";
answerText[8] = "f/4.5 1/200 iso-6400";
answerText[9] = "f/5.6 1/50 iso-6400";
answerText[10] = "f/5.6 1/400 iso-400";
answerText[11] = "f/5.6 1/500 iso-400";
answerText[12] = "f/5.6 1/160 iso-1000";
answerText[13] = "f/5 1/80 iso-100";
answerText[14] = "f/5.6 1/500 iso-100";
answerText[15] = "f/4 1/160 iso-200";
answerText[16] = "f/5.6 1/400 iso-500";
answerText[17] = "f/5.6 1/250 iso-200";
answerText[18] = "f/1.8 1/80 iso-1250";
answerText[19] = "f/1.8 1/25 iso-250";	
answerText[20] = "f/5.6 1/400 iso-50";	
answerText[21] = "f/5.6 1/125 iso-50";
answerText[22] = "f/5.6 1/400 iso-50";
answerText[23] = "f/5.6 1/400 iso-50";
answerText[24] = "f/5 1/640 iso-50";
answerText[25] = "f/4 1/640 iso-50";
answerText[26] = "f/5.6 1/160 iso-50";
answerText[27] = "f/4 1/6400 iso-800";
answerText[28] = "f/5.6 1/500 iso-640";
answerText[29] = "f/5 1/100 iso-640";
answerText[30] = "f/3.5 1/160 iso-3200";
answerText[31] = "f/5 1/1000 iso-100";
answerText[32] = "f/5.6 1/1000 iso-100 ";
answerText[33] = "f/5.6 1/1000 iso-100";
answerText[34] = "f/5 1/1250 iso-100";
answerText[35] = "f/5.6 1/320 iso-100";
answerText[36] = "f/5 1/400 iso-100";
answerText[37] = "f/5.6 1/1250 iso-100";
answerText[38] = "f/5 1/320 iso-100";
answerText[39] = "f/5 1/250 iso-100";
answerText[40] = "f/5.6 1/800 iso-100";
answerText[41] = "f/5.6 1/125 iso-640";
answerText[42] = "f/5.3 1/1250 iso-160";
answerText[43] = "f/5.6 1/640 iso-100";
answerText[44] = "f/5.6 1/100 iso-200"
	

let answerPool = [];//makes sure that the images and text displayed are within one of the 9
let randIndex = 0;//random index to access answerImage
let displayedTextIndices = [];//stores the indices displayed by randNumGenerator() for the displayImage function.
let currentImageIndex;//stores the current index value that displayImage() outputs to compare with answerText index.

for (let i = 0; i < 9; i++) {
    answerPool[i] = -1;
    displayedTextIndices[i] = -1;
}
  
function getRandomPic() {
    randomPic = Math.floor(Math.random() *answerImage.length);
}

function showPics() {
    let cells = document.querySelectorAll('.img');
    cells.forEach(function (cell) {
        let index = getRandomIndex();
        let img = document.createElement('img');
        img.src = answerImage[index];
        img.alt = 'Image';
        img.classList.add('image-preview');
        answerPool[randIndex] = index;
        cell.appendChild(img);
		cell.dataset.index = index;
    });
    cells.forEach(function (cell) {
        cell.addEventListener('click', function () {
            let index = parseInt(this.dataset.index);
            checkAnswer(index);
        });
    });
} // This portion of the Javascript was adapted from https://stackoverflow.com/questions/61323482/how-do-i-display-random-images-to-a-table
	
function getRandomIndex() {
	let rand =  Math.floor(Math.random() *answerImage.length);
	randIndex++;
	if (randIndex >= 9)
	{
		randIndex = 0;
	}
	return rand;
}

function checkAnswer(clickedIndex){
    let correctIndex = answerPool[9];
    if (clickedIndex === correctIndex) {
        togglePopUp(); 
		setTimeout(function () {
            location.reload();
        }, 1000);//if the answer is correct toggle the correct popup and refresh the page, if not toggle incorrect popup.
		//Js refresh: https://www.w3schools.com/jsref/met_loc_reload.asp
    } else {
        incorrectTogglePopUp(); 
    }
}

function getCorrect()
{
    let clickedIndex = parseInt(this.dataset.index); 
    checkAnswer(clickedIndex);
}
  
showPics();

function displayImage() {
	currentImageIndex = displayedTextIndices[Math.floor(Math.random() * displayedTextIndices.length)];//checks if the info clicked on matches the index of the image
    let img = document.getElementById("displayedImage");
    img.src = answerImage[currentImageIndex];
    img.alt = 'Displayed Image';
}//This is displaying just one image from the array answerImage in order to display in the TextPage for users to see and choose and text from textPage.





document.addEventListener("DOMContentLoaded", function () { //DomContent from: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
	//DomContent to make sure the text table loads in before displayImage().
	let cells = document.querySelectorAll('.textTableCell');
	//using querySelector: https://stackoverflow.com/questions/71475378/how-to-use-document-queryselector-to-find-elements-with-a-specific-class-name
		cells.forEach(function (cell, index) {
			cell.addEventListener('click', function () {//eventListener: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
				correctAnswer(index + 1);
		});
	});
});

function randNumGenerator() {
	displayedTextIndices = [];
	for (let i = 0; i < 9; i++) {
		let randNum = Math.floor(Math.random() * answerText.length);
		while (displayedTextIndices.includes(randNum)) {
			randNum = Math.floor(Math.random() * answerText.length);
		}
		displayedTextIndices.push(randNum);
		document.getElementById("answerText" + (i + 1)).innerHTML = answerText[randNum];
		document.getElementById("answerText" + (i + 1)).dataset.index = randNum; 
	}
}
	

function correctAnswer(clickedIndex) {
	let actualIndex = parseInt(document.getElementById("answerText" + clickedIndex).dataset.index, 10);
	if (actualIndex === currentImageIndex) {
		togglePopUp();
		setTimeout(function () {//uses the same logic checkAnswer()
		location.reload();
		}, 1000);
	} else {
		incorrectTogglePopUp(); 
	}
}


function displayText()
{	let randNum = Math.floor((Math.random()*9));
	let textElement = document.getElementById("displayText"); 
 	textElement.innerHTML = answerText[answerPool[randNum]];
	answerPool[9] = answerPool[randNum];
}//This is displaying just one text from the array answerText in order to display in the PhotoPage for users to see 
// and choose and image from


//Popups: https://www.youtube.com/watch?v=iE_6pQ3RlZU&ab_channel=Codingflag-->
function togglePopUp()
{
	document.getElementById("popup-1").classList.toggle("active");
	
}

function incorrectTogglePopUp()
{
	document.getElementById("popup-2").classList.toggle("active");
	
}


function goToNextPage(nextPage){
	window.location.href = nextPage;
	location.replace(nextPage);
}
//The functions getRandomIndex(), getImageName are from https://stackoverflow.com/questions/61323482/how-do-i-display-random-images-to-a-table as well.