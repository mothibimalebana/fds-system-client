import { CreditCardIcon } from "@heroicons/react/24/solid"

const CreditCard = ({ balance, cardHolder, cardNumber, expiry, variant }) => {
  const isLight = variant === "light"

  return (
    <div className="credit-card rounded-2xl p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className={`text-sm ${isLight ? "text-gray-500" : "text-blue-100"}`}>Balance</p>
          <h3 className="text-xl font-bold">{balance}</h3>
        </div>
        <div className={`${isLight ? "text-gray-400" : "text-white"}`}>
          {isLight ? (
            <div className="w-10 h-6">
              <div className="w-6 h-6 bg-gray-800 rounded-full inline-block mr-1"></div>
              <div className="w-6 h-6 bg-gray-400 rounded-full inline-block opacity-70"></div>
            </div>
          ) : (
            <div className="w-10 h-6">
              <CreditCardIcon className="w-8 h-8" />
            </div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <p className={`text-xs ${isLight ? "text-gray-500" : "text-blue-100"}`}>CARD HOLDER</p>
        <p className={`font-medium ${isLight ? "text-secondary" : "text-white"}`}>{cardHolder}</p>
      </div>

      <div className="flex justify-between">
        <div>
          <p className={`text-xs ${isLight ? "text-gray-500" : "text-blue-100"}`}>VALID THRU</p>
          <p className={`font-medium ${isLight ? "text-secondary" : "text-white"}`}>{expiry}</p>
        </div>
        <div className="self-end">
          <p className="font-medium text-lg">{cardNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
