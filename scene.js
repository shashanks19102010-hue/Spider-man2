import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js"

export let scene
export let camera
export let renderer

export function initScene(){

scene=new THREE.Scene()

scene.fog=new THREE.Fog(0x000000,10,80)

camera=new THREE.PerspectiveCamera(
70,
window.innerWidth/window.innerHeight,
0.1,
1000
)

renderer=new THREE.WebGLRenderer({antialias:true})

renderer.setSize(window.innerWidth,window.innerHeight)

renderer.shadowMap.enabled=true

document.getElementById("canvas").appendChild(renderer.domElement)

camera.position.set(0,2,12)

const redLight=new THREE.PointLight(0xff0000,5)

redLight.position.set(5,6,4)

scene.add(redLight)

const blueLight=new THREE.PointLight(0x0044ff,4)

blueLight.position.set(-5,4,-3)

scene.add(blueLight)

animate()

}

function animate(){

requestAnimationFrame(animate)

renderer.render(scene,camera)

}
