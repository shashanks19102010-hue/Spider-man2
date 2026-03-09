import { camera } from "./scene.js"

export function cinematicCamera(){

gsap.to(camera.position,{

z:6,
duration:6,
ease:"power2.out"

})

gsap.to(camera.rotation,{

y:0.3,
duration:8

})

}
