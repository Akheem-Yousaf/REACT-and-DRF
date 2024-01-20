import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import EditStudentForm from './components/EditStudentForm';
import DeleteStudentButton from './components/DeleteStudentButton';

const App = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', phone: '' });
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/firstapp/');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/firstapp/', newStudent);
      console.log('Student added successfully!');
      setNewStudent({ name: '', email: '', phone: '' });
      fetchData();
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleEditInputChange = (e) => {
    setEditingStudent({ ...editingStudent, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/api/firstapp/${editingStudent.id}`, editingStudent);
      console.log('Student updated successfully!');
      setEditingStudent(null);
      fetchData();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/firstapp/${studentId}`);
      console.log('Student deleted successfully!');
      fetchData();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h1>Student Management App</h1>
      <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
      <AddStudentForm
        newStudent={newStudent}
        onInputChange={handleInputChange}
        onAddStudent={handleAddStudent}
      />
      {editingStudent && (
        <EditStudentForm
          student={editingStudent}
          onInputChange={handleEditInputChange}
          onEdit={handleEditSubmit}
        />
      )}
      {editingStudent && (
        <DeleteStudentButton onDelete={() => handleDelete(editingStudent.id)} />
      )}
    </div>
  );
};

export default App;
