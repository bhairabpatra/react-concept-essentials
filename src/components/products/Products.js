import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Prodcuts = () => {
    
    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchProducts = async () => {
        const response = await axios.get(apiUrl);
        return response?.data;
    };

    const { data, isLoading,error,refetch} = useQuery('products', () => fetchProducts());

    if (isLoading) {
        return <h1>Loading ....</h1>;
    }

    if (error) {
        return <p className="error">{error.message}</p>;
    }

    return (
        <div className="container">
            <ul>
                {data?.map((product) => (
                <li key={product?.id}>{product?.title}</li>
                ))}
            </ul>
            <button onClick={refetch} className="btn btn-primary btn-md">Re fetch</button>
        </div>
    );
    };

export default Prodcuts;


