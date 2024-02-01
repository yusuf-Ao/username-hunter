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
              className={`h-60 w-80 flex flex-colshadow-sm shadow-blue-700 p-6 border-2  text-stone-400 ${
                result.available
                  ? 'border-green-700 hover:bg-green-800'
                  : 'border-red-700 hover:bg-red-800'
              }`}
            >
              <div key={index} className='h-full'>
                <div className='flex items-center h-12 w-12 gap-2'>
                  <img
                    src={`/${result.platform}.png`}
                    alt={`${result.platform} logo`}
                  />
                  <span className='text-2xl font-mono text-white'>
                    {result.platform}
                  </span>
                </div>

                <div className='text-xl'>
                  {result.available ? 'Available' : 'Not Available'}
                </div>

                <div className='text-md text-stone-300 font-semibold bottom-0'>
                  {result.verified ? 'VERIFIED' : 'NOT VERIFIED'}
                </div>
              </div>
            </a>
          )
      )}
    </div>
  );
};

export default ResultCard;
