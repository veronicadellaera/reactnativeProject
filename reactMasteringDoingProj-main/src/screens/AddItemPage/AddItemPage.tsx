import React, {Component, useState} from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from 'react-native';
import WavyBackground from "../../components/WavyBG/WavyBackground";
import {FloatingAction} from "react-native-floating-action";
import {Picker} from '@react-native-picker/picker';
import APP_THEME from "../../theme";
import DateTimePicker from '@react-native-community/datetimepicker';
import {ReaderWriterService} from "../../services/ReaderWriter.service";

class LabelValueModel {
    label: string;
    value: string;
}
export function RnIf({boolean, ...props}) {
    const { children } = props;
    if (boolean)
        return (
            {...children}
        );
    return null;
}

export class AddItemPage extends Component<any, any> {
    actions = [
        {text: "Language", name: "bt_language", position: 1},
        {text: "Accessibility", name: "bt_accessibility", position: 2},
        {text: "Location", name: "bt_room", position: 3},
        {text: "Video", name: "bt_videocam", position: 4}
    ];
    itemName = '';
    selectedCategory = '';
    foodCategories: LabelValueModel[] = [];
    selectedLocation = '';
    storeLocations: LabelValueModel[] = [];
    selectedConfectionType = '';
    confectionTypes: LabelValueModel[] = [];
    currentDate = new Date();
    showDatePicker = false;

    constructor(props: any) {
        super(props);
        this.init();
    }
    init() {
        this.initFoodCats();
        this.initStoreLocations();
        this.initConfectionTypes();
    }


    initFoodCats(): void {
        this.foodCategories = [];
        this.foodCategories.push({value: '', label: 'Choose Category'});
        this.foodCategories.push({value: 'fruit', label: 'Fruit'});
        this.foodCategories.push({value: 'veg', label: 'Vegetable'});
        this.foodCategories.push({value: 'dairy', label: 'Dairy'});
        this.foodCategories.push({value: 'fish', label: 'Fish'});
        this.foodCategories.push({value: 'meat', label: 'Meat'});
        this.foodCategories.push({value: 'liquid', label: 'Liquid'});
    }

    initStoreLocations(): void {
        this.storeLocations = [];
        this.storeLocations.push({value: '', label: 'Choose Store Location'});
        this.storeLocations.push({value: 'fridge', label: 'Fridge'});
        this.storeLocations.push({value: 'freezer', label: 'Freezer'});
        this.storeLocations.push({value: 'pantry', label: 'Pantry'});
        this.storeLocations.push({value: 'canteen', label: 'Canteen'});
    }

    initConfectionTypes(): void {
        this.confectionTypes = [];
        this.confectionTypes.push({value: '', label: 'Choose Confection'});
        this.confectionTypes.push({value: 'fresh', label: 'Fresh'});
        this.confectionTypes.push({value: 'canned', label: 'Canned'});
        this.confectionTypes.push({value: 'frozen', label: 'Frozen'});
        this.confectionTypes.push({value: 'cured', label: 'Cured'});
    }

    onChangeText(text: string) {
        this.itemName = text;
    }

    onStoreLocationChange(text: string, idx?: number) {
        this.selectedLocation = text;
        this.setState({pickerValue: text})
    }

    onFoodCategoryChange(text: string, idx?: number) {
        this.selectedCategory = text;
        this.setState({pickerValue: this.selectedCategory})
    }

    onFoodConfectionTypeChange(text: string, idx?: number) {
        this.selectedConfectionType = text;
        this.setState({pickerValue: text})
    }

    onExpireDateChange(d: Date) {
        this.showDatePicker = false;
        this.currentDate = d;
        this.setState({showDatePicker: this.showDatePicker})
    }

    onDatePickerButtonClick(event?: any) {
        this.showDatePicker = true;
        this.setState({showDatePicker: this.showDatePicker})
    }

