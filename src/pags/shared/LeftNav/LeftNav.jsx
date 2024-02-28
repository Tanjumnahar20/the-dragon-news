/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftNav = () => {
    const [categories,setCategories] = useState([]);

  useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
    
    return (
        <div>
            <h2 className="text-2xl">All Categories:{categories.length}</h2>
            {
                categories.map(category=><NavLink to={`categories/${category.id}`} className="block ml-4 py-4 text-xl font-thin " key={category.id}>
                
                {category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftNav;