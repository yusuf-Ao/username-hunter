import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { huntUsername } from '../state/actions/service.actions';

const ResultCard = ({ platform, userInput }) => {
  const dispatch = useDispatch();
  const [availability, setAvailability] = useState(null); // Local state to store availability.

  // Effect to call the API whenever the userInput changes.
  useEffect(() => {
    const checkAvailability = async () => {
      // Dispatch the API call action and handle the response.
      const response = await dispatch(
        huntUsername({ platform, username: userInput })
      );
      console.log({ response });
      setAvailability(response.available);
    };

    if (userInput.length > 0) {
      checkAvailability();
    }
  }, [dispatch, platform, userInput]);

  return (
    <div className='h-60 w-80 flex flex-col bg-white shadow-sm shadow-blue-700 p-6'>
      <div>
        <img src={platform.logo} alt={`${platform} logo`} />
        <span className='text-xl font-mono'>{platform}</span>
      </div>
      {/* Show availability based on the local state */}
      <div className='text-xl'>
        {availability ? 'Available' : 'Not Available'}
      </div>
    </div>
  );
};

export default ResultCard;
