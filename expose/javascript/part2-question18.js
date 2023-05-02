setInterval(myCallback, 1000); //1000 = 1s

function myCallback() {
  // Your code here
  // Parameters are purely optional.
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}