"use client"

import { useState } from "react"
import "../../css/MyCards.css"

const MyCards = () => {
  const [cards] = useState([
    {
      id: 1,
      balance: "R56",
      cardHolder: "Thabelo Budeli",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      isActive: true,
    },
    {
      id: 2,
      balance: "R56",
      cardHolder: "Thabelo Budeli",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      isActive: false,
    },
  ])

  return (
    <div className="my-cards-container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#343C6A] text-xl font-bold">My Cards</h2>
        <button className="text-[#343C6A] text-sm">See All</button>
      </div>

      <div className="cards-wrapper flex overflow-x-auto gap-4 pb-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card min-w-[280px] md:min-w-[320px] rounded-xl p-4 flex flex-col justify-between ${
              card.isActive ? "bg-[#2D60FF]" : "bg-white border border-gray-200"
            }`}
          >
            <div className="card-top flex justify-between items-start">
              <div className="card-balance">
                <p className={`text-xs ${card.isActive ? "text-white/70" : "text-[#718EBF]"}`}>Balance</p>
                <h3 className={`text-xl font-bold ${card.isActive ? "text-white" : "text-[#343C6A]"}`}>
                  {card.balance}
                </h3>
              </div>
              <div className="card-chip">
                {card.isActive ? (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.4998 5.33301H8.49984C6.75774 5.33301 5.33317 6.75758 5.33317 8.49967V23.4997C5.33317 25.2418 6.75774 26.6663 8.49984 26.6663H23.4998C25.2419 26.6663 26.6665 25.2418 26.6665 23.4997V8.49967C26.6665 6.75758 25.2419 5.33301 23.4998 5.33301Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6665 12.667C11.7711 12.667 12.6665 11.7716 12.6665 10.667C12.6665 9.56244 11.7711 8.66699 10.6665 8.66699C9.56193 8.66699 8.6665 9.56244 8.6665 10.667C8.6665 11.7716 9.56193 12.667 10.6665 12.667Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3332 12.667C22.4377 12.667 23.3332 11.7716 23.3332 10.667C23.3332 9.56244 22.4377 8.66699 21.3332 8.66699C20.2286 8.66699 19.3332 9.56244 19.3332 10.667C19.3332 11.7716 20.2286 12.667 21.3332 12.667Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6665 23.333C11.7711 23.333 12.6665 22.4376 12.6665 21.333C12.6665 20.2285 11.7711 19.333 10.6665 19.333C9.56193 19.333 8.6665 20.2285 8.6665 21.333C8.6665 22.4376 9.56193 23.333 10.6665 23.333Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3332 23.333C22.4377 23.333 23.3332 22.4376 23.3332 21.333C23.3332 20.2285 22.4377 19.333 21.3332 19.333C20.2286 19.333 19.3332 20.2285 19.3332 21.333C19.3332 22.4376 20.2286 23.333 21.3332 23.333Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.4998 5.33301H8.49984C6.75774 5.33301 5.33317 6.75758 5.33317 8.49967V23.4997C5.33317 25.2418 6.75774 26.6663 8.49984 26.6663H23.4998C25.2419 26.6663 26.6665 25.2418 26.6665 23.4997V8.49967C26.6665 6.75758 25.2419 5.33301 23.4998 5.33301Z"
                      stroke="#343C6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6665 12.667C11.7711 12.667 12.6665 11.7716 12.6665 10.667C12.6665 9.56244 11.7711 8.66699 10.6665 8.66699C9.56193 8.66699 8.6665 9.56244 8.6665 10.667C8.6665 11.7716 9.56193 12.667 10.6665 12.667Z"
                      stroke="#343C6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3332 12.667C22.4377 12.667 23.3332 11.7716 23.3332 10.667C23.3332 9.56244 22.4377 8.66699 21.3332 8.66699C20.2286 8.66699 19.3332 9.56244 19.3332 10.667C19.3332 11.7716 20.2286 12.667 21.3332 12.667Z"
                      stroke="#343C6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6665 23.333C11.7711 23.333 12.6665 22.4376 12.6665 21.333C12.6665 20.2285 11.7711 19.333 10.6665 19.333C9.56193 19.333 8.6665 20.2285 8.6665 21.333C8.6665 22.4376 9.56193 23.333 10.6665 23.333Z"
                      stroke="#343C6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3332 23.333C22.4377 23.333 23.3332 22.4376 23.3332 21.333C23.3332 20.2285 22.4377 19.333 21.3332 19.333C20.2286 19.333 19.3332 20.2285 19.3332 21.333C19.3332 22.4376 20.2286 23.333 21.3332 23.333Z"
                      stroke="#343C6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="card-middle flex justify-between items-center mt-6">
              <div className="card-holder">
                <p className={`text-xs ${card.isActive ? "text-white/70" : "text-[#718EBF]"}`}>CARD HOLDER</p>
                <h4 className={`text-sm font-medium ${card.isActive ? "text-white" : "text-[#343C6A]"}`}>
                  {card.cardHolder}
                </h4>
              </div>
              <div className="valid-thru text-right">
                <p className={`text-xs ${card.isActive ? "text-white/70" : "text-[#718EBF]"}`}>VALID THRU</p>
                <h4 className={`text-sm font-medium ${card.isActive ? "text-white" : "text-[#343C6A]"}`}>
                  {card.validThru}
                </h4>
              </div>
            </div>

            <div className="card-bottom flex justify-between items-center mt-6">
              <p className={`text-base font-medium ${card.isActive ? "text-white" : "text-[#343C6A]"}`}>
                {card.cardNumber}
              </p>
              <div className="card-type">
                {card.isActive ? (
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.8" />
                    <circle cx="22" cy="10" r="10" fill="white" fillOpacity="0.4" />
                  </svg>
                ) : (
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#DFEAF2" />
                    <circle cx="22" cy="10" r="10" fill="#DFEAF2" fillOpacity="0.6" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCards
