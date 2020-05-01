import 'firebase/firestore';

import { IndexedEntity } from 'models';

export const mapToIndexedEntities = <T extends IndexedEntity>(documents: firebase.firestore.QueryDocumentSnapshot[]) => {
    return documents.map(doc => { return { ...doc.data(), id: doc.id }}) as T[];
};