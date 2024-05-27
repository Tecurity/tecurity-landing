'use client'
import React, { useState } from 'react';

const LoanEligibilityForm = () => {
  const [gender, setGender] = useState('');
  const [applicantIncome, setApplicantIncome] = useState('');
  const [coapplicantIncome, setCoapplicantIncome] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [education, setEducation] = useState('');
  const [dependentsNumber, setDependentsNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanAmountTerm, setLoanAmountTerm] = useState('');
  const [creditHistory, setCreditHistory] = useState('good');
  const [selfEmployed, setSelfEmployed] = useState(false);
  const [propertyArea, setPropertyArea] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Fill This Form and Check Loan Eligibility</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <div className="relative">
            <select
              id="gender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="applicantIncome">
            Applicant Income
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="applicantIncome"
            type="number"
            value={applicantIncome}
            onChange={(e) => setApplicantIncome(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="coapplicantIncome">
            Coapplicant Income
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coapplicantIncome"
            type="number"
            value={coapplicantIncome}
            onChange={(e) => setCoapplicantIncome(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="loanAmount">
            Loan Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="loanAmountTerm">
            Loan Amount Term (in months)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="loanAmountTerm"
            type="number"
            value={loanAmountTerm}
            onChange={(e) => setLoanAmountTerm(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="maritalStatus">
            Marital Status
          </label>
          <div className="relative">
            <select
              id="maritalStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="education">
            Education
          </label>
          <div className="relative">
            <select
              id="education"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            >
              <option value="">Select Education Level</option>
              <option value="graduate">Graduate</option>
              <option value="not-graduate">Not Graduate</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dependentsNumber">
            Dependents Number (0, 1, 2, 3+)
          </label>
          <div className="relative">
            <select
              id="dependentsNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={dependentsNumber}
              onChange={(e) => setDependentsNumber(e.target.value)}
            >
              <option value="">Select Number of Dependents</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="creditHistory">
            Credit History
          </label>
          <div className="flex items-center">
            <input
              id="creditHistoryGood"
              type="radio"
              name="creditHistory"
              value="good"
              checked={creditHistory === 'good'}
              onChange={(e) => setCreditHistory(e.target.value)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="creditHistoryGood" className="text-gray-700 mr-4">
              Good
            </label>
            <input
              id="creditHistoryBad"
              type="radio"
              name="creditHistory"
              value="bad"
              checked={creditHistory === 'bad'}
              onChange={(e) => setCreditHistory(e.target.value)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="creditHistoryBad" className="text-gray-700">
              Bad
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="selfEmployed">
            Self-Employed
          </label>
          <div className="flex items-center">
            <input
              id="selfEmployed"
              type="checkbox"
              checked={selfEmployed}
              onChange={(e) => setSelfEmployed(e.target.checked)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="selfEmployed" className="text-gray-700">
              Yes
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="propertyArea">
            Property Area
          </label>
          <div className="relative">
            <select
              id="propertyArea"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={propertyArea}
              onChange={(e) => setPropertyArea(e.target.value)}
            >
              <option value="">Select Property Area</option>
              <option value="urban">Urban</option>
              <option value="semiurban">Semi-Urban</option>
              <option value="rural">Rural</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Check Eligibility
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanEligibilityForm;
