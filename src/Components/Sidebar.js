import React from 'react'
import { BiSolidHome, BiSolidLogOutCircle } from 'react-icons/bi'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
  BsBarChartLine,
  BsClipboard,
  BsClipboardCheck,
  BsWalletFill,
  BsWallet,
  BsBagCheck,
  BsMicrosoft}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsMicrosoft  className='icon_header'/>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiSolidHome className='icon' size={20}/>Home
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBarChartLine className='icon' size={20}/>Graph
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsClipboardCheck className='icon' size={20}/>Feedback
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsWallet className='icon' size={20}/>Wallet
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBagCheck className='icon' size={20}/>Bag
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                    <BiSolidLogOutCircle className='icon' size={30}/>Log out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar