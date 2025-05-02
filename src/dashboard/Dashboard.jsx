import CreditCard from "../components/Cards"

const Dashboard = () => {
return(
    <div className="container">
        <div className="myCards">
            
        </div>
        <div className="recentTransactions"></div>
        <div className="weeklyActivity"></div>
        <div className="expense"></div>
        <div className="quickTransfer balanceHistory"></div>
    </div>
)
}

export default Dashboard