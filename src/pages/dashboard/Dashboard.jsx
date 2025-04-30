"use client"

import { useState, useEffect } from "react"
import MyCards from "../../components/MyCards/MyCards"
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions"
import WeeklyActivity from "../../components/WeeklyActivity/WeeklyActivity"
import EWallet from "../../components/EWallet/EWallet"
import BalanceHistory from "../../components/BalanceHistory/BalanceHistory"
import ExpenseStatistics from "../../components/ExpenseStatistics/ExpenseStatistics"
import "../../css/Dashboard.css"

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="dashboard-container p-4 md:p-6 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Cards Section */}
        <div className="col-span-1 md:col-span-2">
          <MyCards />
        </div>

        {/* Recent Transactions Section */}
        <div className="col-span-1 md:col-span-1">
          <RecentTransactions />
        </div>

        {/* Weekly Activity Section */}
        <div className="col-span-1 md:col-span-1">
          <WeeklyActivity />
        </div>

        {/* Expense Statistics Section - Mobile Only */}
        <div className="col-span-1 md:hidden">
          <ExpenseStatistics />
        </div>

        {/* eWallet Section - Desktop Only */}
        <div className="col-span-1 hidden md:block">
          <EWallet />
        </div>

        {/* Quick Transfer Section - Mobile Only */}
        <div className="col-span-1 md:hidden">
          <EWallet isMobile={true} />
        </div>

        {/* Balance History Section */}
        <div className="col-span-1 md:col-span-1">
          <BalanceHistory />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
