import './App.css';
import AppLayout from './components/Layouts/AppLayout';
import PlanLayout from './components/Layouts/PlanLayout';
import Welcome from './components/Welcome';

function App() {
  return (
    <PlanLayout>
      <Welcome />
      <AppLayout>

      </AppLayout>
    </PlanLayout>
  );
}

export default App;
