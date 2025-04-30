"use client"

import { useState } from "react"
import "../../css/RecentTransactions.css"

const RecentTransactions = () => {
  const [transactions] = useState([
    {
      id: 1,
      type: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-R850",
      amountColor: "text-red-500",
      icon: (
        <div className="bg-[#FFF5D9] p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
              stroke="#FFBB38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M3 7L12 13L21 7" stroke="#FFBB38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      type: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+R2,500",
      amountColor: "text-green-500",
      icon: (
        <div className="bg-[#E7EDFF] p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5006 7.99997H6.5006C5.39603 7.99997 4.5006 8.8954 4.5006 9.99997V17C4.5006 18.1045 5.39603 19 6.5006 19H17.5006C18.6052 19 19.5006 18.1045 19.5006 17V9.99997C19.5006 8.8954 18.6052 7.99997 17.5006 7.99997Z"
              stroke="#396AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5006 19V6C16.5006 5.46957 16.2899 4.96086 15.9148 4.58579C15.5398 4.21071 15.031 4 14.5006 4H9.50061C8.97018 4 8.46147 4.21071 8.08639 4.58579C7.71132 4.96086 7.50061 5.46957 7.50061 6V19"
              stroke="#396AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      type: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+R5,400",
      amountColor: "text-green-500",
      icon: (
        <div className="bg-[#DCFAF8] p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#16DBCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M15 9H9V15H15V9Z" stroke="#16DBCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
  ])

  return (
    <div className="recent-transactions-container bg-white p-4 rounded-xl">
      <h2 className="text-[#343C6A] text-xl font-bold mb-4">Recent Transaction</h2>
      <div className="transactions-list space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item flex items-center justify-between">
            <div className="flex items-center gap-3">
              {transaction.icon}
              <div>
                <h4 className="text-[#343C6A] text-sm font-medium">{transaction.type}</h4>
                <p className="text-[#718EBF] text-xs">{transaction.date}</p>
              </div>
            </div>
            <div className={`amount ${transaction.amountColor} font-medium`}>{transaction.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
