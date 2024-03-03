import React from 'react';

const Orders = () => {
    const hidePanel = () => {
        let ordersPanel = document.getElementById('orders-panel');
        if (ordersPanel) {
            ordersPanel.style.display = 'none';
        }
    };

    const handleContentClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    return (
        <div className='kf-orders-container' id='orders-panel' onClick={hidePanel}>
            <div className='kf-orders-content' onClick={handleContentClick}>
                <h1>Orders</h1>
            </div>
        </div>
    );
};

export default Orders;
