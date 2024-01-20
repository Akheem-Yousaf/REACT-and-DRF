import React from 'react';

const EditStudentForm = ({ student, onInputChange, onEdit }) => {
  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={onEdit}>
        <label>
          Name:
          <input type="text" name="name" value={student.name} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={student.email} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={student.phone} onChange={onInputChange} />
        </label>
        <br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudentForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// const EditStudentForm = ({ student, onEdit }) => {
//   const [name, setName] = useState(student.name);
//   const [grade, setGrade] = useState(student.grade);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleGradeChange = (e) => {
//     setGrade(e.target.value);
//   };

//   const handleEdit = async (e) => {
//     e.preventDefault();

//     const updatedStudent = {
//       id: student.id,
//       name,
//       grade,
//     };

//     try {
//       await axios.put(`https://api.example.com/students/${student.id}`, updatedStudent);
//       console.log('Student updated successfully!');
//       onEdit();
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Student</h1>
//       <form onSubmit={handleEdit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Grade:
//           <input type="text" value={grade} onChange={handleGradeChange} />
//         </label>
//         <br />
//         <button type="submit">Update Student</button>
//       </form>
//     </div>
//   );
// };

// export default EditStudentForm;





// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const EditStudentForm = ({ student, onEdit }) => {
// //   const [name, setName] = useState(student.name);
// //   const [email, setEmail] = useState(student.email);
// //   const [phone, setPhone] = useState(student.phone);

// //   const handleNameChange = (e) => {
// //     setName(e.target.value);
// //   };

// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   const handlePhoneChange = (e) => {
// //     setPhone(e.target.value);
// //   };

// //   const handleEdit = async (e) => {
// //     e.preventDefault();

// //     const updatedStudent = {
// //       id: student.id,
// //       name,
// //       email,
// //       phone,
// //     };

// //     try {
// //       await axios.put(`http://127.0.0.1:8000/api/firstapp/${student.id}`, updatedStudent);
// //       console.log('Student updated successfully!');
// //       onEdit();
// //     } catch (error) {
// //       console.error('Error updating student:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Edit Student</h1>
// //       <form onSubmit={handleEdit}>
// //       <label>
// //           Name:
// //           <input type="text" value={name} onChange={handleNameChange} />
// //         </label>
// //         <br />
// //         <label>
// //           Email:
// //           <input type="email" value={email} onChange={handleEmailChange} />
// //         </label>
// // <br/>
// //         <label>
// //           Phone:
// //           <input type="text" value={phone} onChange={handlePhoneChange} />
// //         </label>
// //         <br />
// //         <button type="submit">Update Student</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditStudentForm;