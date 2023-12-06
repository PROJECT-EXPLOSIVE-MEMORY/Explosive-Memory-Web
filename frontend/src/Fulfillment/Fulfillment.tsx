import React from 'react';
//import { Link } from 'react-router-dom';
import data from './data';


function OrdersToFulfill() {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Orders To Fulfill</h3>
            </div>
            <div className="order-list">
                <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Ordered Date</th>
                        <th>USER</th>
                        <th>PAID AT</th>
                        <th>Shipped</th>
                    </tr>
                </thead>
                <tbody>
                    {data.orders.map(order => (
                    <tr className={order.isShipped ? '' : 'active'} key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.productName}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.user.name}</td>
                        <td>{order.paidAt}</td>
                        <td>{order.isShipped.toString()}</td>
                    </tr>
                    ))}
                </tbody>

                </table>
            </div>
        </div>);
};


export default OrdersToFulfill;