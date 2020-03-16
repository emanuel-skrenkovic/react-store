import React from 'react';

import { ShopItemDetailProps } from 'modules/shop';

export const ShopItemDetail: React.FC<ShopItemDetailProps> =
    ({ item, onButtonClick, buttonText }: ShopItemDetailProps) => {
    return (
        <div className="item ui grid" key={item.id}>
            {item.name}
            <div className="item right floated">
                {item.price}
            </div>
            <div className="item right floated">
                <button className="ui button" onClick={() => onButtonClick(item)}>{buttonText}</button>
            </div>
        </div>
    );
};
