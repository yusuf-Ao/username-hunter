import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ResultCard from '../components/ResultCard';
import { fetchSupportedPlatforms } from '../state/actions/service.actions';

const Home = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const { platforms } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(fetchSupportedPlatforms());
  }, [dispatch]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(event.target.value);
  };
  return (
    <div className='w-full h-screen bg-primary flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center h-1/3 w-full'>
        <div className='font-normal text-2xl text-white font-poppins'>
          Username Hunter
        </div>
        <form
          onSubmit={handleSubmit}
          className='w-2/5 h-20 mt-4'
          autoComplete='off'
        >
          <div className='flex gap-2 justify-center'>
            <input
              type='search'
              className='w-full p-4 ps-10 text-5xl bg-primary text-stone-400 focus:ring-blue-400 border block border-gray-300 rounded-lg  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Start typing . . .'
              value={input}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div className='flex flex-wrap gap-4 h-2/3 sm:w-4/5 lg:w-3/5 overflow-y-auto scrollbar-1 m-auto justify-center justify-items-center'>
        {platforms?.map((platform, index) => (
          <ResultCard key={index} platform={platform} userInput={input} />
        ))}
      </div>
    </div>
  );
};

export default Home;
