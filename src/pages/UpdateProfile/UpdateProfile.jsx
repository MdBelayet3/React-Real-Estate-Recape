import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button className='btn btn-primary' onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
};

export default UpdateProfile;