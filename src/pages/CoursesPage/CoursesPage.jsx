import { useState, useEffect } from 'react'

import { getCourses, createCourse } from '../../utils/course';

export default function CoursesPage() {
    const [courseName, setCourseName] = useState([])
    const [courses, setCourses] = useState("");

    useEffect(() => {
        getAll();
      }, []);
    
      async function getAll() {
        let coursesAll = await getCourses();
        setCourses(coursesAll);
      }
    
      function handleChange(e) {
        setCourseName(e.target.value);
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        let body = {
            name: courseName
        }
        await createCourse(body).then((error) => {
          if (error) {
            alert("New course has been added");
          }
        });
        setCourseName("");
        getCourses();
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
            />
            </div>
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
                {/* {courses.map((c) => {
                  return (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </>
      );
  
  
}
