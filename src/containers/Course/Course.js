import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
 
    parseQueryParams () {
        const query = new URLSearchParams(this.props.location.search)
        for (let param of query.entries()) {
            if(this.state.courseTitle !== param[1]){
                this.setState({courseTitle: param[1]})
            }
        }

    }   
    componentDidMount () {
        this.parseQueryParams()
    }

    componentDidUpdate () {
        this.parseQueryParams()
    }

    render () {
        console.log(this.props)
        //const title = decodeURI(this.props.location.search).replace('?title=', '');
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                {/* <h1>{this.props.match.params.title}</h1> */}
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;