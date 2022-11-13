import React from 'react';

const Links = ({ item }) => {
    return (
        <div>
            <h1>{item.clone_url}</h1>
        </div>
    );
};

export default Links;