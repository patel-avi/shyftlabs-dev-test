import { useState, useEffect } from 'react'

import { getResults, createResult } from '../../utils/result';
import { getCourses } from '../../utils/course';
import { getStudents } from '../../utils/student';

import './ResultsPage.css'

export default function ResultsPage() {

    const [courseName, setCourseName] = useState("")
    const [studentName, setStudentName] = useState("")
    const [score, setScore] = useState("")
    const [results, setResults] = useState([])
    const [error, setError] = useState(false)

    const [courses, setCourses] = useState([])
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAll();
        getAllCourses();
        getAllStudents();
    }, []);

    async function getAll() {
        const resultsAll = await getResults();
        setResults(resultsAll)
    }

    async function getAllCourses() {
        const coursesAll = await getCourses();
        setCourses(coursesAll);
      }

    async function getAllStudents() {
        const studentsAll = await getStudents();
        setStudents(studentsAll);
      }    

      function handleChange(e) {
        if (e.target.name === "courseName") setCourseName(e.target.value);
        if (e.target.name === "studentName") setStudentName(e.target.value);
        if (e.target.name === "score") setScore(e.target.value);
    }



    async function handleSubmit(e) {
        e.preventDefault()
        if (courseName === 'none' || studentName === 
        'none' || score === 'none') {
            setError(true)
        } else {

            let body = {
                courseName: courseName,
                studentName: studentName,
                score: score,
            }
            console.log(e)
            await createResult(body).then((error) => {
                console.log(error)
                alert("New result has been added")
                setCourseName("")
                setStudentName("")
                setScore("")
                getAll()
                })
        }
    }
     


  return (
    <>
        <h1>Results Page</h1>
        <hr />
        <form>
            <div>
            <span>Course name</span><br/>
            <select name="courseName" className="dropdown" onChange={handleChange}>
                <option disabled selected value="none">Select a course</option>
                {courses.map((c) => 
                <option value={c.name}>{c.name}</option>
                )}
            </select>
            </div>

            <div>
            <span>Student name</span><br/>
            <select name="studentName" className="dropdown" onChange={handleChange}>
                <option disabled selected value="none">Select a student</option>
                {students.map((s) => 
                <option value={`${s.firstName} ${s.familyName}`}>{s.firstName} {s.familyName}</option>
                )}
            </select>
            </div>
            
            <div>
            <span>Score</span><br/>
            <select name="score" className="dropdown" onChange={handleChange}>
            <option disabled selected value="none">Select a score</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
            </select>
            </div>
            {error ?
                <label>All fields are required</label> : ""}
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        <div className='Result'>
            <table className='table'>
                <thead>
                    <tr>
                <th>Course</th>
                <th>Student</th>
                <th>Score</th>

                    </tr>
                </thead>
                <tbody>
                    {results.map((r) => {
                    return (
                        <tr key={r._id}>
                        <td>{r.courseName}</td>
                        <td>{r.studentName}</td>
                        <td>{r.score}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}