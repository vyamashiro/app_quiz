import { StatusBar } from 'react-native';
import { Login } from './src/screens/Login/Login';
import { QuestionPanel } from './src/screens/QuestionPanel/QuestionPanel';
import { Quiz } from './src/screens/Quiz/Quiz';
import { QuizResult } from './src/screens/QuizResult/QuizResult';
import { Routes } from './src/routes/index';

export default function App() {
  return (
    <>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
      />
      <Routes />
        {/* <Login /> */}
        {/* <QuestionPanel /> */}
        {/* <Quiz /> */}
        {/* <QuizResult /> */}
    </>
  );
}
