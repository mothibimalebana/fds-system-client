import CardCarousel from "../components/CardCarousel"
import CreditCard from "../components/Cards"
import { CardProvider } from "../context/CardContext"
import '../css/Dashboard.css'


const Dashboard = () => {
return(
    <CardProvider>
        <div className="container flex">
            {/*Mobile*/}
            <section className="md:hidden w-full">
                <div className="container flex flex-col justify-between">
                    <div className="myCards">
                        <h3 className="cardsTitle">My Cards</h3>
                        <div className="cardCarousel">
                            <CardCarousel/>
                        </div>
                    </div>
                    <div className="recentTransactions">
                        <h3 className="transactionTitle">My Transactions</h3>
                        <TransactionList />
                    </div>
                    <div className="weeklyActivity">
                        <h3 className="activityTitle">Weekly </h3>
                    </div>
                    <div className="expense"><div className="title">
                        <h3 className="expenseTitle">Expenses</h3>
                    </div></div>
                    <div className="quickTransfer"></div>
                    <div className="balanceHistory"></div>
                </div>
            </section>
        
            {/*Desktop*/}
            <section className="hidden md:flex">
                <div className="container flex flex-col justify-between w-full">
                    <div className="myCards">
                        <h3 className="cardsTitle">My Cards</h3>
                        <div className="cardCarousel flex gap-10">
                            <CardCarousel/>
                        </div>
                    </div>
                    <div className="recentTransactions flex">
                        <h3 className="transactionTitle flex">My Transactions</h3>
                    </div>
                    <div className="weeklyActivity flex">
                        <h3 className="activityTitle flex">Weekly </h3>
                    </div>
                    <div className="expense flex"><div className="title">
                        <h3 className="expenseTitle flex">Expenses</h3>
                    </div></div>
                    <div className="quickTransfer flex"></div>
                    <div className="balanceHistory flex"></div>
                </div>
            </section>
        </div>
    </CardProvider>
)
}

export default Dashboard