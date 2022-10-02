import { createContext } from 'react';
import { OrderItem } from './PointOfSalesComponent/PointOfSalesComponent.types';

export const OrderContext = createContext({
    orderItemsLoaded: false,
    hasError: false,
    orderTotal: 0,
    orderItems: new Array<OrderItem>(),
    GetNewOrder: function () {},
    UpdateOrderQuantity: function (order: OrderItem, newQuantity: number) {},
});
