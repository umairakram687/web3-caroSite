import { useState } from "react";
import { Link } from "react-router-dom";
import StyledSmText from "../../../common/components/styledSmText/StyledSmText";
import StyledXlText from "../../../common/components/styledXlText/StyledXlText";
import { content } from "../../../data/data";

const MobileHeader = () => {

  const currentYear = new Date().getFullYear();
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  const handleMobileNav = () => {
    onToggleNav()
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="mt-2 text-xl leading-none bg-transparent rounded-full outline-none cursor-pointer focus:outline-none"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M16 10.6465H1C0.912835 10.6465 0.854416 10.6152 0.81783 10.5787C0.781244 10.5421 0.75 10.4836 0.75 10.3965C0.75 10.3093 0.781244 10.2509 0.81783 10.2143C0.854416 10.1777 0.912835 10.1465 1 10.1465H16C16.0872 10.1465 16.1456 10.1777 16.1822 10.2143C16.2188 10.2509 16.25 10.3093 16.25 10.3965C16.25 10.4836 16.2188 10.5421 16.1822 10.5787C16.1456 10.6152 16.0872 10.6465 16 10.6465Z" stroke="white" stroke-width="1.5" />
          <path d="M16 5.94824H1C0.912835 5.94824 0.854416 5.917 0.81783 5.88041C0.781244 5.84383 0.75 5.78541 0.75 5.69824C0.75 5.61108 0.781244 5.55266 0.81783 5.51607C0.854416 5.47949 0.912835 5.44824 1 5.44824H16C16.0872 5.44824 16.1456 5.47949 16.1822 5.51607C16.2188 5.55266 16.25 5.61108 16.25 5.69824C16.25 5.78541 16.2188 5.84383 16.1822 5.88041C16.1456 5.917 16.0872 5.94824 16 5.94824Z" stroke="white" stroke-width="1.5" />
          <path d="M16 1.25H1C0.912835 1.25 0.854416 1.21876 0.81783 1.18217C0.781244 1.14558 0.75 1.08717 0.75 1C0.75 0.912835 0.781244 0.854416 0.81783 0.81783C0.854416 0.781244 0.912835 0.75 1 0.75H16C16.0872 0.75 16.1456 0.781244 16.1822 0.81783C16.2188 0.854415 16.25 0.912834 16.25 1C16.25 1.08717 16.2188 1.14558 16.1822 1.18217C16.1456 1.21876 16.0872 1.25 16 1.25Z" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-[100vw] transform bg-black ${navShow ? "translate-x-[0%]" : "-translate-x-full"
          }`}
        style={{ transition: "all 0.5s cubic-bezier(.68,-0.55,.27,1.55)" }}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="z-10 w-4 h-4 mt-4 mr-4 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <img src="/assets/icons/crossIcon.png" alt="Cross Icon" />
          </button>
        </div>
        <nav className="fixed top-0 left-0 h-full w-[100vw]">
          <div className="flex flex-col justify-around h-full gap-4">
            <div className='flex justify-center w-full mt-6'>
              <Link to="/" className="flex justify-center w-[60%]">
                <img className='h-full ' src='/assets/images/logo.png' alt='Logo' />
              </Link>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className='w-full'>
                <hr className='border-light-gray border-opacity-20' />
              </div>
              <div className='text-center w-[90%]'>
                <StyledSmText fontColor="text-white">Copyright &#169; {currentYear} Carolina Prohibition, All rights reserved. Created by <Link className='text-orange' to="https://www.codeencoders.com/" target='__blank'>Code Encoders</Link></StyledSmText>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
