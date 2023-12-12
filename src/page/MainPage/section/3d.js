import * as THREE from 'three';
import React,{ useRef, useEffect } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// import model from '../../../img/astro04.glb';
import model from '../../../img/myavator.glb';


const Test1 = () => {
    const main = useRef();
    useEffect(() => {
        const mainCur = main.current
        //render
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mainCur.clientWidth, mainCur.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        // document.body.innerHTML="";
        mainCur.appendChild(renderer.domElement);

        //scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#000016');

        scene.fog = new THREE.Fog('black', 3, 7);
        //camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        // camera.position.z = 5;
        // camera.position.y = 3;
        // camera.position.x =2;
        camera.position.set(0, 2, 3);
        scene.add(camera)

        //light
        const ambientLight = new THREE.AmbientLight('white', 0.5);
        scene.add(ambientLight);
        const directionLight = new THREE.DirectionalLight('white', 0.5)
        directionLight.position.z = 2;
        directionLight.position.x = 2;
        directionLight.position.y = 2;
        scene.add(directionLight);

        // const light2 = new THREE.PointLight("white", 80);
        // light2.position.z = 1.7;
        // light2.position.x = 0;
        // light2.position.y = -2.5;
        // light2.castShadow = true; // default false
        // scene.add(light2);

        //마우스로 움직에 할 수 있음
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        if (isMobileDevice()) {
            mainCur.style.pointerEvents = 'none';
            // controls.enabled = false;
        }

        // const orbitControls = new OrbitControls(camera, renderer.domElement)
        // orbitControls.enableDamping = true
        // orbitControls.target.set(0, 1, 0)

        
        //GLTF Loader
        let mixer;

        const gltfLoader = new GLTFLoader();
        gltfLoader.load(model, (gltf) => {
            const imgs = gltf.scene.children[0];
            scene.add(imgs);
            mixer = new THREE.AnimationMixer(gltf.scene);
            // const action = mixer.clipAction(imgs.animation[0]);;
            // action[0] = mixer.clipAction(imgs.animation[0]);
            // action.play();
        })
        // gltfLoader.load(model, (gltf) => {
        //     const imgs = gltf.scene.children[0];
        //     scene.add(imgs)
        //     mixer = new THREE.AnimationMixer();
        // })

        //애니메이션
        const clock = new THREE.Clock();
        const animate = () => {
            // const time = clock.getElapsedTime();
            // controls.update();
            // controls.rotateSpeed = 10;
            // if (mixer) mixer.update(time);
            
            renderer.render(scene, camera);
            renderer.setAnimationLoop(animate);

        }
        animate();

        renderer.render(scene, camera)

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mainCur.clientWidth, mainCur.clientHeight);
            renderer.render(scene, camera);
        });
    })
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return (
        <section className='threeModel' ref={main}></section>
    );
}

export default Test1;