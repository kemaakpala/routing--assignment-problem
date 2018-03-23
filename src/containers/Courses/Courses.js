import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

import './Courses.css';
import Course from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    goToCourseHandler(id){
        console.log(`gotoCourseHandler clicked: ${id}`)
        this.props.history.push(`/courses/${id}`)
        // this.props.history.push(`/courses/${id}/${title}`)

    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link
                                    key={course.id}
                                    // to={`/courses/${course.id}/${course.title}`}
                                    to={{
                                        pathname: `/courses/${course.id}`,
                                        search: `?title=${course.title}`
                                    }}
                                >
                                    <article 
                                        className="Course" 
                                        onClick={() => this.goToCourseHandler(course.id, course.title)}
                                    >
                                        {course.title}
                                    </article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Route path="/courses/:id" exact component= {Course}/>
            </div>
        );
    }
}

export default Courses;