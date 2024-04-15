import React, { useState } from 'react';

const AddPatientForm = ({ addPatient }) => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [vaccineStatus, setVaccineStatus] = useState('');
    const [district, setDistrict] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation can be added here
        addPatient({ age, gender, vaccineStatus, district, symptoms });
        // Reset form fields after submission
        setAge('');
        setGender('');
        setVaccineStatus('');
        setDistrict('');
        setSymptoms('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <select
                value={vaccineStatus}
                onChange={(e) => setVaccineStatus(e.target.value)}
            >
                <option value="">Select Vaccine Status</option>
                <option value="not_vaccinated">Not Vaccinated</option>
                <option value="one_dose">One Dose</option>
                <option value="two_dose">Two Dose</option>
            </select>
            <input
                type="text"
                placeholder="District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
            />
            <input
                type="text"
                placeholder="Symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
            />
            <button type="submit">Add Patient</button>
        </form>
    );
};

export default AddPatientForm;
