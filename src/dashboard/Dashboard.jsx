import CardCarousel from "../components/CardCarousel"
import CreditCard from "../components/Cards"
import TransactionList from "../components/TransactionList"
import '../css/Dashboard.css'

const Dashboard = () => {
return(
    <div className="container w-full">
        {/*Mobile*/}
        <section className="flex md:hidden">
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
        <section className="container hidden md:flex">
            <div className="container flex flex-col justify-between w-full">
                <div className="myCards">
                    <h3 className="cardsTitle">My Cards</h3>
                    <div className="cardCarousel">
                        <CreditCard/>
                        <CreditCard/>
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
    </div>
)
}

export default Dashboard