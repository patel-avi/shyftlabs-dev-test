import { useState, useEffect } from 'react'

import { getCourses, createCourse } from '../../utils/course';

export default function CoursesPage() {
    const [courses, setCourse] = useState("");

    useEffect(() => {
        getAll();
      }, []);
    
      async function getAll() {
        let coursesAll = await getCourses();
        setCourse(coursesAll);
      }
    
      function handleChange(e) {
        setCourse(e.target.value);
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        let course = course.trim();
        await createCourse({ name: course }).then((err) => {
          if (!err.name) {
            alert("Course Added");
          } else {
            alert(`${err.name}: ${err.message}`);
          }
        });
        setCourse("");
        getCourses();
      }
    
      return (
        <>
          <h1>All Courses</h1>
          <hr />
          <form>
            <input
              type="text"
              name="name"
              placeholder="Course Name"
              value={courses}
              autoComplete="off"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <hr />
          <div>
            <table>
              <thead>
                <tr>
                  <th>Courses</th>
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
