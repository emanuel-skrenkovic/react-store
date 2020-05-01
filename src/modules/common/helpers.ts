import { Dictionary, IndexedEntity } from 'models';

export const isPromise = (obj: any): obj is Promise<any> => {
    return obj && (obj as Promise<any>).then !== undefined;
}

export const convertArrayToMap = <T extends IndexedEntity>(arr: T[]): Dictionary<string, T> => {
    return arr.reduce((acc: Dictionary<string, T>, x: T) => {
        return { ...acc, [x.id]: x }
        }, {});
};