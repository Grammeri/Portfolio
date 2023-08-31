import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
    const [isClient, setIsClient] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const isMobile = useMediaQuery({
        maxWidth: 768,
    });

    const isDesktop = useMediaQuery({
        minWidth: 769,
    });

    const changeReadyState = () => {
        setIsLoaded(prevState => prevState ? prevState : document.readyState === 'complete');
    }


    useEffect(() => {
        if (typeof window !== 'undefined'){
            setIsClient(true);
            setIsLoaded(document.readyState === 'complete');
            if(!isLoaded){
                document.addEventListener("readystatechange", changeReadyState);
            }
        }
        return () => {
            document.removeEventListener("readystatechange", changeReadyState);
        }
    }, []);


    return {
        isDesktop: isClient ? isDesktop : true,
        isMobile: isClient ? isMobile : false,
        isClient,
        isLoaded
    };
};

export default useResponsive;
