import { createContext,useContext, useRef, useState ,useCallback} from "react";

const SceneContext = createContext(null);

export const SceneProvider = ({ children }) => {

    const supraRef = useRef(null);
    const cameraRef = useRef(null);

    
    const [modelReady, setModelReady] = useState(false);
 
 
    
  const setSupraRef = useCallback((node) => {
    supraRef.current = node;
    if (node) setModelReady(true);
  }, []);


    return (
        <SceneContext.Provider value={{supraRef, cameraRef, setSupraRef, modelReady}}>
            {children}
        </SceneContext.Provider>
    )
}
export const useScene = () => useContext(SceneContext)