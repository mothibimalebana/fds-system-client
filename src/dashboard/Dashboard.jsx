import CardCarousel from "../components/CardCarousel"
import CreditCard from "../components/Cards"
import '../css/Dashboard.css'

const Dashboard = () => {
return(
    <section>
        <div className="container flex flex-col justify-between">
            <div className="myCards">
                <h3 className="cardsTitle">My Cards</h3>
                <div className="cardCarousel">
                    <CardCarousel/>
                </div>
            </div>
            <div className="recentTransactions">
                <h3 className="transactionTitle">My Transactions</h3>
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
)
}

export default Dashboard