import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js"
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/loaders/OBJLoader.js"
import { scene } from "./scene.js"

export function loadSpiderman(){

const loader=new OBJLoader()

loader.load("uploads_files_6810527_raimisuit.obj",function(model){

model.scale.set(0.7,0.7,0.7)

model.position.set(-8,0,0)

scene.add(model)

walk(model)

})

}

function walk(model){

let x=-8

const panel=document.getElementById("loginPanel")

function move(){

x+=0.02

model.position.x=x

model.rotation.y+=0.02

if(x>-1){

gsap.to(panel,{
left:"70%",
duration:2
})

}

requestAnimationFrame(move)

}

move()

}
