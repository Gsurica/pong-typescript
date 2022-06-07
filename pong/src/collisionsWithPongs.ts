import { ball } from "./ball"
import { pong, pong2 } from "./pongs"

export function collisionsWithPongs(): void {
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
}