import { createContext, useState, useEffect } from "react";


const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    // console.log(currentPath);
    useEffect(()=>{ // document.ready
        const handler= ()=>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        // popstate : catch Event changing Browser history (ex: when user clicked prev button)
        
        return () => {
            //when NavigationProvider removed from screen, call removeEventhandler
            window.removeEventListener('popstate', handler);
        };       
        
    }, []);
    const navigate = (to) => { // to: /accordion
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };
    return <NavigationContext.Provider value={{ currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
};

export { NavigationProvider };
export default NavigationContext;