"use client"

import { useEffect, useRef } from "react"
import "../../css/ExpenseStatistics.css"

const ExpenseStatistics = () => {
  const canvasRef = useRef(null)

  // Expense data
  const expenseData = [
    { category: "Entertainment", percentage: 30, color: "#343C6A" },
    { category: "Bill Expense", percentage: 15, color: "#FC7900" },
    { category: "Investment", percentage: 20, color: "#FA00FF" },
    { category: "Others", percentage: 35, color: "#2D60FF" },
  ]

  // Draw pie chart
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 10

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw pie chart
    let startAngle = 0
    expenseData.forEach((data) => {
      const endAngle = startAngle + (data.percentage / 100) * 2 * Math.PI

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = data.color
      ctx.fill()

      startAngle = endAngle
    })

    // Draw center circle (optional for donut chart)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
  }, [])

  return (
    <div className="expense-statistics-container bg-white p-4 rounded-xl">
      <h2 className="text-[#343C6A] text-xl font-bold mb-4">Expense Statistics</h2>

      <div className="chart-container flex justify-center h-[200px]">
        <canvas ref={canvasRef} width="200" height="200"></canvas>
      </div>

      <div className="chart-legend grid grid-cols-2 gap-3 mt-4">
        {expenseData.map((data, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></div>
            <div>
              <span className="text-[#343C6A] text-xs font-medium">{data.percentage}%</span>
              <p className="text-[#718EBF] text-xs">{data.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseStatistics
