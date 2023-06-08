import { UiAppContext } from './context/UiContext';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <UiAppContext>
      <AppRouter />
    </UiAppContext>
  );
}

export default App;
