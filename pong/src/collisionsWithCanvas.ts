import { ball } from "./ball"

export function collisionsWithCanvas(): void {
    if (ball.position.y + ball.height >= 937) {
        ball.velocity.y -= 10
    } else if (ball.position.y < 0) {
        ball.velocity.y += 10
    }
}