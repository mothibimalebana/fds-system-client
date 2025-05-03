import { CreditCardIcon } from "@heroicons/react/24/solid"
import '../css/Card.css'

const CreditCard = ({ balance='R0.00', cardHolder = 'Thabelo Budeli', cardNumber, expiry, }) => {

  return (
                <div className="cards">
                    <div className="card text-white rounded-3xl p-6 w-full max-w-{350}">
                        {/* Top row */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <p className="text-sm opacity-90">Balance</p>
                                <p className="text-2xl font-bold">{balance}</p>
                            </div>

                            {/* Card chip icon */}
                            <div className="w-10 h-8 text-white">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M7 12H17" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M9 9H15" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M9 15H15" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                    
                        {/* Middle row */}
                        <div className="flex justify-between mb-8">
                            <div>
                            <p className="text-xs opacity-70">CARD HOLDER</p>
                            <p className="text-lg font-bold">{cardHolder}</p>
                            </div>
                            <div className="text-right">
                            <p className="text-xs opacity-70">VALID THRU</p>
                            <p className="text-lg font-bold">12/22</p>
                            </div>
                        </div>
                    
                        {/* Bottom row */}
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-bold tracking-wider">3778 **** **** 1234</p>
                            
                            {/* Mastercard logo */}
                            <div className="w-10 h-8">
                            <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7" fill="#EB001B" fillOpacity="0.7"/>
                                <circle cx="16" cy="8" r="7" fill="#F79E1B" fillOpacity="0.7"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default CreditCard
