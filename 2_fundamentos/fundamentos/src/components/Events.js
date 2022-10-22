const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou o evento!")
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div className="centralizar">
            {/* Pode fazeer */}
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou')}>Clique aqui também</button>
            </div>
            {/* Não se deve fazeer */}
            <div>
                <button onClick={() => {
                    console.log('Isso não deveria existir =)')
                }}>Clique aqui - Modo errado</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events