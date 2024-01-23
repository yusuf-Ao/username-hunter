import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ResultCard from '../components/ResultCard';
import { fetchSupportedPlatforms } from '../state/actions/service.actions';
// Assuming you have an action like this to fetch data based on user input:

const Home = () => {
  const [input, setInput] = useState(''); // State to keep track of the input.
  const dispatch = useDispatch();

  const { platforms } = useSelector((state) => state.service);

  // Fetch platforms when the component mounts for the first time.
  useEffect(() => {
    dispatch(fetchSupportedPlatforms());
  }, [dispatch]);

  console.log({ platforms });

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value); // Update the state with the current input.
  };

  return (
    <div className='w-full h-[100vh] bg-[#1a1e22] flex flex-col'>
      <div className='flex flex-col justify-center items-center h-[30%]'>
        <div className='font-medium text-3xl text-white font-poppins'>
          Username Hunter
        </div>
        <form className='w-[80%] md:w-[40%] h-20 mt-4' autoComplete='off'>
          <div className='relative'>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search...'
              required
              value={input} // Bind the input value to the state.
              onChange={handleInputChange} // Update state on input change.
            />
          </div>
        </form>
      </div>
      <div className='flex gap-4 flex-wrap justify-center items-center h-[70%]  overflow-y-scroll scrollbar-1 p-10 bg-[#f6f8fa]'>
        {platforms?.map((platform, index) => (
          <ResultCard key={index} platform={platform} userInput={input} />
        ))}
      </div>
    </div>
  );
};

export default Home;
