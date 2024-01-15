import "./BurguerBotton.css"

const BurguerBotton = () => {
    ///funcion para adicionar la clase active al boton
    const handleBurguer = () => {
        const burguer = document.querySelector(".nav-icon-5")
        burguer.classList.toggle("open")
    }

    return (
        <div onClick={handleBurguer} className="icon nav-icon-5">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export {BurguerBotton}