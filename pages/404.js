import { useRouter } from 'next/router';
import React, { useEffect } from 'react';



const ErrorPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <div>
            <h1>This is Error page. And this url dose not exist.</h1>
        </div>
    );
};

export default ErrorPage;