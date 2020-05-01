import React from 'react';

import { ShopItem } from 'models';

export interface ShopItemDetailProps extends React.PropsWithChildren<any> {
    item: ShopItem
}

export const ShopItemDetail: React.FC<ShopItemDetailProps> = ({ item, children }) => {
    return (
        <div className="item ui grid" key={item.id}>
            {item.name}
            {children}
            <div className="item right floated">
                {item.price}
            </div>
        </div>
    );
};
