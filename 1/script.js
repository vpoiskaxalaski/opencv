let imgElement = document.getElementById('srcImage')
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener("change", (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function() {
  let mat = cv.imread(imgElement); //Loads an image from a file
  //Converts an image from one color space to another.
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY); 
  cv.imshow('outputCanvas', mat);
  mat.delete();
}

function opencvIsReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.'
}