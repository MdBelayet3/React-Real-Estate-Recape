import { useEffect, useState } from "react";
import PaymentDetails from "./PaymentDetails";

const Payment = () => {
    // useState and useEffect Hook
    const [payments, setPayments] = useState([]);
    useEffect(() =>{
        fetch("/public/payment.json")
        .then(res => res.json())
        .then(data =>setPayments(data))
    },[])
    console.log(payments);
    return (
        <div>
            <h1 className="text-center text-3xl md:text-5xl font-bold my-10">Payment Methods</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:mx-48 gap-5">
                {payments.map(payment => <PaymentDetails key={payment.id} payment={payment} ></PaymentDetails>)}
            </div>
        </div>
    );
};

export default Payment;