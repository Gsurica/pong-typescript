import { keys, keys2 } from './pongs'

export function movementsFirstPong(pongX: number = 0, pongY: number = 0, velocityX: number, velocityY: number): void {
    window.addEventListener('keydown', ({ keyCode }) => {
        console.log(keyCode)
        switch(keyCode) {
            case 83:
                console.log('down')
                console.log(pongX)
                keys.x = true 
                break
            case 87: 
                console.log('up')
                console.log(pongY)
                keys.y = true 
                break 
        }
    })

    window.addEventListener('keyup', ({ keyCode }) => {
        console.log(keyCode)
        switch(keyCode) {
            case 83:
                console.log('down')
                console.log(pongX)
                keys.x = false 
                break
            case 87: 
                console.log('up')
                console.log(pongY)
                keys.y = false 
                break 
        }
    })
}

export function movementsSecondPong(pongX: number = 0, pongY: number = 0, velocityX: number, velocityY: number): void {
    window.addEventListener('keydown', ({ keyCode }) => {
        console.log(keyCode)
        switch(keyCode) {
            case 13:
                keys2.x = true 
                break
            case 107:
                keys2.y = true
                break
        }
    })

    window.addEventListener('keyup', ({ keyCode }) => {
        console.log(keyCode)
        switch(keyCode) {
            case 13:
                keys2.x = false 
                break
            case 107:
                keys2.y = false
                break
        }
    })
}
