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
  // Initialize with a default value that works server-side
  const [isMobile, setIsMobile] = useState(false)

  // Check window size only after component mounts (client-side)
  useEffect(() => {
    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="dashboard-container p-4 md:p-6 bg-[#FAFBFF]">
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
        {isMobile && (
          <div className="col-span-1">
            <ExpenseStatistics />
          </div>
        )}

        {/* eWallet Section - Desktop Only */}
        {!isMobile && (
          <div className="col-span-1">
            <EWallet />
          </div>
        )}

        {/* Quick Transfer Section - Mobile Only */}
        {isMobile && (
          <div className="col-span-1">
            <EWallet isMobile={true} />
          </div>
        )}

        {/* Balance History Section */}
        <div className="col-span-1 md:col-span-1">
          <BalanceHistory />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
