const Challenge = () => {

    const a = 5
    const b = 3
    const soma = a + b

    const handleSomar = () => {
        console.log(a + b)
    }

    const render = (x) => {
        if (x) {
            return <h1> Os valores são {a} e {b}
                somando os dois teremos {soma} .</h1>
        }
    }

    return (
        <div className="centralizar">
            <button onClick={handleSomar}>
                clique aqui para somar
            </button>
            {render(true)}
        </div>
    )

}

export default Challenge