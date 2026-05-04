import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js"
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/loaders/OBJLoader.js"
import { scene } from "./scene.js"

export function loadSpiderman(){

const loader=new OBJLoader()

loader.load("uploads_files_6810527_raimisuit.obj",function(model){

model.scale.set(0.7,0.7,0.7)

// Start from the left corner so he can walk into frame.
model.position.set(-12,-3,0)
model.rotation.y=Math.PI/2

scene.add(model)

walkToLoginPanel(model)

})

}

function walkToLoginPanel(model){

let x=-12
const stopX=-1.6
const panel=document.getElementById("loginPanel")
let revealedPanel=false

function move(){

if(x<stopX){
  x+=0.035
  model.position.x=x

  // Slight body sway while walking.
  model.rotation.y=Math.PI/2+Math.sin(x*2)*0.05

  if(!revealedPanel && x>-5.5){
    revealedPanel=true
    gsap.to(panel,{
      left:"72%",
      duration:1.6,
      ease:"power2.out"
    })
  }

  requestAnimationFrame(move)
  return
}

// Final pose near the login panel.
gsap.to(model.position,{ y:-2.6, duration:0.4, ease:"power1.out" })
gsap.to(model.rotation,{ y:Math.PI/2, duration:0.5, ease:"power1.out" })

}

move()

}
