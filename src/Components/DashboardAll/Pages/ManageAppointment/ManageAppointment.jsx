import React, { useState } from 'react';

//impoprted react-icons
import { MdOutlineCalendarToday } from "react-icons/md";
// import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

//imported style.css
import './manageappointment.css';

const ManageAppointments = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [statuses, setStatuses] = useState([
    { id: 1, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Approved' },
    { id: 2, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Pending' },
    { id: 3, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 4, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Approved' },
    { id: 5, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 6, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Pending' },
    { id: 7, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 8, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 9, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 10, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 11, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 12, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' },
    { id: 13, customer: 'John Doe', listing: 'Dr. Pardhu', date: '12/10/24', time: '11:00 AM', status: 'Cancelled' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setStatuses(statuses.map(status => status.id === id ? { ...status, status: newStatus } : status));
  };

  const filteredStatuses = activeTab === 'All' ? statuses : statuses.filter(status => status.status === activeTab);

  return (
    <div className="dashboard-appointments">
      <h2>All Appointments</h2>
      <div className="dashboard-tabs-container">
        <div className="tabs-button">
          <button className={`tab-side ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
          <button className={`tab-side ${activeTab === 'Pending' ? 'active' : ''}`} onClick={() => setActiveTab('Pending')}>Pending</button>
          <button className={`tab-side ${activeTab === 'Approved' ? 'active' : ''}`} onClick={() => setActiveTab('Approved')}>Approved</button>
          <button className={`tab-side ${activeTab === 'Cancelled' ? 'active' : ''}`} onClick={() => setActiveTab('Cancelled')}>Cancelled</button>
        </div>
        <button className="dashboard-calendar-button">
          <MdOutlineCalendarToday />
          Calendar
        </button>
      </div>
      <div className='manage-appointments-table-container'>
        <table className="manage-appointments-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Associated Listing</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            {filteredStatuses.map(({ id, customer, listing, date, time, status }) => (
              <tr key={id}>
                <td>{customer}</td>
                <td>{listing}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td><span className={`status-dot ${status.toLowerCase()}`}></span></td>
                <td>
                  <div className="select-container">
                    <select
                      className={`status-select ${status.toLowerCase()}`}
                      value={status}
                      onChange={(e) => handleStatusChange(id, e.target.value)}
                    >
                      <option value="Approved">Approved</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <RiArrowDownSLine className="arrow-icon" />
                  </div>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAppointments;