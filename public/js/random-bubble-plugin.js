function Game(){

}


//RANDOM BALLs
function createMultipleBalls(config){
    let {
        color,
        randomColor,
        size,
        boxWidth,
        boxHeight,
        speed,
        x,
        y,
        opacity,
        zIndex,
        borderRadius,
        parent,
        ballsCount
    } = config

    color = color ? color :  100000 + Math.floor(Math.random() * 999999)
    for (let index = 0; index < ballsCount; index++) {
        let color = randomColor ? 100000 + Math.floor(Math.random() * 999999) : color
        let ball = document.createElement('span');
        console.log(parent, document.querySelector(parent))
        document.querySelector(parent).appendChild(ball);
        new Ball({
            element: ball,
            color: `${color}`,
            size: size || 10 + Math.random() * 100,
            speed: 500 + Math.random() * 1000,
            x: (1 + Math.random() * 100),
            y: (1 + Math.random() * 100),
            borderRadius: `${borderRadius}%` || '0%',
            opacity: opacity || 1,
            zIndex: 0,
            boxHeight: boxHeight,
            boxWidth: boxWidth,
            speed,
            zIndex,
        })
    }
}


function Ball( config ) {
    this.speed = config.speed || 1000;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.xSteps = config.xSteps || 10;
    this.ySteps = config.ySteps || 10;
    this.el = config.element
    this.size = config.size
    this.onClickSpeed = config.onClickSpeed || 100
    this.shouldMoveForward = true;
    this.shouldMoveUpward = true
    this.width = config.boxWidth || false
    this.height = config.boxHeight || false
    this.el.style.backgroundColor = config.color ? `#${config.color}` : "#000069",
        this.el.style.borderRadius = config.borderRadius || '50%',
        this.el.style.position = config.position || 'absolute'
    this.el.style.opacity = config.opacity || 1
    this.el.style.zIndex = config.zIndex || 0

    let self = this


    this.el.addEventListener("click",function () {
        self.shrink()
        self.el.classList.add('waves')
        let initial_speed = self.speed
        self.speed = self.onClickSpeed
        self.init()
        setTimeout(function () {
            self.speed = initial_speed
            clearInterval(self.interval)
            self.init()
            self.el.classList.remove('waves')
        },5000);
    })

    this.el.addEventListener("mouseover",function () {
        clearInterval(self.interval)
    })

    
    this.el.addEventListener("mouseout",function () {
        self.start();
    })

    this.hasWidthAndHeight = () => self.height && self.width;
    

    this.removeIfTooSmall = () => {
        if (self.hasWidthAndHeight() && (self.width < 5 || self.height < 5)) {
            return self.el.remove()
        }

        return self.size < 5 ? self.el.remove() : null;
    }

    this.setBoxSize = function(){
        self.removeIfTooSmall();
        if (self.hasWidthAndHeight()) {
            self.el.style.width = `${this.width}px`
            self.el.style.height = `${this.height}px`
            return;
        }

        return this.el.style.width = this.el.style.height =  `${this.size}px`
    }

    this.shrink = function(share = 2){
        if (self.height && self.width) {
            self.height = Math.ceil(self.height / share)
            self.width = Math.ceil(self.width / share)
            return
        }
        self.size = Math.floor(self.size / share)
        self.speed = Math.floor(self.speed / 2)

    }

    this.init = function () {
        self.setBoxSize()
        self.el.style.transitionDuration = `${self.speed}ms`
        self.el.style.transitionProperty = `all`
        self.el.style.transitionTimingFunction = `linear`
        self.move() //Take one step to position elements
        self.start()
    }

    this.move = function(){
        self.shouldMoveForward ? self.x +=  self.xSteps + Math.random(0,50)  : self.x -= self.xSteps + Math.random(0,50);
        self.shouldMoveUpward ? self.y += self.ySteps + Math.random(0,50) : self.y -= self.ySteps  + Math.random(0,50);
        self.el.style.left = `${self.x}%`
        self.el.style.top = `${self.y}%`

        self.x < 1 || self.x > 99 ? self.shouldMoveForward = !self.shouldMoveForward : null;
        self.y < 1 || self.y > 99 ? self.shouldMoveUpward = !self.shouldMoveUpward : null;
    }

    this.start = function(){
        clearInterval(self.interval)
        self.interval = setInterval(function () {
            self.move()
        },self.speed)
    }

    // Call the movement methods
    this.init()
}




//END RANDOM BALLS