    onSaveButtonClick() {
        const itemsArrKey = "availableItemsArrKey";
        if (this.itemName == null || this.itemName.length == 0) {
            Alert.alert('Error', 'Item name '); return;
        }
        if (this.selectedCategory == null || this.selectedCategory.length == 0) {
            Alert.alert('Error', 'Please select a category'); return;
        }
        if (this.selectedLocation == null || this.selectedLocation.length == 0) {
            Alert.alert('Error', 'Please select a location '); return;
        }
        if (this.selectedConfectionType == null || this.selectedConfectionType.length == 0) {
            Alert.alert('Error', 'Please select confection type'); return;
        }
        const itemMeta = {
            name: this.itemName,
            cat: this.selectedCategory,
            loc: this.selectedLocation,
            confType: this.selectedConfectionType,
            date: this.currentDate
        }

        ReaderWriterService.getInstance().readData(itemsArrKey)
            .then(
            (val) => {
                let myArr = [];
                if (val != null) {
                    myArr = JSON.parse(val);
                }
                myArr.push(itemMeta);
                console.log('Async storage data read');
                console.log(val);
                ReaderWriterService.getInstance().writeData(itemsArrKey, JSON.stringify(myArr))
                    .then(
                        (writtenData) => {
                            Alert.alert('Success', 'Item added successfully!');
                        }
                    )
            }
        )

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Add Items</Text>
                <TextInput style={styles.textInput}
                           placeholder="Item Name"
                           onChangeText={text => this.onChangeText(text)}/>
                <Picker
                    style={styles.picker}
                    selectedValue={this.selectedCategory}
                    onValueChange={(x, num) => this.onFoodCategoryChange(x, num)}>
                    {this.foodCategories.map((cat, key) => {
                            return (<Picker.Item style={styles.pickerOptions} label={cat.label} value={cat.value} key={key}/>)
                    })}
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue={this.selectedLocation}
                    onValueChange={(x, y) => this.onStoreLocationChange(x, y)}>
                    {this.storeLocations.map((cat, key) => {
                        return (<Picker.Item label={cat.label} value={cat.value} key={key}/>)
                    })}
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue={this.selectedConfectionType}
                    onValueChange={(x, y) => this.onFoodConfectionTypeChange(x, y)}>
                    {this.confectionTypes.map((cat, key) => {
                        return (<Picker.Item label={cat.label} value={cat.value} key={key}/>)
                    })}
                </Picker>

                {this.showDatePicker && (<DateTimePicker
                    testID="dateTimePicker"
                    value={this.currentDate}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={(x, date: Date) => this.onExpireDateChange(date)}
                />)}
                <TouchableOpacity
                    style={{...styles.datePickerButton }}
                    onPress={ (event) => this.onDatePickerButtonClick()}>
                    <Text>{this.currentDate.toDateString()}</Text>
                </TouchableOpacity>
                <Button
                    title="Save Items"
                    color={APP_THEME.colors.secondary}
                    accessibilityLabel="Learn more about this purple button"
                onPress={ (_) => this.onSaveButtonClick()}/>
                <WavyBackground imagePath={require('./../../../assets/images/wave4.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    headerTitle: {
        fontSize: 36,
        marginBottom: 36,
    },
    textInput: {
        width: "60%",
        minWidth: 300,
        borderWidth: 1,
        minHeight: 40,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#ccc',
        paddingLeft: 8,
        marginBottom: 16,
    },
    picker: {
        width: "60%",
        minWidth: 300,
        minHeight: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: '#ccc',
        paddingLeft: 8,
        marginBottom: 16,
    },
    pickerOptions: {
        minHeight: 50,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#ccc',
    },
    datePickerButton: {
        width: "60%",
        minWidth: 300,
        borderWidth: 1,
        minHeight: 40,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#ccc',
        paddingLeft: 8,
        marginBottom: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center"
    }
});


export default AddItemPage;