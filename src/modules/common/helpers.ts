import { Dictionary, IndexedEntity } from 'models';

export const isPromise = (obj: any): boolean => {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

export const convertArrayToMap = <T extends IndexedEntity>(arr: T[]): Dictionary<string, T> => {
    return arr.reduce((acc: Dictionary<string, T>, x: T) => {
        return { ...acc, [x.id]: x }
        }, {});
};