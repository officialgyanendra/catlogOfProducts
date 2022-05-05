import React from 'react'

export const Header = () => {
  return (
    <>
        <div className='navBar'>
          {/* nav bar left containt */}
          <div className='leftNavBar'>
            <div className='navLeftConteint'>
              <div>
                <img src="https://via.placeholder.com/50.png/09f/fff" alt="" />
              </div>
              <div className='list'>
                <ul>
                  <li> Home <i className="fa-solid fa-angle-down"></i></li>
                  <li> About <i className="fa fa-angle-down"></i></li>
                  <li> Product info <i className="fa fa-angle-down"></i></li>
                  <li> Contact Us <i className="fa fa-angle-down"></i></li>
                  <li> Shop <i className="fa fa-angle-down"></i></li>
                </ul>
              </div>
            </div>
          </div>
          {/* nav bar right containt */}
          <div className='rightNavBar'>
            <div className='optionDropdown'>
              <select name="" id="">
                <option value="">Select</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='searchIcon'>Search icon
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='cartIcon'>Cart icon<i className="fa-solid fa-cart-shopping"></i></div>
          </div>
        </div>
    </>
  )
}
