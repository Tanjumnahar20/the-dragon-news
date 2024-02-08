import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
<img className='mx-auto' src={logo} alt="" />
<p className='font-poppins'><small>news coming soon</small></p>
<p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;