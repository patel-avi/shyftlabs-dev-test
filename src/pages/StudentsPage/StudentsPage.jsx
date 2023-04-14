import { useState, useEffect } from 'react';
import { getStudents, createStudent } from '../../utils/student';
import { NavLink } from "react-router-dom";

import './StudentsPage.css'

export default function StudentsPage(props) {
    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(Date(Date.now()));
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getAll()
    }, [])
        async function getAll() {
            const studentsAll = await getStudents()
            setStudents(studentsAll)
            console.log(studentsAll)
        
    }

    function handleChange(e) {
    if (e.target.name === "firstName") setFirstName(e.target.value);
    if (e.target.name === "familyName") setFamilyName(e.target.value);
    if (e.target.name === "dateOfBirth") setDateOfBirth(e.target.value);
}

async function handleSubmit(e) {
    e.preventDefault()
    if (firstName.length === 0 || familyName.length === 0) {
      setError(true)
    }


    function calculateAge(birthday) {
      birthday = new Date(birthday)
      var ageDifMs = Date.now() - birthday;
      var ageDate = new Date(ageDifMs);

   
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

    if (firstName && familyName && calculateAge(dateOfBirth) > 10) {
        let body = {
            firstName: firstName,
            familyName: familyName,
            dateOfBirth: dateOfBirth,
          };
      await createStudent(body)
      .then((error) => {
        console.log(error)
        alert("New student has been added")
        setFirstName("")
        setFamilyName("")
        setDateOfBirth("")
        getStudents()
    })
      
    } else if (firstName && familyName && dateOfBirth && calculateAge(dateOfBirth) < 10) {
      setError(true);
      alert("Student must be at least 10 years old");
    }
  }
  


    return(
        <>
        <h1>Students Page</h1>
    <form>
        <div>
          <span>First name</span><br/>
          <input name="firstName" type="text" value={firstName} autoComplete="off" onChange={handleChange} required />
        </div>

        <div>
          <span>Family name</span><br/>
          <input name="familyName" type="text" value={familyName} autoComplete="off" onChange={handleChange} required />
        </div>
          
          <div>
          <span>Date of birth</span><br/>
          <input name="dateOfBirth" type="date" value={dateOfBirth} onChange={handleChange} required />
          </div>
          <br/>
          {error ?
          <label>All fields must be filled</label> : ""}
          <br/>
          <button onClick={handleSubmit}>Submit</button>
    </form>
    <div className='Student'>
    <table className='table'>
        <thead>
            <tr>
        <th>First Name</th>
        <th>Family Name</th>
        <th>Date of Birth</th>

            </tr>
        </thead>
          <tbody>
            {students.map((s) => {
              return (
                <tr key={s._id}>
                  <td>{s.firstName}</td>
                  <td>{s.familyName}</td>
                  <td>{s.dateOfBirth.slice(0, 10)}</td>
                </tr>
              );
            })}
          </tbody>
    </table>
</div>
</>
  )


}
