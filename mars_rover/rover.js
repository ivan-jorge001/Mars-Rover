var x = prompt("bbbrrfffff");
// var f = (x.match(/f/g) || []).length;
// var b = (x.match(/b/g) || []).length;
// var r = (x.match(/r/g) || []).length;
// var l = (x.match(/l/g) || []).length;
// console.log(f);

// function something(){
//   console.log("begin button clicked");
//   $('.nothing').append('<p> Enter Some Commands</p>');
// }
//
// $('.begin').on("click", something);


var myrover = {
  position: [0,0],
  direction: 'N'

};
var obstacles = [ [1,2], [0,2], [7,7]  ];

function checkForObstacles(){
  for (var i = 0; i < obstacles.length; i++ ){
    console.log("How many times ", myrover.position);
    if (myrover.position[0] === obstacles[i][0] && myrover.position[1] === obstacles[i][1]){
      console.log("sorry theres something here");
      goBackward(myrover);
      return true;

    }
  }
}


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function goBackward(rover) {
  console.log("passed into go backward", rover);
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      break;
    case 'E':
      rover.position[0]--;
      break;
    case 'S':
      rover.position[1]++;
      break;
    case 'W':
      rover.position[0]++;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

for (var i = 0; i < x.length; i++) {

    if ( x[i] === "f"){
      goForward(myrover);
    }
      else if (x[i] === "b"){
        goBackward(myrover);
        checkForObstacles();
        }
        else if (x[i] === "l") {
          goleft(myrover);

        } else if (x[i] === "r") {
          goright(myrover);

        }

        else {
          console.log("type a command");
        }
}
