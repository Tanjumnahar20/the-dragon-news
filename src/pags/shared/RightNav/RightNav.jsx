import { FaGoogle, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div>
            {/* first portion */}
            <div className="p-4 space-y-3 mb-3">
                <h1 className="text-4xl">login with</h1>
                <button className="btn w-full">
                    <FaGoogle />

                    Google
                </button>
                <button className="btn w-full">
                    <FaGithubSquare />

                    Github
                </button>
            </div>

            {/* second portion */}
            <div className="p-4  mb-3">
                <h1 className="text-4xl mb-2">Find Us on</h1>
                <a className='p-4 flex items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-2'></FaFacebook>
                    facebook
                </a>
                <a className='p-4 flex items-center border-x' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    Twitter
                </a>
                <a className='p-4 flex items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    instagram
                </a>
            </div>

            {/* 3rd portion */}
            <div className="p-4 space-y-3 mb-3">
                <h1 className="text-4xl">Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               
            </div>
        </div>
    );
};

export default RightNav;