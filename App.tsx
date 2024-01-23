import Toast from 'react-native-toast-message';
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <>
      <Home />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
