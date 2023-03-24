import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import {GoalItem} from "./components/GoalItem";
import {GoalInput} from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {

    const [courseGoals, setCourseGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals =>
            [...currentCourseGoals,
                {text: enteredGoalText, id: Math.random().toString()}
            ])
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals( currentCourseGoals => {
            return currentCourseGoals.filter( (goal)=> goal.id !== id)
        })
    }

  return (
      <>
          <StatusBar style={'light'} />
          <View style={styles.appContainer}>
              <Button
                  title={"Add New Goal"}
                  color={'#a065ec'}
                  onPress={startAddGoalHandler}/>
              <GoalInput
                  onCancel={endAddGoalHandler}
                  visible={modalIsVisible}
                  onAddGoal={addGoalHandler}
              />
              <View style={styles.goalsContainer}>
                  <FlatList
                      data={courseGoals}
                      renderItem={({item})=> {
                          return(
                              <GoalItem
                                  text={item.text}
                                  onDeleteItem={deleteGoalHandler}
                                  id={item.id}
                              />
                          )}
                      }
                      keyExtractor={(item, index)=> item.id}
                  />
              </View>
          </View>
      </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
      flex:1,
      paddingTop: 50,
      paddingHorizontal: 16,
      backgroundColor: '#1e085a'
  },
    goalsContainer: {
      flex: 5
    },

});
