import { Text } from "react-native-paper";
import { Console, useFirestoreModel } from "../../firebase/firestore";

export default function ConsoleCard() {
    const { data, loading } = useFirestoreModel(Console, '141MeYSbgQc6Z2wh1uFA');

    return loading ? <Text>loading</Text> : data ? <Text>{JSON.stringify(data)}</Text> : <Text>sem data</Text>
}