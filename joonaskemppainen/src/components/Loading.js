import Logo from "../resources/logo.png"

function Loading() {
    return (
        <div className="loading-container">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="loading-animation"></div>
        </div>
    )
}

export default Loading