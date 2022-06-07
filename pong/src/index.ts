import { Canvas } from './GenericObject'
import { objectCanvas } from './GenericObject'
import { context } from './GenericObject'
import { pong } from './pongs'
import { movementsFirstPong, movementsSecondPong} from './moviment'
import { animate } from './animate'

const canvas = new Canvas(objectCanvas, objectCanvas.width = innerWidth, objectCanvas.height = innerHeight, context)

console.log(canvas)
movementsFirstPong(pong.position.x, pong.position.y, pong.velocity.x, pong.velocity.y)
movementsSecondPong(pong.position.x, pong.position.y, pong.velocity.x, pong.velocity.y)
animate()
