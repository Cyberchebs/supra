import { createContext,useContext, useRef } from "react";

const SceneContext = createContext(null);

export const SceneProvider = ({ children }) => {

    const supraRef = useRef(null);
    const cameraRef = useRef(null);

    


    return (
        <SceneContext.Provider value={{supraRef, cameraRef}}>
            {children}
        </SceneContext.Provider>
    )
}
export const useScene = () => useContext(SceneContext)