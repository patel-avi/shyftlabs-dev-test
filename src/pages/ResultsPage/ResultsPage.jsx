import { useState, useEffect } from 'react'

import { getResults, createResult } from '../../utils/result';

export default function ResultsPage() {

    const [courseName, setCourseName] = useState("")
    const [studentName, setStudentName] = useState("")
    const [results, setResults] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        getAll();
    }, []);

    async function getAll() {
        const resultsAll = await getResults();
        setResults(resultsAll)
    }



  return (
    <>
        <h1>Results Page</h1>
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
