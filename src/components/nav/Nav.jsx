import { useState } from "react";

const Nav = ({pageTitle}) => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [inputText, setInputText] = useState("");

    const inputHandler = (e) => {   //Getting user input
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase)
    }

    const navItems = [
        { id: 1, text: 'Dashboard' },
        { id: 2, text: 'Transactions' },
        { id: 3, text: 'Accounts' },
        { id: 4, text: 'Investments' },
        { id: 6, text: 'Loans' },
        { id: 7, text: 'Services' },
        { id: 8, text: 'Settings' },
      ];

    
    
    return(
        <>
            <div className="nav-container flex">

                {/*Mobile*/}
                <section className="md:hidden w-full">
                    <div className="top py-4 w-full">
                        <div className="nav-menu w-full grid grid-cols-4" onClick={() => {setNavOpen((prev) => !prev)}}>
                        <div className="svg flex justify-center self-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18 13.5523 17.4801 14 16.8387 14L1.16129 14C0.519928 14 -6.78526e-08 13.5523 -4.37114e-08 13C-1.95703e-08 12.4477 0.519928 12 1.16129 12L16.8387 12C17.4801 12 18 12.4477 18 13Z" fill="#343C6A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 7.55228 17.5523 8 17 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L17 6C17.5523 6 18 6.44772 18 7Z" fill="#343C6A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.999998C18 1.55228 17.4801 2 16.8387 2L1.16129 2C0.519928 2 -6.78526e-08 1.55229 -4.37115e-08 1C-1.95704e-08 0.447719 0.519928 3.94468e-06 1.16129 3.7939e-06L16.8387 -5.07615e-08C17.4801 -2.61145e-07 18 0.447714 18 0.999998Z" fill="#343C6A"/>
                            </svg>
                        </div>
                        <h3 className="col-start-2 col-end-4 justify-self-centre flex justify-center text-[20px]">{pageTitle}</h3>
                        </div>
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="CROSS-ICON flex justify-end" onClick={() => setNavOpen(false)}>
                            <svg
                                className="h-8 w-8 text-gray-600 flex justify-end"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            </div>
                            <div className="menu-link flex flex-col gap-4">
                                {
                                    navItems.map((item) => {
                                        return(
                                            <li id={item.id} className="uppercase">
                                                <a href={item.text}>{item.text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bottom py-4 flex justify-center">
                    <div className="search flex gap-2 col-start-2 col-end-7 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14.8163 14.9347L11.2102 11.3286C12.1041 10.2388 12.6429 8.84286 12.6429 7.32143C12.6429 3.83163 9.81122 1 6.32143 1C2.82857 1 0 3.83163 0 7.32143C0 10.8112 2.82857 13.6429 6.32143 13.6429C7.84286 13.6429 9.23571 13.1071 10.3255 12.2133L13.9316 15.8163C14.1765 16.0612 14.5714 16.0612 14.8163 15.8163C15.0612 15.5745 15.0612 15.1765 14.8163 14.9347ZM6.32143 12.3847C3.52653 12.3847 1.2551 10.1133 1.2551 7.32143C1.2551 4.52959 3.52653 2.2551 6.32143 2.2551C9.11327 2.2551 11.3878 4.52959 11.3878 7.32143C11.3878 10.1133 9.11327 12.3847 6.32143 12.3847Z" fill="#718EBF"/>
                    </svg>
                        <input name="searchBar" placeholder="Search"/>
                        <ul>
                            {filteredData.map((item) => {
                                <li key={item.id}>{item.text}</li>
                            })}
                        </ul>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export default Nav