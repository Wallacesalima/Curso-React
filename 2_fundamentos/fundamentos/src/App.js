//  Components
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
// styles / CSS
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="estilo_h1">Fundamentos React</h1>
      <FirstComponent />
      <MyComponent/>
      <TemplateExpressions />
      <Events />
      <Challenge/>
    </div>
  );
}

export default App;
