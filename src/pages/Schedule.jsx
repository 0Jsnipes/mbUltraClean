import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Schedule() {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSchedule = () => {
    if (date) {
      navigate('/payment');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Schedule a Cleaning</h2>
      <input
        type="date"
        className="p-2 border"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        className="ml-4 p-2 bg-green-500 text-white"
        onClick={handleSchedule}
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default Schedule;
