import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='links'>
        <div className='links__a'>
        <div className='helloFresh'>
            <h3>Hello Fresh</h3>
            <li>
            <a href="#">Students</a>
            </li>
            <li>
            <a href="#">Blog</a>
            </li>
            <li>
            <a href="#">Recipes</a>
            </li>
            <li>
            <a href="#">Hero Discounts</a>
            </li>
            <li>
            <a href="#">Recipe Directory</a>
            </li>
            <li>
            <a href="#">California Supply Chains Act</a>
            </li>
            <li>
            <a href="#">Delivery Options</a>
            </li>
        </div>
        <div className='ourCompany'>
            <h3>Our Company</h3>
            <li>
            <a href="#">HelloFresh Group</a>
            </li>
            <li>
            <a href="#">Sustainability</a>
            </li>
            <li>
            <a href="#">Careers</a>
            </li>
            <li>
            <a href="#">Press</a>
            </li>
        </div>
        <div className='Work'>
            <h3>Work with us</h3>
            <li>
            <a href="#">Partner</a>
            </li>
            <li>
            <a href="#">Influencers</a>
            </li>
            <li>
            </li>
        </div>
        <div className='contact'>
            <h3>Contact Us</h3>
            <li>
            <a href="#">Help center & FAQ</a>
            </li>
            <li>
            <a href="#">Partnership inquiries</a>
            </li>
            <li>
            <a href="#">Corporate Sales</a>
            </li>
            <li>
            <a href="#">Do not Sell My Personal</a>
            </li>
            <li>
            <a href="#">Informstion</a>
            </li>
        </div>
        <div className='download'>

            <h3>Download our app</h3>

            <p>Manage your deliveries from anywhere, anytime.</p>

        </div>
        </div>
<hr></hr>
        <div className='subFooter'>
            <div className='description'>
                <p>c HelloFresh 2022</p>
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy</a>
                <a href="#">Accessibility</a>

            </div>

        </div>
    </div>
  )
}

export default Footer