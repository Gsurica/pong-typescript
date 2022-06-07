import { ball } from "./ball"

export function points(): void {
    if(ball.position.x + ball.width >= 1920){
        window.location.reload()
        alert("Pong 1, Score!")
    } else if (ball.position.x < 0) {
        window.location.reload()
        alert("Pong 2, Score!")
    }
}