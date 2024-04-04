import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YoutubeIcon from '@mui/icons-material/Youtube'
import TwitterIcon from '@mui/icons-material/Twitter'

function Footer() {
  return (
    <div className='bg-black text-white w-full p-16 text-center h-64' >

      <div>
        <div className='sm:text-4xl text-2xl cursor-pointer mb-4' >
          <InstagramIcon/>  <FacebookIcon/> <YoutubeIcon/>  <TwitterIcon/>
        </div  >
        <p  className='sm:text-xl text-lg ' > &copy; 2024 kingshephardpizza.com </p>

      </div>



    </div>
  )
}

export default Footer