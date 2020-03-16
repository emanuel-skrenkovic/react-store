import React from 'react';

import { ShopItem } from 'models';

export const ShopItemDetail: React.FC<ShopItem> = (props: ShopItem) => {
    return (
        <div className="two wide column">{props.name}</div>
    );
};
