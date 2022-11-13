import axios from 'axios';
import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigationType } from 'react-router-dom';
import { addLink } from '../features/basketer/counterBasket'
import { useNavigate } from 'react-router-dom';

const SmallCard = ({ item }) => {
    console.log(item)
    let dispatch = useDispatch()
    const navigate = useNavigate()

    const AddLink = (value) => {
        dispatch(addLink(value))
        // navigate('/ReceiveLink')
    }
    
    return (
        <div className="flex justify-center">
            <div className="p-2.5 w-6/12 border border-#334155 mt-5">
                <h1>
                    <b>
                    {item.full_name}
                    </b>
                </h1> 
                <div 
                style={{width:'100%'}}
                className="if flex justify-around flex-col"
                >
                    <p>
                        {item.fork}
                    </p>
                    <p>
                        {item.url}
                    </p>
                </div>
                <button 
                className="w-14 px-2 py-1 bg-lime-600 rounded"
                onClick={() => AddLink(item.clone_url)}
                >
                    Add+
                </button>
            </div>
        </div>
    );
};

export default SmallCard;