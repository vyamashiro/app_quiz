import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login/Login';
import { QuestionPanel } from '../screens/QuestionPanel/QuestionPanel';
import { Quiz } from '../screens/Quiz/Quiz';
import { QuizResult } from '../screens/QuizResult/QuizResult';

const {  Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="login" component={Login} />
        <Screen name="questionPainel" component={QuestionPanel} />
        <Screen name="quiz" component={Quiz} />
        <Screen name="quizResult" component={QuizResult} />
    </Navigator>
  )
}




