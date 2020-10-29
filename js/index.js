window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  //Variables
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  let carX = 225
  let _direction = 'right'

  class Obstacles {
    constructor (_width, _heigth, _x, _y) {
      this.width = _width
      this.heigth = _heigth
      this.x = _x
      this.y = _y
    }

  }
  

  //Functions
  function createRoad () {
    const roadImg = new Image ()
    roadImg.onload = () => {
      ctx.drawImage(roadImg, 0, 0, 500, 700)
    }
    roadImg.src = './images/road.png'
  }
  
  function createCar () {
    const car = new Image()
    car.onload = () => {
      ctx.drawImage (car, carX, 550, 50, 80)
    }
    car.src = './images/car.png'
  }

  function startGame () {
    createRoad ()
    createCar ()
    const createObstacle = setInterval(() => {
      let minWidth = 50
      let maxWidth = 200
      
    }, );
  }
  
  function carMoves () {
    if (_direction === 'right') {
      carX +=7
      createCar()
    }else if (_direction === 'left') {
      carX -= 7
      createCar()
    }
  }
  document.addEventListener('keydown', (event)=>{
    if (event.key === 'ArrowRight' ){
      createRoad()
      _direction = 'right'
      carMoves()
    }else if (event.key === 'ArrowLeft'){
      createRoad()
      _direction = 'left'
      carMoves()
    }
  })
}    
  

