import { useState, useEffect } from 'react';

const useContentLoaded = (delay = 300) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isLoaded;
};

export default useContentLoaded;