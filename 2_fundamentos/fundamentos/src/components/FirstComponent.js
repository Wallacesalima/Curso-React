import '../App.css';
import '../index.css';
import MyComponent from './MyComponent';

const FirstComponent = () => {
    return (
        <div className="mudar_Cor">
            <h1>Meu Primeiro Componente</h1>
            <MyComponent/>
            <p>Meu Texto</p>
        </div>
    )
}

export default FirstComponent