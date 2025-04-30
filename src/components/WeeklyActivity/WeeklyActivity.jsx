"use client"

import { useState, useEffect, useRef } from "react"
import "../../css/WeeklyActivity.css"

const WeeklyActivity = () => {
  const canvasRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Chart data
  const chartData = [
    { day: "Sat", deposit: 150, withdrawal: 120 },
    { day: "Sun", deposit: 100, withdrawal: 80 },
    { day: "Mon", deposit: 180, withdrawal: 140 },
    { day: "Tue", deposit: 150, withdrawal: 160 },
    { day: "Wed", deposit: 120, withdrawal: 450 },
    { day: "Thu", deposit: 100, withdrawal: 120 },
    { day: "Fri", deposit: 180, withdrawal: 140 },
  ]

  // Draw chart
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    const barWidth = isMobile ? 15 : 20
    const barSpacing = isMobile ? 25 : 40
    const maxValue = 500
    const startX = 40
    const startY = height - 40

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw horizontal line
    ctx.beginPath()
    ctx.strokeStyle = "#FF4B4A"
    ctx.moveTo(startX, startY - (400 * (height - 80)) / maxValue)
    ctx.lineTo(width - 40, startY - (400 * (height - 80)) / maxValue)
    ctx.stroke()

    // Draw bars
    chartData.forEach((data, index) => {
      const x = startX + index * barSpacing

      // Draw deposit bar
      ctx.fillStyle = "#2D60FF"
      const depositHeight = (data.deposit / maxValue) * (height - 80)
      ctx.fillRect(x, startY - depositHeight, barWidth, depositHeight)

      // Draw withdrawal bar
      ctx.fillStyle = "#16DBCC"
      const withdrawalHeight = (data.withdrawal / maxValue) * (height - 80)
      ctx.fillRect(x + barWidth + 5, startY - withdrawalHeight, barWidth, withdrawalHeight)

      // Draw day label
      ctx.fillStyle = "#718EBF"
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.fillText(data.day, x + barWidth / 2, startY + 20)
    })

    // Draw y-axis labels
    ctx.fillStyle = "#718EBF"
    ctx.font = "12px Inter"
    ctx.textAlign = "right"
    ctx.fillText("0", startX - 10, startY + 5)
    ctx.fillText("100", startX - 10, startY - (100 * (height - 80)) / maxValue + 5)
    ctx.fillText("200", startX - 10, startY - (200 * (height - 80)) / maxValue + 5)
    ctx.fillText("300", startX - 10, startY - (300 * (height - 80)) / maxValue + 5)
    ctx.fillText("400", startX - 10, startY - (400 * (height - 80)) / maxValue + 5)
    ctx.fillText("500", startX - 10, startY - (500 * (height - 80)) / maxValue + 5)
  }, [isMobile])

  return (
    <div className="weekly-activity-container bg-white p-4 rounded-xl">
      <h2 className="text-[#343C6A] text-xl font-bold mb-4">Weekly Activity</h2>

      <div className="chart-legend flex gap-6 mb-4">
        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2D60FF]"></div>
              <span className="text-[#718EBF] text-xs">Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#16DBCC]"></div>
              <span className="text-[#718EBF] text-xs">Withdraw</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF4B4A]"></div>
              <span className="text-[#718EBF] text-xs">Anomoly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2D60FF]"></div>
              <span className="text-[#718EBF] text-xs">Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#16DBCC]"></div>
              <span className="text-[#718EBF] text-xs">Withdrawal</span>
            </div>
          </>
        )}
      </div>

      <div className="chart-container h-[250px]">
        <canvas ref={canvasRef} width="500" height="250" className="w-full h-full"></canvas>
      </div>
    </div>
  )
}

export default WeeklyActivity
