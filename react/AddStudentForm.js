import React from 'react';

const AddStudentForm = ({ newStudent, onInputChange, onAddStudent }) => {
  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={onAddStudent}>
        <label>
          Name:
          <input type="text" name="name" value={newStudent.name} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={newStudent.email} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={newStudent.phone} onChange={onInputChange} />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;





// import React, { useState } from 'react';
// import axios from 'axios';

// const AddStudentForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newStudent = {
//       name,
//       email,
//       phone,
//     };

//     try {
//       await axios.post('http://127.0.0.1:8000/api/firstapp/', newStudent);
//       console.log('Student added successfully!');
//       // You can perform additional actions after a successful POST request
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Add Student</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
// <br/>
//         <label>
//           Phone:
//           <input type="text" value={phone} onChange={handlePhoneChange} />
//         </label>

//         <br />
//         <button type="submit">Add Student</button>
//       </form>
//     </div>
//   );
// };

// export default AddStudentForm;
