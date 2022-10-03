import { Button, Text } from '@ls-jacob-lawrence/fe-interview-ds';
import { useContext } from 'react';
import { OrderContext } from '../App.context';
import DividerComponent from '../CoreComponents/DividerComponent/DividerComponent';
import InputComponent from '../CoreComponents/InputComponent/InputComponent';
import ListComponent from '../CoreComponents/ListComponent/ListComponent';
import { totalFormatter } from '../tools/number/TotalFormatter';
import {
    NEW_ORDER_BUTTON,
    TOTAL_TEXT,
} from './PointOfSalesComponent.constants';

import './PointOfSalesComponent.scss';

export default function PointOfSalesComponent() {
    const orderContext = useContext(OrderContext);

    const onNewOrderClicked = () => {
        orderContext.GetNewOrder();
    };

    return (
        <div data-testid="pos" className="point-of-sales">
            <div className="point-of-sales-list-container">
                <Button
                    onClick={onNewOrderClicked}
                    disabled={!orderContext.orderItemsLoaded}
                >
                    <Text
                        className="point-of-sales-order-button-text"
                        bold={true}
                        align="center"
                        as="div"
                    >
                        {NEW_ORDER_BUTTON}
                    </Text>
                </Button>
                <ListComponent isLoading={!orderContext.orderItemsLoaded}>
                    {orderContext.orderItems.map((order) => {
                        return (
                            <div
                                key={order.id.toString()}
                                className="point-of-sales-list-item"
                            >
                                <div className="order-name-text">
                                    <Text className="point-of-sales-list-item-text">
                                        {order.name}
                                    </Text>
                                </div>
                                <div className="order-input-container">
                                    <InputComponent
                                        value={1}
                                        onValueChange={(newValue: number) => {
                                            orderContext.UpdateOrderQuantity(
                                                order,
                                                newValue
                                            );
                                        }}
                                    ></InputComponent>
                                </div>
                                <div className="order-price-text">
                                    <Text
                                        className="point-of-sales-list-item-text"
                                        bold={true}
                                    >
                                        $
                                        {totalFormatter.format(
                                            order.price * order.quantity
                                        )}
                                    </Text>
                                </div>
                            </div>
                        );
                    })}
                </ListComponent>
            </div>

            <DividerComponent></DividerComponent>
            <div className="point-of-sales-total-container">
                <Text size="large" bold={true} align="left">
                    {TOTAL_TEXT}
                </Text>
                <Text size="large" bold={true} align="right">
                    {totalFormatter.format(orderContext.orderTotal)}
                </Text>
            </div>
        </div>
    );
}
