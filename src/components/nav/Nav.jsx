import { useState } from "react";

const Nav = ({pageTitle}) => {
    const [isNavOpen, setNavOpen] = useState(false);
    const navItems = [
        { id: 1, text: 'Dashboard' },
        { id: 2, text: 'Transactions' },
        { id: 3, text: 'Accounts' },
        { id: 4, text: 'Investments' },
        { id: 6, text: 'Loans' },
        { id: 7, text: 'Services' },
        { id: 8, text: 'Settings' },
      ];

      console.log(isNavOpen)
    return(
        <>
            <div className="nav-container flex">
                {/*Mobile*/}
                <section className="md:hidden w-full">
                    <div className="top w-full">
                        <div className="nav-menu w-full grid grid-cols-2" onClick={() => {setNavOpen((prev) => !prev)}}>
                        <div className="svg w-1/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18 13.5523 17.4801 14 16.8387 14L1.16129 14C0.519928 14 -6.78526e-08 13.5523 -4.37114e-08 13C-1.95703e-08 12.4477 0.519928 12 1.16129 12L16.8387 12C17.4801 12 18 12.4477 18 13Z" fill="#343C6A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 7.55228 17.5523 8 17 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L17 6C17.5523 6 18 6.44772 18 7Z" fill="#343C6A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.999998C18 1.55228 17.4801 2 16.8387 2L1.16129 2C0.519928 2 -6.78526e-08 1.55229 -4.37115e-08 1C-1.95704e-08 0.447719 0.519928 3.94468e-06 1.16129 3.7939e-06L16.8387 -5.07615e-08C17.4801 -2.61145e-07 18 0.447714 18 0.999998Z" fill="#343C6A"/>
                            </svg>
                        </div>
                        <h3 className="w-9/10">{pageTitle}</h3>
                        </div>
                    </div>
                    <div className="bottom">

                    </div>
                </section>
            </div>
        </>
    )

}

export default Nav