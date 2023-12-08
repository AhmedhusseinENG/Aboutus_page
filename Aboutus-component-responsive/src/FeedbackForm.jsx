// src/components/FeedbackForm.jsx
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

 


  const validateFeedback = () => {
    if (!feedback.trim()) {
      setFeedbackError('Feedback message is required');
      return false;
    }
    setFeedbackError('');
    return true;
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before submitting
    const isFeedbackValid = validateFeedback();

    if (isNameValid && isEmailValid && isFeedbackValid) {
      // Perform feedback submission logic or submit the form
      console.log('Feedback submitted successfully!');
    } else {
      console.log('Form contains validation errors. Please fix them.');
    }
  };

  return (
    <div className=' antialiased bg-gray-100 flex w-full min-h-screen justify-center  items-center'>
      <div className=" flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="relative">
          <div className="absolute z-0 -right-28 -top-28 w-40 h-40 bg-teal-400 rounded-full "></div>
          <div className="absolute z-0 -left-28 -bottom-16 w-40 h-40 bg-teal-400 rounded-full "></div>
          <div className='bg-white text-gray-600 relative z-10 rounded-xl shadow-lg p-8 w-80 '> 
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <div>
                <label htmlFor="feedbackType">Select Feedback Type:</label>
                <select
                  id="feedbackType"
                  value={selectedValue}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded-md"
                >
                  <option value="">Select...</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Other">Other</option>
                </select>

                {selectedValue && (
                  <div className="mt-4">
                    You selected: <strong> {selectedValue} </strong>
                  </div>
                )}
              </div>

              <div>
                <label className='text-sm'>Feedback:</label>
                <textarea
                  rows="4" placeholder='Your Message' required className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ' 
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  onBlur={validateFeedback}
                />
                {feedbackError && <div className="error">{feedbackError}</div>}
              </div>

              <button type="submit" className="inline-block self-center bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm " >Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
