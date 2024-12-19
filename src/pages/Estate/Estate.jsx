import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {
    // console.log(estate)
    return (
        <div>
            <div className='flex flex-wrap flex-col rounded-2xl bg-[#F3F3F3] p-8 space-y-5'>
                <img className=' rounded-2xl h-[250px]' src={estate?.image} alt="" />
                <h2 className="flex-grow text-xl text-black">{estate?.estate_title}</h2>
                <h3 className="text-xl text-[#131313B3]">{estate?.price}</h3>
                <h4 className='text-black'>{estate?.status}</h4>
                <Link to={`/estate/${estate.id}`}><button className='btn btn-secondary'>View Property</button></Link>
            </div>

        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object.isRequired,
};

export default Estate;