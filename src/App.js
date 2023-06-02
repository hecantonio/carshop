import { AddCliente } from './components/AddCliente';
import { ClienteAppContext } from './context/ClienteContext';

function App() {
  return (
    <div class="container">
      <ClienteAppContext>
        <AddCliente />
      </ClienteAppContext>
    </div>
  );
}

export default App;
