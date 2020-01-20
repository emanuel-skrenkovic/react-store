import React from 'react';

import { ShopItem } from 'models';

export const ShopItemDetail: React.FC<ShopItem> = (props: ShopItem) => {
    return (
        <div>{props.name}</div>
    );
};
