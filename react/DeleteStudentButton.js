import React from 'react';

const DeleteStudentButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Student
    </button>
  );
};

export default DeleteStudentButton;






// import React from 'react';
// import axios from 'axios';

// const DeleteStudentButton = ({ studentId, onDelete }) => {
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/firstapp/${studentId}`);
//       console.log('Student deleted successfully!');
//       onDelete();
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <button onClick={handleDelete} style={{ color: 'red' }}>
//       Delete Student
//     </button>
//   );
// };

// export default DeleteStudentButton;
