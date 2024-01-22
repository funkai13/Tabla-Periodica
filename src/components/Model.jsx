import { Canvas } from "@react-three/fiber";
import { useGLTF,Stage, PresentationControls, Shadow } from "@react-three/drei";
import { useElementStore } from "../store/element";
export function Model(props) {
    const element=useElementStore(state=>state.selectedElement)
    const {scene}= useGLTF(element.bohr_model_3d)
    return <primitive object={scene}{...props}/>
    }

    