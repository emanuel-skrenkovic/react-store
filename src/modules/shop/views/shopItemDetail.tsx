import React from 'react';

import { ShopItem } from 'models';

export interface ShopItemDetailProps extends React.PropsWithChildren<any> {
    item: ShopItem
}

export const ShopItemDetail: React.FC<ShopItemDetailProps> = ({ item, children }) => {
    return (
        <div className="item">
            <div className="image">
                <img alt="item_image" />
            </div>
            <div className="content">
                <div className="header">
                    {item.name}
                </div>
                <div className="description">
                    Lorem ipsum
                </div>
            </div>
            <div className="extra">
                ${item.price}
                {children}
            </div>
        </div>
    );
};
