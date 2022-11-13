import React from 'react';
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Links from '../components/Links'


const ReceiveLink = () => {
    let data = JSON.parse(localStorage.getItem("basket"))
    console.log(data)
    return (
        <div>
            {
                data.map((item,index) => {
                    return(
                        <Links item={item} key={index} />
                    )
                })
            }
        </div>
    );
};

export default ReceiveLink;