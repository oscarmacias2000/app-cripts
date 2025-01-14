import tron from "../assets/tron-trx-icon.svg"

export default function Footer(){
    return(
        <footer class="bg-white py-12 px-8 font-sans tracking-wide">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <h4 class="lg:col-span-2 text-lg font-semibold text-white leading-relaxed">Join our newsletter to keep up to date with us!<br /> Enter your email Subscribe</h4>
          <div class="bg-transparent border border-gray-600 flex px-1 py-1 rounded-full max-lg:max-w-md">
            <input type='email' placeholder='Enter your email' class="w-full outline-none bg-transparent pl-4 text-sm text-gray-400" />
            <button type='button'
              class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2">Subscribe</button>
          </div>
        </div>

        <hr class="my-12 border-gray-800" />

        <div class="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
          <div class="lg:col-span-3 max-lg:col-span-full">
            <a href='javascript:void(0)'><img src={tron} alt="logo" class='w-36' /></a>
            <p class="text-gray-400 leading-relaxed text-sm lg:max-w-sm mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
              mi eu pulvinar cursus, sem elit interdum mauris.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul class="space-y-4">
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Web
                Development</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Mobile App
                Development</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">UI/UX
                Design</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4 text-white">About Us</h4>
            <ul class="space-y-4">
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Our Story</a>
              </li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Mission and
                Values</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Team</a></li>
              <li><a href="javascript:void(0)" class="text-gray-400 hover:text-white text-sm">Testimonials</a></li>
            </ul>
          </div>
        </div>

        <p class='text-sm text-gray-400 mt-8'>© ReadymadeUI. All rights reserved. 2025</p>
      </div>
    </footer>
    )
};