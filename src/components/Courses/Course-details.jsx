import Sidenav from './../SideNav/Sidenav';
import banner from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.png";

function CourseDetails() {
  return (
    <div className='bg-opacity-100 bg-gray-200 h-screen'>
      <div className='flex'>
        <div className='flex h-screen'>
          <Sidenav />
        </div>
        <div className='w-full h-screen relative'>
          <div className='w-full h-3/5 relative'>
            <div className='w-full h-full relative'>
              <img
                className='w-full h-full object-cover opacity-50'
                src={banner}
                alt=''
              />
              <div className='absolute inset-0 bg-black bg-opacity-40 vignette flex flex-col items-center justify-start pt-20'>
                <div className='max-w-3xl pt-10 text-center'>
                  <h1 className='text-white text-4xl font-semibold z-10 mb-4 text-shadow-lg'>Chemistry 101</h1>
                  <p className='text-white mb-8 text-shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur itaque corrupti similique. Saepe odio nisi corrupti veritatis non quidem natus, blanditiis eaque dolore deserunt sequi quasi. Autem, facere minus.</p>
                  <button className='bg-black text-white py-3 px-6 rounded-md shadow-lg cursor-pointer'>ENROLL</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-full w-50vw rounded-xl ml-6 mr-6 mt-[-4] flex">
            <div className="flex-1 pl-12">
              <img
                className="w-4/5 h-4/5 mx-auto pt-10 rounded-lg"
                src={banner2}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col items-start right-12 mt-32">
              <h2 className="text-2xl font-bold mb-2">About Course</h2>
              <p className=" text-start text-slate-600">
                In this comprehensive React Course, you'll delve into the world of React,
                from its fundamentals to advanced techniques. Our expert instructors will
                guide you through every step.
              </p>
              <br />
              <h2 className="text-2xl font-bold mb-2">Course Objectives</h2>
              <div className="max-w-md mx-auto">
      <ul className="list-disc text-green-700">
        <li className="mb-2">Easy to learn</li>
        <li className="mb-2">Fast rendering with virtual DOM</li>
        <li className="mb-2">Component-based architecture</li>
        <li className="mb-2">Large ecosystem and community support</li>
        <li className="mb-2">Responsive design capabilities</li>
      </ul>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;