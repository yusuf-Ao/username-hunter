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
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputChange(e);
  };
  return (
    <div className='w-full h-screen bg-primary flex flex-col'>
      <div className='flex flex-col justify-center items-center h-1/3 w-full'>
        <div className='font-medium text-3xl text-white font-poppins'>
          Username Hunter
        </div>
        <form
          onSubmit={handleSubmit}
          className='w-2/5 h-20 mt-4'
          autoComplete='off'
        >
          <div className='flex gap-2'>
            <div className='inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                class='w-12 h-12 text-stone-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              className='w-full p-4 ps-10 text-5xl bg-primary text-stone-400'
              placeholder='Start typing...'
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
