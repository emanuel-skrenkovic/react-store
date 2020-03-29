import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ShopItem } from 'models';
import { ShopItemListProps, ShopItemDetail } from 'modules/shop';
import { attemptAddItem } from 'modules/cart';

interface Status {
    id: number;
    message: string;
}

export const ShopItemList: React.FC<ShopItemListProps> = (props: ShopItemListProps) => {
    const { items } = props;
    const dispatch = useDispatch();

    const [statuses, setStatuses] = useState([] as Status[]);

    const onClickAddToCart = (item: ShopItem) => {
        const id: number = statuses.length + 1; // TODO: check if safe

        const status = {
            id: id,
            message: `Added ${item.name} to cart.`
        } as Status;

        const newStatuses = [
            ...statuses,
            status
        ];

        setStatuses(newStatuses);

        setTimeout(() => setStatuses(statuses.filter(s => s.id === id)), 3000);

        dispatch(attemptAddItem(item));
    };

    const renderItems = () => {
        if (!items) {
            return null;
        }

        return (
            <div className="ui celled list">
                {items.map(i => {
                    return (
                        <ShopItemDetail key={i.id} item={i}>
                            <div className="item right floated ">
                                <button className="ui button" onClick={() => onClickAddToCart(i)}>Add to Cart</button>
                                <input className="ui small input" type="number" />
                            </div>
                        </ShopItemDetail>
                    );
                })}
                <div className="ui container">
                    {statuses &&  statuses.map(s => {
                        return (
                            <div className="ui success message" key={s.id}>
                                <i className="close icon" onClick={() => setStatuses(statuses.filter(stat => stat.id !== s.id))}/>
                                <div className="header">
                                    {s.message}
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        );
    };

    return <div>{renderItems()}</div>;
};
