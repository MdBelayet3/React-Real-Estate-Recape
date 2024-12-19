import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { SiSellfy } from "react-icons/si";

const EstateDetails = () => {
    // useState and useEffect hooks for load and contain data
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch("estates.json")
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])
    const { id } = useParams();
    console.log(id);
    console.log(estates);

    const aEstate = estates.find(estate => estate.id === parseInt(id))
    console.log(aEstate);

    return (
        <div className="border max-w-4xl mx-auto space-y-5 my-10 p-10 bg-[#181024] rounded-3xl">
            <img className="rounded-2xl md:h-[500px] w-full text-center" src={aEstate?.image} alt="" />
            <h1 className="font-bold text-xl md:text-3xl">{aEstate?.estate_title}</h1>
            <p className="text-gray-500 md:text-xl md:leading-8 "><span className="font-extrabold">Description :</span> {aEstate?.description}</p>
            <div className="md:flex md:justify-between ">
                <h3 className="flex items-center gap-2"><LuSquareArrowOutUpRight></LuSquareArrowOutUpRight><span className="text-lg font-extrabold">Area : </span>{aEstate?.area}</h3>
                <h3 className="flex items-center gap-2"><MdLocationPin></MdLocationPin><span className="text-lg font-extrabold">Location : </span>{aEstate?.location}</h3>
            </div>
            <hr />
            <div className="md:flex md:justify-between ">
                <h3 className="flex items-center gap-2"><IoPricetags></IoPricetags><span className="text-lg font-extrabold">Price : </span>{aEstate?.price}</h3>
                <h3 className="flex items-center gap-2"><SiSellfy></SiSellfy><span className="text-lg font-extrabold">Status : </span>{aEstate?.status}</h3>
            </div>
            <div>
                <h1><span className="text-lg font-extrabold">Facilities : </span><ul className="ml-20">{aEstate?.facilities.map((facility, idx) => <li className="text-lg list-disc" key={idx}>{facility}</li>)}</ul></h1>
            </div>
            <div className="flex justify-center">
                <Link to="/payment/method"><button className="btn btn-secondary">{aEstate?.status === 'sale' ? 'Bye Now' : "Rent Now"}</button></Link>
            </div>
        </div>
    );
};

export default EstateDetails;