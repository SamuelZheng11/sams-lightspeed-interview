import PointOfSalesComponent from './PointOfSalesComponent/PointOfSalesComponent';
import { useEffect, useState } from 'react';
import { OrderContext } from './App.context';
import { OrderItem } from './PointOfSalesComponent/PointOfSalesComponent.types';
import { GetNewOrder, OrderData } from './http.service';

import './App.scss';

export default function App() {
    // State management could also be done using Redux instead of React Context,
    // but I dont want to tie this application to Redux in case it is to be exported as a stand alone component
    const [orderItems, setOrderItems] = useState(Array<OrderItem>());
    const [hasError, setHasError] = useState(false);
    const [orderTotal, setOrderTotal] = useState(0);
    const [orderItemsLoaded, setOrderItemsLoaded] = useState(false);

    useEffect(() => {
        GetNewOrderInfo();
    }, []);

    useEffect(() => {
        setOrderTotal(
            orderItems.reduce((total, currentOrder) => {
                return total + currentOrder.price * currentOrder.quantity;
            }, 0)
        );
    }, [orderItems]);

    const GetNewOrderInfo = () => {
        setOrderItemsLoaded(false);
        GetNewOrder()
            .then((newOrders) => {
                setOrderItems(
                    (newOrders as OrderData[]).map((order) => {
                        return {
                            id: order.id,
                            name: order.name,
                            price: parseFloat(order.price),
                            quantity: 1,
                        } as OrderItem;
                    })
                );
                setHasError(false);
            })
            .catch((error) => {
                setOrderItems([]);
                setHasError(true);
            })
            .finally(() => {
                setOrderItemsLoaded(true);
            });
    };

    const updateOrderQuantity = (
        orderToUpdate: OrderItem,
        newQuantity: number
    ) => {
        const updatedOrders = orderItems.map((order) => order);
        let updatedOrder = updatedOrders.find(
            (order) => order.id === orderToUpdate.id
        );
        if (updatedOrder?.id) {
            updatedOrder!.quantity = newQuantity;
        }

        setOrderItems(updatedOrders);
    };

    return (
        <OrderContext.Provider
            value={{
                orderItemsLoaded: orderItemsLoaded,
                hasError: hasError,
                orderTotal: orderTotal,
                orderItems: orderItems,
                GetNewOrder: GetNewOrderInfo,
                UpdateOrderQuantity: updateOrderQuantity,
            }}
        >
            <div data-testid="app" className="app">
                <PointOfSalesComponent></PointOfSalesComponent>
            </div>
        </OrderContext.Provider>
    );
}
