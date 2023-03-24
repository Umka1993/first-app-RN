import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {__waitForEmptyLogQueueAsync} from "expo/build/logs/RemoteLogging";

export const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)

    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')

    }

    console.log('Goal input ')

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder={'Your course goal...'}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={'Cancel'} onPress={props.onCancel} color={'#F31282'}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Add goal'} onPress={addGoalHandler} color={'#B180f0'}/>
                    </View>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    inputText: {
        width: '100%',
        marginRight: 8,
        padding: 16,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderWidth: 1,
        borderRadius: 6,
        color: "#120438"
    },
    image: {
      width: 100,
      height: 100,
      margin: 20

    },
    buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})

