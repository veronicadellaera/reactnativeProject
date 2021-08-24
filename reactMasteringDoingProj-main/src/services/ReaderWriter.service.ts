
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from "react-native";

export class ReaderWriterService {
    private static instance: ReaderWriterService;
    keyPrefix = "@kitchenBuddy";

    static getInstance() {
        if (this.instance == null) {
            this.instance = new ReaderWriterService();
        }
        return this.instance;
    }

    async readData(key: string) {
       try {
           const value = await AsyncStorage.getItem(this.keyPrefix + ':' + key)
           return value
       } catch(e) {
           Alert.alert('Error', 'An error occurred while reading the data!');
       }
    }

    async writeData (key: string, value: string) {
        try {
            await AsyncStorage.setItem(this.keyPrefix + ':' + key, value)
        } catch (e) {
            // saving error
            Alert.alert('Error', 'An error occurred writing data!');
        }
    }
}