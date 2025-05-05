import { createContext, useContext, useState } from "react";

//act as storage for card data
export const CardContext = createContext();

//manage current cards and add more of needed
const CardProvider = ({ children }) => {
    const [cardList, setCardList] = useState([
        { balance: 'R1220.00', cardHolder: 'Thabelo Budeli', cardNumber: '3778 **** **** 1234', expiry: '12/25'},
        { balance:'R5000.00', cardHolder: 'Thabelo Budeli', cardNumber: '3778 **** **** 1234', expiry: '06/27' },
    ])
    const addCard = ({balance, cardHolder, cardNumber, expiry}) => {
        setCardList((cardList) => cardList.push({balance, cardHolder, cardNumber, expiry}))
    }
    return(
// wraps the children, making the props passed to it available to every component within its subtree
        <CardContext.Provider value={{cardList, addCard}}>
            {children}
        </CardContext.Provider>
    );
};

//custom hook that uses useContext to consume card context
const UseCardList = () => {
    return useContext(CardContext);
}

export {CardProvider, UseCardList}