import React from 'react';

import { ShopItemDetailProps } from 'modules/shop';

export const ShopItemDetail: React.FC<ShopItemDetailProps> = (props: React.PropsWithChildren<ShopItemDetailProps>) => {
    const { item, children } = props;

    return (
        <div className="item ui grid" key={item.id}>
            {item.name}
            <div className="item right floated">
                {item.price}
            </div>
            {children}
        </div>
    );
};
