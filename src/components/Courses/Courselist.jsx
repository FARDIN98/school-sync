import Sidenav from './../SideNav/Sidenav';
import Uppernav from './../UpperNav/Uppernav';
import Footer from '../LandingPage/Footer/Footer';

function Courselist() {
  return (
    <div className='bg-opacity-100 bg-gray-200 h-screen'>
      <div className='flex'>
        <div className='flex'>
          <Sidenav />
          
        </div>
        <div className='flex flex-col w-full pr-2'>
        <div className='p-6'>
          <Uppernav/>
        </div>
        <div className='bg-white h-40vh w-50vw rounded-xl ml-6 mt-[-4]'>
          <div className='flex space-x-96'>
          <div class="flex space-x-36 pl-8">
  <span class="font-semibold">All Courses (12)</span>
  <span class="font-semibold">Ongoing (7)</span>
  <span class="font-semibold">Completed (5)</span>
</div>
<div className='pl-12'>
  <a href="" className='text-black no-underline font-semibold'>See All</a>
</div>

          </div>
        



        </div>

        </div>
        
        
      </div>
      
      <Footer />
    </div>
  );
}

export default Courselist;
