import * as THREE from 'three';
import './mainIntro.css';
// import Me from './3d'
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

const MainIntro = () => {

    return (
        <div className="mainIntro">
            <section>
                <article>
                    <p>
                        <svg viewBox="0 0 1320 300" className='mainTxt'>
                            <text x="50%" y="50%" dy="40px" textAnchor="middle">FRONTEND DEVELOPER</text>
                        </svg>
                    </p>
                    {/* <Me /> */}
                    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} style={{position:'absolute'}}>
                        <color attach="background" args={["#000016"]} />
                        <Experience />
                    </Canvas>
                </article>
            </section>
        </div>
    );
}

export default MainIntro;