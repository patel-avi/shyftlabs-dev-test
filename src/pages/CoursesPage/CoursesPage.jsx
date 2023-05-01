import { useState, useEffect } from 'react'

import { getCourses, createCourse } from '../../utils/course';

export default function CoursesPage() {
    const [courseName, setCourseName] = useState("")
    const [courses, setCourses] = useState([])
    const [error, setError] = useState(false);

    useEffect(() => {
        getAll();
      }, []);
    
      async function getAll() {
        const coursesAll = await getCourses();
        setCourses(coursesAll);
      }
    
      function handleChange(e) {
        setCourseName(e.target.value);
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        if (courseName.length === 0) {
          setError(true)
        } else {
          let body = {
            name: courseName
          }
          await createCourse(body).then(() => {
            alert("New course has been added");
            setCourseName("")
            getAll()
          })
        }
      }
        
      return (
        <>
          <h1>Courses Page</h1>
          <hr />
          <form>
            <div>
            <span>Course name</span><br/>
            <input
              name="name"
              type="text"
              value={courseName}
              autoComplete="off"
              onChange={handleChange}
              required
            />
            </div>
            {error ?
          <label>Course name is required</label> : ""}
          <br/>
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <hr />
          <div className="Course">
            <table>
              <thead>
                <tr>
                  <th>Course Name</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => {
                  return (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      );
  
  
}
