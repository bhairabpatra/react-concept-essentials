import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Prodcuts = () => {
    
    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchProducts = async () => {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data;
    };

    const { data, isLoading,error,refetch} = useQuery('products', fetchProducts);

    if (isLoading) {
        return <h1>Loading ....</h1>;
    }

    if (error) {
        return <p className="error">{error.message}</p>;
    }

    return (
        <div>
            <ul>
                {data?.map((product) => (
                <li key={product?.id}>{product?.title}</li>
                ))}
            </ul>
            <button onClick={refetch}>refetch</button>
        </div>
    );
    };

export default Prodcuts;


