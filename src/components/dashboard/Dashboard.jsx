const Cards ({user}) {
    return(
        <div className="card-container">
            <div className="top">
                <div className="balance"></div>
                <div className="rcs"></div>
            </div>
            <div className="middle">
                <div className="cardHolder"></div>
                <div className="validDate"></div>
            </div>
            <div className="bottom">
                <div className="cardNumber"></div>
            </div>
        </div>
    )
}