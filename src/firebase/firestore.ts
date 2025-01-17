import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from ".";
import React from "react";

const db = getFirestore(app);

type IBaseModel = Record<string, any>;
type FromId<T extends IBaseModel> = (id: string) => Promise<T | undefined>

abstract class Model {
    static collection: string;

    constructor(public readonly id: string) { }

    static async fromId(id: string) {
        const ref = doc(db, this.collection, id);
        const snapshot = await getDoc(ref)
        return snapshot.exists() ? { id, ...snapshot.data() } : undefined;
    }
}

export class Console extends Model {
    static collection = 'consoles';
    static fromId = Model.fromId as FromId<Console>

    public icon!: string;
    public name!: string;
}

type ModelContructor<T extends IBaseModel = {}> = {
    new(id: string): Model;
    fromId(id: string): Promise<T | undefined>
}

export function useFirestoreModel<T extends IBaseModel>(model: ModelContructor<T>, id: string) {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState<T>();

    React.useEffect(() => {
        setLoading(true)
        model.fromId(id).then((data) => setData(data)).finally(() => setLoading(false))
    }, [model, id])

    return { data, loading }
}
