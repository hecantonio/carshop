import { UiAppContext } from './context/UiContext';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <div className="container">
      <UiAppContext>
        <AppRouter />
      </UiAppContext>
    </div>
  );
}

export default App;
