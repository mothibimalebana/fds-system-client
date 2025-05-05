import { createContext, useContext, useState } from "react";

//act as storage for card data
export const CardContext = createContext();

//manage current cards and add more of needed
const CardProvider = ({ children }) => {
    const [cardList, setCardList] = useState([
        { balance: 'R1220.00', cardHolder: 'Thabelo Budeli', cardNumber, expiry, },
        { balance:'R5000.00', cardHolder: 'Thabelo Budeli', cardNumber, expiry, },
    ])
    const addCard = ({balance, cardHolder, cardNumber, expiry}) => {
        setCardList((cardList) => cardList.push({balance, cardHolder, cardNumber, expiry}))
    }
    return(
        <CardContext.Provider value={{cardList, addCard}}>
            {children}
        </CardContext.Provider>
    );
};

const useCardList = () => {
    return useContext(CardContext);
}

export {CardProvider, useCardList}