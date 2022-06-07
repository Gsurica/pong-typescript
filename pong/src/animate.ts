import { context } from './GenericObject'
import { objectCanvas } from './GenericObject'
import { pong } from './pongs'
import { pong2 } from './pongs'
import { ball } from './ball'

export function animate(): void {
    requestAnimationFrame(animate)
    context?.clearRect(0, 0, objectCanvas.width, objectCanvas.height)
    pong.update()
    pong2.update()
    ball.update()

    if(ball.position.x + ball.width >= pong2.position.x && ball.position.x <= pong2.position.x + pong2.width && ball.position.y + ball.height >= pong2.position.y && ball.position.y <= pong2.position.y + pong2.height){
        if(ball.velocity.x > ball.limiter){
            ball.velocity.x -= 50
        } else {
            ball.velocity.x -= 50
        }
    } else if (ball.position.x + ball.width >= pong.position.x && ball.position.x <= pong.position.x + pong.width && ball.position.y + ball.height >= pong.position.y && ball.position.y <= pong.position.y + pong.height) {
        if(ball.velocity.x > ball.limiter){
            ball.velocity.x += 50
        } else {
            ball.velocity.x += 50
        }
    }

    if (ball.position.y + ball.height >= 937) {
        ball.velocity.y -= 10
    } else if (ball.position.y < 0) {
        ball.velocity.y += 10
    }
}