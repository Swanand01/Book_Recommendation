import { useState, useCallback } from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState({});

    const fetchData = useCallback(
        async (url, method, body, headers, callback) => {
            try {
                setIsLoading(true);
                const res = await fetch(url, {
                    method: method || "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                    },
                    body: JSON.stringify(body),
                });
                if (!res.ok) {
                    setIsLoading(false);
                    return;
                }
                const data = await res.json();
                setApiData(data);
                setIsLoading(false);
                if (callback) callback(data);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        },
        []
    );
    return [fetchData, apiData, isLoading, setIsLoading];
};
export default useFetch;
