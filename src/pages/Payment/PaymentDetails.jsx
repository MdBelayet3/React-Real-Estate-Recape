import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PaymentDetails = ({ payment }) => {
    console.log(payment)
    return (
        <div className='flex justify-center'>
            <div className="tooltip" data-tip={payment?.name}>
                <Link to={payment?.link}><button className=""><img className=' h-[200px] w-[200px] rounded-3xl' src={payment?.image} alt="" /></button></Link>
            </div>
        </div>
    );
};

PaymentDetails.propTypes = {
    payment: PropTypes.object.isRequired,
};

export default PaymentDetails;
