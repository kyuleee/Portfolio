import * as THREE from 'three';
import './mainIntro.css';
import Me from './3d'

const MainIntro = () => {

    return (
        <div className="mainIntro">
            <section>
                <article>
                    <p>
                        <svg viewBox="0 0 1320 300" className='mainTxt'>
                            <text x="50%" y="50%" dy="40px" text-anchor="middle">FRONTEND DEVELOPER</text>
                        </svg>
                    </p>
                    <Me />
                </article>
            </section>
        </div>
    );
}

export default MainIntro;