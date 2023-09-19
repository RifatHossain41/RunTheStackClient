import { FaFacebook, FaInstagram, FaLongArrowAltRight, FaTwitter, FaVimeo, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=''>
      <div className="bg-indigo-950 text-gray-400 border-t-8 border-blue-600 py-20 px-10">
       <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-10">
        <div>
          <h1 className="text-3xl font-bold text-white ">Run The Stack</h1>
          <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam rem libero quod corporis sit a voluptates sint temporibus exercitationem.</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>

  <nav>
    <div className='flex gap-2 items-center mb-6'>
      <FaLongArrowAltRight className="text-green-500" size={20} />
      <header className="text-xl font-bold text-white">LATEST POSTS</header> 
    </div>
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">How Can My Business Win Awards?</a></h2>
    <p>April 19, 2023</p>
    <hr className="my-3" />
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">Financial Business Leaders in USA</a></h2>
    <p>March 14, 2023</p>
    <hr className="my-3" />
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">A New Era of Technology</a></h2>
    <p>February 23, 2023</p>
    <hr className="my-3" />
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">The Risk of Ignoring Risk</a></h2>
    <p>February 13, 2023</p>
  </nav> 

  <nav>
    <div className='flex gap-2 items-center mb-6'>
      <FaLongArrowAltRight className="text-green-500" size={20} />
      <header className="text-xl font-bold text-white">LATEST QUESTIONS</header> 
    </div>
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">What are the steps you can take if your WordPress file is hacked?</a></h2>
    <p>3 Answers - 1 Vote</p>
    <hr className="my-3" />
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">Is it possible to rename the WordPress folder?</a></h2>
    <p>2 Answers - 1 Vote</p>
    <hr className="my-3" />
    <h2 className='text-base font-semibold hover:text-white mb-1'><a className="link link-hover hover:no-underline">What database system does Joomla supports?</a></h2>
    <p>1 Answer - 0 Votes</p>
  </nav> 
  <nav>
    <div className="flex ">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-blue-600 bg-gray-700 border   focus:outline-none focus:ring focus:ring-opacity-40 rounded-s-lg"
                    placeholder="Search Questions..."
                />
                <button className="px-4 text-white bg-blue-600 rounded-e-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
    <div className='flex gap-2 items-center mb-6 mt-12'>
      <FaLongArrowAltRight className="text-green-500" size={20} />
      <header className="text-xl font-bold text-white">CATEGORIES</header> 
    </div>
    <div className='flex gap-2 items-center'>
      <a className="link link-hover border px-2 py-1  rounded text-base font-semibold hover:text-white hover:no-underline ">Wordpress | 7</a>
      <a className="link link-hover border px-2 py-1 rounded text-base font-semibold hover:text-white hover:no-underline ">Joomla | 4</a>
    </div>
    <div className='flex gap-2 mt-3'>
      <a className="link link-hover border px-2 py-1 rounded text-base font-semibold hover:text-white hover:no-underline ">Drupal | 2</a>
      <a className="link link-hover border px-2 py-1 rounded text-base font-semibold hover:text-white hover:no-underline ">Magento | 1</a>
    </div>
  </nav> 
       </div>
       <hr className="mt-10" />
       <div className="lg:flex justify-evenly mt-10">
        <div>
          <p className='text-gray-300'>Copyright by © 2023 - <a className="link link-hover text-base font-semibold hover:text-white hover:no-underline">Team404</a></p>
        </div>
        <div className="flex gap-2">
          <FaFacebook className="bg-blue-950 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
          <FaTwitter className="bg-sky-500 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
          <FaInstagram className="bg-pink-700 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
          <FaVimeo className="bg-sky-500 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
          <FaYoutube className="bg-red-700 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;