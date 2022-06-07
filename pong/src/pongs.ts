import { context } from './GenericObject'
import { objectCanvas } from './GenericObject'

namespace pongLocation {
    export namespace firstPongLocation {
        export const width: number = objectCanvas.width = innerWidth
        export const height: number = objectCanvas.height = innerHeight
    }

    export namespace SecondPongLocation {
        export const width: number = objectCanvas.width = innerWidth
        export const height: number = objectCanvas.height = innerHeight
    }
}

interface pongs {
    width: number
    height: number
    position: object

    draw(): void 
    update(): void 
}

interface positions {
    x: number 
    y: number
}

interface keys {
    x: boolean
    y: boolean
}

export const keys: keys = {
    x: false,
    y: false
}

interface keys2 {
    x: boolean
    y: boolean
}

export const keys2: keys2 = {
    x: false,
    y: false 
}

interface velocity {
    x: number
    y: number
}

export class Pong implements pongs {

    public width: number
    public height: number 
    public position: positions
    public velocity: velocity 

    constructor(width: number, height: number) {
        this.width = width 
        this.height = height 

        this.position = {
            x: pongLocation.firstPongLocation.width / 2 - 950,
            y: pongLocation.firstPongLocation.height / 2 - 100
        }

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw(): void {
        context?.fillRect(this.position.x, this.position.y, this.width, this.height)

    }

    update(): void {
        this.draw()

        this.position.y += this.velocity.x
        this.position.y -= this.velocity.y

        if(keys.x){
            this.velocity.y -= 1.5
        } else if (keys.y) {
            this.velocity.y += 1.5
        }

        if(keys.x === false && keys.y === false){
            this.velocity.x = 0
            this.velocity.y = 0
        }
    }

}

export class Pong2 implements pongs {

    public width: number
    public height: number 
    public position: positions
    public velocity: velocity 

    constructor(width: number, height: number) {
        this.width = width 
        this.height = height 

        this.position = {
            x: pongLocation.firstPongLocation.width / 2 + 800,
            y: pongLocation.SecondPongLocation.height / 2 - 100
        }

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw(): void {
        context?.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(): void {
        this.draw()

        this.position.y += this.velocity.x
        this.position.y -= this.velocity.y

        if(keys2.x){
            this.velocity.y -= 1.5
        } else if (keys2.y) {
            this.velocity.y += 1.5
        }

        if(keys2.x === false && keys2.y === false){
            this.velocity.x = 0
            this.velocity.y = 0
        }
    }

}

export const pong: Pong = new Pong(100, 300)
export const pong2: Pong2 = new Pong2(100, 300)