"use client"

import { useState, useEffect, useRef } from "react"
import "../../css/BalanceHistory.css"

const BalanceHistory = () => {
  const canvasRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Balance history data
  const balanceData = [
    { month: "Jul", balance: 100 },
    { month: "Aug", balance: 300 },
    { month: "Sep", balance: 750 },
    { month: "Oct", balance: 400 },
    { month: "Nov", balance: 600 },
    { month: "Dec", balance: 350 },
    { month: "Jan", balance: 500 },
  ]

  // Draw line chart
  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    const maxValue = 800
    const startX = 40
    const startY = height - 40
    const endX = width - 40
    const graphHeight = height - 80

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw y-axis labels
    ctx.fillStyle = "#718EBF"
    ctx.font = "12px Inter"
    ctx.textAlign = "right"
    ctx.fillText("0", startX - 10, startY + 5)
    ctx.fillText("200", startX - 10, startY - (200 * graphHeight) / maxValue + 5)
    ctx.fillText("400", startX - 10, startY - (400 * graphHeight) / maxValue + 5)
    ctx.fillText("600", startX - 10, startY - (600 * graphHeight) / maxValue + 5)
    ctx.fillText("800", startX - 10, startY - (800 * graphHeight) / maxValue + 5)

    // Draw x-axis labels
    balanceData.forEach((data, index) => {
      const x = startX + (index * (endX - startX)) / (balanceData.length - 1)
      ctx.fillStyle = "#718EBF"
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.fillText(data.month, x, startY + 20)
    })

    // Draw line
    ctx.beginPath()
    ctx.moveTo(startX, startY - (balanceData[0].balance / maxValue) * graphHeight)

    balanceData.forEach((data, index) => {
      if (index === 0) return
      const x = startX + (index * (endX - startX)) / (balanceData.length - 1)
      const y = startY - (data.balance / maxValue) * graphHeight
      ctx.lineTo(x, y)
    })

    ctx.strokeStyle = "#2D60FF"
    ctx.lineWidth = 2
    ctx.stroke()

    // Fill area under the line
    ctx.lineTo(endX, startY)
    ctx.lineTo(startX, startY)
    ctx.closePath()

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(45, 96, 255, 0.3)")
    gradient.addColorStop(1, "rgba(45, 96, 255, 0)")
    ctx.fillStyle = gradient
    ctx.fill()
  }, [isClient])

  return (
    <div className="balance-history-container bg-white p-4 rounded-xl">
      <h2 className="text-[#343C6A] text-xl font-bold mb-4">Balance History</h2>

      {/* Chart container with placeholder for server-side rendering */}
      <div className="chart-container h-[250px] relative">
        {/* Placeholder shown during server-side rendering */}
        <div
          className={`absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center ${isClient ? "hidden" : "block"}`}
        >
          <div className="text-[#718EBF]">Chart loading...</div>
        </div>

        {/* Canvas only shown on client-side */}
        <canvas
          ref={canvasRef}
          width="500"
          height="250"
          className={`w-full h-full ${isClient ? "block" : "hidden"}`}
        ></canvas>
      </div>
    </div>
  )
}

export default BalanceHistory
