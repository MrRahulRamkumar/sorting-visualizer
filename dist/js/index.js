let values = [];
let arraySize = 50;

let x;
let w;
let sleepTimer;

let states = [];

let width, height
let canvas;

function setup() {

  width = windowWidth/2;
  height = windowHeight/2;

  canvas = createCanvas(width, height);
  canvas.parent('canvas-container');

  init();
}

function init() {

  console.log(arraySize);

  states = [];

  
  
  arraySize = $('#array_length_input').val();

  w = width / arraySize;
  sleepTimer = (1 / arraySize) * 5000;

  values = new Array(arraySize);
  for (let i = 0; i < arraySize; i++) {
    values[i] = random(height);
    states[i] = -1;
  }  
}

function startSorting() {
  let val = $('#algorithm_option').val();
  if (val == 1) {
    bubbleSort()
  } else if (val == 2) {
    quickSort(values, 0, values.length - 1)
  }
}

function draw() {

  background(255);
  x = int((width - (arraySize * w)) / 2);
  
  for (let i = 0; i < arraySize; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#E0777D');
    } else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(0);
    }

    rect(x, 0, w, values[i]);
    x = x + w;
  }
}

async function swap(arr, a, b) {
  await sleep(sleepTimer);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


$(document).ready(function () {

  $('#array_length_input').change(function() {
    init();
  });

  $('#start_button').click(function() {
    startSorting();
  })
});