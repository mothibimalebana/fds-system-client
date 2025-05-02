import CardCarousel from "../components/CardCarousel"
import CreditCard from "../components/Cards"
import '../css/Dashboard.css'

const Dashboard = () => {
return(
    <div className="container flex flex-col">
        <div className="myCards">
            <div className="title"><h3 className="cardsTitle">My Cards</h3></div>
            <CardCarousel />
        </div>
        <div className="recentTransactions">
            <div className="title"><h3 className="transactionTitle">My Transactions</h3></div>
        </div>
        <div className="weeklyActivity">
            <div className="title"><h3 className="activityTitle">Weekly </h3></div>
        </div>
        <div className="expense"><div className="title">
            <h3 className="expenseTitle">Expenses</h3>
        </div></div>
        <div className="quickTransfer"></div>
        <div className="balanceHistory"></div>
    </div>
)
}

export default Dashboard