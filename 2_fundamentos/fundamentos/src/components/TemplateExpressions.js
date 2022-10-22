//  Components
import MyComponent from "./MyComponent"

const TemplateExpressions = () => {

    const name = "Wallace Sá"
    const data = {
        age: 23,
        job: "Estudante"
    }

    return (
        <div className="conteudo">
            <MyComponent/>
            <h2> Olá {name}, tudo bem? </h2>
            <p> Você é: {data.job} e possui {data.age}  anos. </p>
            <p> { 4 + 4 }</p>
        </div>
    )
}

export default TemplateExpressions