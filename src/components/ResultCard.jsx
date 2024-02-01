import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { huntUsername } from '../state/actions/service.actions';

const ResultCard = ({ platform, userInput }) => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(huntUsername({ platform, username: userInput }));
  }, [userInput]);

  return (
    <div>
      {results.map(
        (result, index) =>
          result?.platform === platform && (
            <a
              href={result.url}
              target='_blanck'
              className={`h-60 w-80 flex flex-col shadow-sm shadow-blue-700 p-6 border-2  text-stone-400 ${
                result.available
                  ? 'border-green-700 hover:bg-green-800'
                  : 'border-red-700 hover:bg-red-800'
              }`}
            >
              <div key={index} className='h-full w-full flex flex-col'>
                <div className='flex items-center h-12 w-12 gap-2'>
                  <img
                    src={`/${result.platform}.png`}
                    alt={`${result.platform} logo`}
                  />
                  <span className='text-2xl font-mono text-white'>
                    {result.platform}
                  </span>
                </div>
                <div className='flex justify-between h-full w-full items-end p-2'>
                  <div className='flex flex-col'>
                    <div className='text-xl'>{result.username}:</div>
                    <div className='text-xl'>status:</div>
                  </div>

                  <div className='flex flex-col'>
                    <div className='text-md text-stone-300 font-semibold'>
                      {result.available ? 'Available' : 'Not Available'}
                    </div>
                    <div className='text-md text-stone-300 font-semibold'>
                      {result.verified ? 'Verified' : 'Not Verified'}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )
      )}
    </div>
  );
};

export default ResultCard;
