import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"
    );
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }

    if (ques !== 9) {
      // setQues(ques + 1);
      // setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      handleNextPress();
    } else {
      navigation.navigate("Result", { score });
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>LOADING...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>

            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOption(options[0]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOption(options[1]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOption(options[2]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  handleSelectedOption(options[3]);
                }}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
              {ques !== 9 ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Result", { score })}
                >
                  <Text style={styles.buttonText}>SHOW RESULT</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#435BF3",
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#7F2CCB",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  parent: {
    height: "100%",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  loadingText: {
    fontSize: 32,
    fontWeight: "500",
  },
});

export default Quiz;
