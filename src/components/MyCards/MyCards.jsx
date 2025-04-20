import '../../css/MyCard.css'
const Card = () => {
    return(
        <>
            {/*Desktop */}
            <div className="card hidden md:flex flex-col card w-px-325 h-px-235">
                <div className="top flex">
                    <div className="balance flex flex-col">
                        <div>Balance</div>
                        <div className="amount">R56</div>
                    </div>
                    <img src="./Chip_Card.png" alt="card chip" />
                </div>
                <div className="middle">
                    <div className="left">
                        <div>CARDHOLDER</div>
                        <div className="">Thabelo Budeli</div>
                    </div>
                    <div className="right">
                        <div className="">VALID UNTIL</div>
                        <div className="">12/22</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">3778 **** **** 1234</div>
                    <div className="right">
                        <img src="./mastercard.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card