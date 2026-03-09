import { initScene } from "./scene.js"
import { loadSpiderman } from "./spiderman.js"
import { createParticles } from "./particles.js"
import { cinematicCamera } from "./cameraAnimation.js"

initScene()

createParticles()

cinematicCamera()

loadSpiderman()
