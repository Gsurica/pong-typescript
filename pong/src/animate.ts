import { context } from './GenericObject'
import { objectCanvas } from './GenericObject'
import { pong } from './pongs'
import { pong2 } from './pongs'
import { ball } from './ball'
import { collisionsWithPongs } from './collisionsWithPongs'
import { collisionsWithCanvas } from './collisionsWithCanvas'
import { points } from './points'

export function animate(): void {
    requestAnimationFrame(animate)
    context?.clearRect(0, 0, objectCanvas.width, objectCanvas.height)
    pong.update()
    pong2.update()
    ball.update()

    collisionsWithPongs()

    collisionsWithCanvas()

    points()
}