const Course = ({ courses }) => {
  
    const total = courses.reduce((total, course) => {
      return (
        total + course.parts.reduce((subtotal, part) => 
          (subtotal += part.exercises), 0)
      );
    }, 0);
  
    return (
      <div className="Course">
        <div>
          {courses.map((course) => (
            <div key={course.id}>
              <h1>{course.name}</h1>
  
              <ul>
                
                {course.parts.map((part) => (
                  <li key={part.id}>
                    {part.name} {part.exercises}
                  </li>
                ))}
  
              </ul>
            </div>
          ))}
        </div>
  
        <p> total of {total} exercises </p>
      </div>
    );
  };

export default Course

  