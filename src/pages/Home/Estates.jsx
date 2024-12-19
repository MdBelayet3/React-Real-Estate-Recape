import { useEffect } from "react";
import { useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() =>{
        fetch("estates.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setEstates(data);
        })
    },[])
    console.log(estates.length);
    return (
        <div className="my-20">
            <h2 className="text-5xl  mb-10 text-center">All Properties</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)}
            </div>
        </div>
    );
};

export default Estates;