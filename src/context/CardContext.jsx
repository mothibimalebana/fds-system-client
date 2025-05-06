import { createContext, useContext, useState } from "react";

//act as storage for card data
export const CardContext = createContext();

//manage current cards and add more of needed
const CardProvider = ({ children }) => {
    const [cardList, setCardList] = useState([
        { balance: 'R1220.00', cardHolder: 'Thabelo Budeli', cardNumber: '3778 **** **** 1234', expiry: '12/25'},
        { balance:'R5000.00', cardHolder: 'Thabelo Budeli', cardNumber: '3778 **** **** 1234', expiry: '06/27' },
    ])
    const addCard = () => {
        const newCard = {balance:"R200",cardHolder:'Thabelo Budeli',cardNumber: '3778 **** **** 1234', expiry: '01/01/2027'}
        console.log(cardList)
        setCardList(prevCardList => [...prevCardList, newCard,]);
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