import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import '../../../assets/styles/FundusCapture.css';

const patients = [
  "Sam", "Suresh chabra", "Ramesh chabra", "Sabana chabra", "Raman",
  "Rohit Bansal", "Kuldeep Yadav", "Sonia Dosanjh", "Gul Khehra",
  "Kashish Chabra", "Karan chabra"
];

const ITEMS_PER_PAGE = 5;

const FundusCapture = () => {
  const [selectedPatient, setSelectedPatient] = useState("Sam");
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [leftEyeImage, setLeftEyeImage] = useState(null);
  const [rightEyeImage, setRightEyeImage] = useState(null);

  const filteredPatients = patients.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPatients.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const currentPatients = filteredPatients.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(prev => prev - 1);
  };

  const handleImageUpload = (e, eye) => {
    const file = e.target.files[0];
    if (eye === 'left') {
      setLeftEyeImage(file);
    } else {
      setRightEyeImage(file);
    }
  };

  return (
    <div className="fc-container">
      <div className="fc-header">Fundus Capture</div>

      <div className="fc-card">
        <div className="fc-top">
          <div className="fc-patient-list">
            <h4>Select Previous Patient Registered.</h4>
            <input
              type="text"
              className="fc-search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(0);
              }}
            />
            <ul>
              {currentPatients.map((name) => (
                <li
                  key={name}
                  className={selectedPatient === name ? "selected" : ""}
                  onClick={() => setSelectedPatient(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
            <div className="fc-pagination">
              <button onClick={prevPage} disabled={page === 0}>Previous</button>
              <span>Page {page + 1} of {totalPages}</span>
              <button onClick={nextPage} disabled={page >= totalPages - 1}>Next</button>
            </div>
          </div>

          <div className="fc-patient-info">
            <h3>{selectedPatient}</h3>
            <p><strong>DOB:</strong> 12/03/2025</p>
            <p><strong>Consultation Purpose:</strong> Blur</p>
            <p><strong>Mobile No:</strong> 0327423946</p>
            <p><strong>Gender:</strong> Male</p>
          </div>
        </div>

        <div className="fc-upload-section">
          <label className="fc-upload-box">
            <FaUpload className="fc-icon" />
            <p>Upload Left Eye Retinal Image</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'left')}
              hidden
            />
            {leftEyeImage && (
              <img
                src={URL.createObjectURL(leftEyeImage)}
                alt="Left Eye Preview"
                className="fc-preview-img"
              />
            )}
          </label>

          <label className="fc-upload-box">
            <FaUpload className="fc-icon" />
            <p>Upload Right Eye Retinal Image</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'right')}
              hidden
            />
          </label>
        </div>

        <div className="fc-buttons">
          <button className="fc-btn submit">Submit</button>
          <button className="fc-btn reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FundusCapture;
