import { context } from './GenericObject'
import { objectCanvas } from './GenericObject'

namespace BallLocation {
    export const width: number = objectCanvas.width = innerWidth
    export const height: number = objectCanvas.height = innerHeight
}

interface ball {
    width: number
    height: number 
    position: object
    limiter: number

    draw(): void 
    update(): void
}

interface position {
    x: number
    y: number 
}

interface velocity {
    x: number
    y: number 
}

class Ball implements ball {

    public width: number 
    public height: number
    public position: position
    public velocity: velocity
    public limiter: number 

    constructor(width: number, height: number) {
        this.width = width 
        this.height = height
        this.limiter = 60

        this.position = {
            x: BallLocation.width / 2,
            y: BallLocation.height / 2 
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        
    }

    draw() {
        context?.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()

        this.velocity.x += 0.1
        this.velocity.y -= 0.1
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

export const ball: Ball = new Ball(50, 50)