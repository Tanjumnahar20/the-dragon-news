import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightNav from "../shared/RightNav/RightNav";
import Navbar from "../shared/Navbar/Navbar";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
               <div className="col-span-3">
                <h2>details here:{id}</h2>
               </div>
               <div>
               <RightNav></RightNav>
               </div>
            </div>
        </div>
    );
};

export default NewsDetails;