












import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.email} - {student.phone}
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     // Fetch data from the REST API
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/firstapp/');
//         setStudents(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             {student.id} - {student.email}
//             - {student.phone} - {student.registrationDate}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;