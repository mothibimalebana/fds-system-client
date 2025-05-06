import { CardProvider, UseCardList } from "../../context/CardContext"
import CardCarousel from "../CardCarousel"
import '../../css/Dashboard.css'


const TransactionsContent = () => {
      const { addCard } = UseCardList()
    return(
        <>
        <div className="container flex">
            {/*Mobile*/}
            <section className="md:hidden w-full">
                <div className="container flex flex-col justify-between">
                    <div className="myCards flex flex-col gap-3">
                        <h3 className="cardsTitle">My Cards</h3>
<button onClick={addCard} className="addCard">+ Add Card</button>
                        <div className="cardCarousel">
                            <CardCarousel/>
                        </div>
                    </div>
                </div>
            </section>
        
            {/*Desktop*/}
            <section className="hidden md:flex">
                <div className="container flex flex-col justify-between w-full">
                    <div className="myCards flex flex-col gap-3">
                        <div className="cardHeader flex justify-between">
                            <h3 className="cardsTitle">My Cards</h3>
                            <button onClick={addCard} className="addCard">+ Add Card</button>
                        </div>
                        <div className="cardCarousel flex gap-10">
                            <CardCarousel/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

const Transactions = () => {
  return (
    <CardProvider>
      <TransactionsContent />
    </CardProvider>
  )
}
export default Transactions