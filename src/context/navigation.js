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
        // popstate 이벤트는 브라우저의 히스토리 항목 변경을 감지 (예: 사용자가 뒤로가기 버튼을 클릭할 때)
        
        return () => {
            //NavigationProvider가 screen에서 remove될 때 removeEventhandler
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