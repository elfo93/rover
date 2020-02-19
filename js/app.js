//objeto

const rover = {
  name: 'rover',
  direction: 'N',
  travelLog: [],
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
  console.log(`el rover gira a la derecha y su direccion es ${rover.direction}`)
  //rover.travelLog.push(rover.direction)
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
  //rover.travelLog.push(rover.direction)
}


function moveFoward(rover){

  if(rover.direccion === 'N' && rover.y>0 && rover.y<10){

    rover.y -=1

    console.log(`el rover se mueve y su direccion es ${rover.direccion} y sus coordenadas son: X ${rover.x} e Y ${rover.y}`)

  } else if(rover.direction==='S'&& rover.y<10 && rover.y>0){

    rover.y=+1

    console.log(`el rover se mueve y su direccion es ${rover.direccion} y sus coordenadas son: X ${rover.x} e Y ${rover.y}`)

  } else if(rover.direccion === 'E' && rover.x>0 && rover.x<10){

    rover.x=+1
    
    console.log(`el rover se mueve y su direccion es ${rover.direccion} y sus coordenadas son: X ${rover.x} e Y ${rover.y}`)

  } else if(rover.direccion === 'W' && rover.x<10 && rover.x>0){

    rover.x=-1

    console.log(`el rover se mueve y su direccion es ${rover.direccion} y sus coordenadas son: X ${rover.x} e Y ${rover.y}`)

  } else {
    console.log(`el rover puede moverse porque mira al ${rover.direction} y su x es ${rover.x} y su y es ${rover.y}`)
  } 

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

  rover.travelLog.push(`x= ${rover.x}, y=${rover.y}`)

}


function commands (String){
  for (i=0; i<=String.length; i++){

    switch(String[i]){
      case 'l':
        turnLeft(rover);
        break; 
      case 'r':
        turnRight(rover);
        break;
      case 'f':
        moveFoward(rover); 
        break; 
    }
  }
}


dimension= 10; 

function generateGrid(dimension){
  let grid = [];

  for(r = 0; r<dimension; r++){
    grid[r] = []
    for(c = 0; c<dimension; c++){
    grid[r][c]
    }
  }
}