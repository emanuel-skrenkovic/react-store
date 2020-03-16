import React from 'react';

import { ShopItemListProps } from 'modules/shop';

export const ShopItemList: React.FC<ShopItemListProps> = (props: ShopItemListProps) => {
    const { items } = props;

    const renderItems = () => {
        return items.map(i => (
            <div className="item ui grid" key={i.id}>
                {i.name}
                <div className="item right floated">
                    {i.price}
                </div>
                <div className="item right floated">
                    <button className="ui button">Add to cart</button>
                </div>
            </div>)
        );
    };

    return items
        ? (
            <div className="ui celled list">
                  {renderItems()}
            </div>
         ) : null;
};
