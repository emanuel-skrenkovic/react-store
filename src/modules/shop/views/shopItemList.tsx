import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ShopItem } from 'models';
import { ShopItemDetail } from 'modules/shop';
import { attemptAddItem } from 'modules/cart';

interface Status {
    id: number;
    message: string;
}

export interface ShopItemListProps {
    items: ShopItem[];
}

export const ShopItemList: React.FC<ShopItemListProps> = ({ items }) => {
    const dispatch = useDispatch();

    const [statuses, setStatuses] = useState([] as Status[]);

    const onClickAddToCart = (e: React.FormEvent<HTMLFormElement>, item: ShopItem) => {
        e.preventDefault();

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
                        <div className="item">
                            <div className="ui grid">
                                <div className="row">
                                    <div className="thirteen wide column">
                                        <ShopItemDetail key={i.id} item={i} />
                                    </div>
                                    <div className="three wide column">
                                        <form className="ui form" action="" onClick={(e) => onClickAddToCart(e, i)}>
                                            <button className="ui button" >Add to Cart</button>
                                            <input className="ui small input" type="number" />
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
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
