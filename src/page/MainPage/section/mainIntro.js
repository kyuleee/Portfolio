import * as THREE from 'three';
import './mainIntro.css';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, RenderTexture} from '@react-three/drei'
import Me from './3d'

const MainIntro = ()=>{
    return(
        <div className="mainIntro">
            <section>
                <article>
                    <p>FRONTEND DEVELOPER</p>
                    {/* <img src={img} /> */}
                    {/* <Canvas>
                        <OrbitControls enableZoom={false} autoRotate={true}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]} />
                        <mesh>
                            <boxGeometry args={[1,1,1]} />
                            <meshStandardMaterial color='white'/>
                        </mesh>
                    </Canvas> */}
                    <Me/>
                </article>
            </section>
        </div>
    );
}

export default MainIntro;