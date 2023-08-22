import { useState, useEffect, useCallback } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);





        const getData = useCallback(async () => {
            setIsLoading(true);
            const newUrl = new URL(url);
            try {
                const request = await fetch(newUrl);
                if (!request.ok) {
                    throw new Error('Failed fetch.')
                }
                const response = await request.json();
                setData(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }, [url])
    useEffect(() => {
        getData();
    }, [getData])

    const refetch = getData;

    return [data, error, isLoading, refetch]
}

export default useFetch;