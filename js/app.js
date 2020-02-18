//objeto

const rover = {
  name: 'rover',
  direction: 'N',
  //coordenates:[""]
  x : 0, // HORIZONTAL 
  y : 0 // VERTICAL 
}


//funciones 


function turnRight(rover){
  console.log('el rover gira a la derecha');
  switch(rover.direction){
    case 'N':
      rover.direction='E'
      break; 
    case 'E':
      rover.direction='S'
      break;
    case 'S':
      rover.direction='W'
    case 'W':
      rover.direction='N'
      break; 
  }
}


function turnLeft(rover){
  console.log('el rover gira a la izq');
  switch(rover.direction){
    case 'N':
      rover.direction='W'
      break; 
    case 'O':
      rover.direction='S'
      break;
    case 'S':
      rover.direction='E'
    case 'W':
      rover.direction='N'
      break;  
  }
}


function moveFoward(rover){
  switch(rover.direction){
    case 'N':
      rover.y=rover.y-1;
      break; 
    case 'E':
      rover.x=rover.x+1;
      break;
    case 'S':
      rover.y=rover.y+1;
      break; 
    case 'W':
      rover.x=rover.x-1;
      break;  
  }
}

commands=['l','r','f']



//function commands(){



//rover.position.push [""]
//rover.direction.push*/