// import * as THREE from 'three';
import './mainIntro.css';
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
                    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} style={{position:'absolute'}}>
                        <color attach="background" args={["#000016"]} />
                        <Experience />
                    </Canvas>
                    <p className='bottomCpy'>웹의 세계에서 색다른 사용자 경험을 디자인하고, <br/>코드로 현실로 만들어내는 프론트엔드 개발자입니다.</p>
                </article>
            </section>
        </div>
    );
}

export default MainIntro;