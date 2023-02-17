array_1 = ['pen','paper','book','bottle'];
function updateCanvas() {
var random_number = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_number];
console.log(Element_of_array);
document.getElementById('what_draw').innerHTML = 'Sketch To be Drawn: ' + Element_of_array;
var timer_counter = 0;
var timer_check = 0;
var drawn_sketch = 0;
answer_holder = 0;
score = 0;
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 300);
    background("white");
}

function draw() {
    strokeWeight(13);
    stroke(0);
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
}
    check_sketch();
    if (drawn_sketch == Element_of_array) {
        answer_holder = set;
        score = Math.floor(score + 1);
        document.getElementById('scoruNo').innerHTML = score;
    }
    

}

function check_sketch() {
    if (timer_counter < 400)
    timer_counter = Math.floor(timer_counter + 1);
    console.log(timer_counter);
    document.getElementById('timerNo').innerHTML = timer_counter;
    timer_check = completed;
    canvas.mouseReleased(classsifyCanvas);  
    updateCanvas();

}


function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
    updateCanvas();
    
}

function classsifyCanvas() {
    classifier.classify(canvas, gotResult);
}





function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].lable;
    document.getElementById('label').innerHTML = 'Your Sketch: ' + drawn_sketch;

    document.getElementById('confidence').innerHTML = 'confidence: ' + Math.round(results[0].confidence * 100) + '%';
}
    