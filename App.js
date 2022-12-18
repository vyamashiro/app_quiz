import { Quiz } from './src/Quiz/Quiz';
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <Quiz />
    </>
  );
}
