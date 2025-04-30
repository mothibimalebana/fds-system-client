"use client"

import { useState } from "react"
import "../../css/EWallet.css"

const EWallet = ({ isMobile = false }) => {
  const [contacts] = useState([
    {
      id: 1,
      name: "Thando Moloi",
      relation: "Brother",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group_18_System_Interface-QjGhLvKPAdBPgbvx6Qgmw5Rl7hnKY7.png",
    },
    {
      id: 2,
      name: "Thabo Moloi",
      relation: "Brother",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group_18_System_Interface-QjGhLvKPAdBPgbvx6Qgmw5Rl7hnKY7.png",
    },
    {
      id: 3,
      name: "Thami",
      relation: "Boyfriend",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group_18_System_Interface-QjGhLvKPAdBPgbvx6Qgmw5Rl7hnKY7.png",
    },
  ])

  const [amount, setAmount] = useState("525.50")

  return (
    <div className="ewallet-container bg-white p-4 rounded-xl">
      <h2 className="text-[#343C6A] text-xl font-bold mb-4">{isMobile ? "Quick Transfer" : "eWallet"}</h2>

      <div className="contacts-wrapper flex gap-4 overflow-x-auto pb-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item flex flex-col items-center min-w-[80px]">
            <div className="contact-image w-16 h-16 rounded-full overflow-hidden mb-2">
              <img
                src={contact.image || "/placeholder.svg"}
                alt={contact.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-[#343C6A] text-sm font-medium text-center">{contact.name.split(" ")[0]}</h4>
            <p className="text-[#718EBF] text-xs text-center">{contact.relation}</p>
          </div>
        ))}
        <div className="contact-item flex flex-col items-center justify-center min-w-[80px]">
          <div className="contact-image w-16 h-16 rounded-full border border-dashed border-[#718EBF] flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="#718EBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12H19" stroke="#718EBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="text-[#343C6A] text-sm font-medium">Add</h4>
        </div>
      </div>

      <div className="transfer-controls flex items-center gap-2 mt-4">
        <div className="amount-input flex-1">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#F5F7FA] text-[#718EBF] rounded-lg p-3 text-center"
            placeholder="Write Amount"
          />
        </div>
        <button className="send-button bg-[#2D60FF] text-white rounded-lg px-6 py-3 flex items-center gap-2">
          Send
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.6666 1.33337L7.33325 8.66671"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6666 1.33337L9.99992 14.6667L7.33325 8.66671L1.33325 6.00004L14.6666 1.33337Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default EWallet
