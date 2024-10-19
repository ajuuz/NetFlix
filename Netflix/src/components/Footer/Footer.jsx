import './Footer.css';

function Footer(){
    return(
        <div className='footer'>
            <div className='ms-6'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <div className='p-5'>
                <div className='text-gray-400 flex-wrap flex w-[75%] justify-between footer-table'> 
                    <div >
                        <p>Audio Description</p>
                        <p>Media Center</p>
                        <p>Terms of Use</p>
                    </div>
                    <div >
                    <p>Help Center</p>
                    <p>Gift Cards</p>
                    <p>Jobs</p>
                        
                    </div>
                    <div >
                        <p>nevstor Relation</p>
                        <p>privacy</p>
                        <p>Legal Notices</p>
                    </div>
                    <div >
                        <p>Cookie preference</p>
                        <p>Corporate Information</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div>
            <button className='text-gray-400 mb-3 border border-slate-400 hover:border-blue-400 p-2 ms-5 rounded-lg'>Service Code</button>
            </div>
            <div>
            <span className='p-5 text-gray-400'>&copy;2024 Netflix</span>
            </div>
        </div>
    )
}

export default Footer;