import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avator";

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false}/>
            <group position-y={-1}>
                <ContactShadows
                    opacity={0.42}
                    scale={10}
                    blur={1}
                    far={10}
                    resolution={256}
                    color="#000000"
                />
                <Avatar />
            </group>
            <ambientLight intensity={4}/>
            <spotLight angle={0.7} intensity={0.6}/>
        </>

    );
}