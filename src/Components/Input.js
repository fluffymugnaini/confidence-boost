
function Input({ handleChange, handleClick }) {
    return (
        <div className="main">
            <h1 className="title">ARE YOU FEELING SAD?</h1>
            <div className="inputbutton">
                <input className="input" onChange={handleChange} placeholder="What's your name?"></input>
                <button className="confidence-button" onClick={handleClick}>CONFIDENCE CLICK</button>
            </div>
        </div>
    )
}

export default Input;