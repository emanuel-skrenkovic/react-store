import { ShopItem } from 'models';

export interface ShopItemDetailProps {
    item: ShopItem,
    onButtonClick: (item: ShopItem) => void;
    buttonText: string;
}