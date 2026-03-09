import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js"
import { scene } from "./scene.js"

export function createParticles(){

const geometry=new THREE.BufferGeometry()

const vertices=[]

for(let i=0;i<15000;i++){

vertices.push(

Math.random()*300-150,
Math.random()*300-150,
Math.random()*300-150

)

}

geometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(vertices,3)
)

const material=new THREE.PointsMaterial({

color:0xff0000,
size:0.25

})

const stars=new THREE.Points(geometry,material)

scene.add(stars)

}
