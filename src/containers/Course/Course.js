import React, { Component } from 'react';

class Course extends Component {

    state = {
        // courseId: null,
        courseTitle: null
    }

    componentDidMount() {
        console.log('Course.componentDidMount');
        this.loadCourse();
    }

    componentDidUpdate() {
        console.log('Course.componentDidUpdate');
        this.loadCourse();
    }

    loadCourse() {
        // const loadedId = this.props.match.params.id;
        // if (!this.state.courseId || (this.state.courseId && this.state.courseId !== loadedId)) {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.courseTitle !== param[1]) {
                this.setState({ courseTitle: param[1] });
            }
        }
        // }
    }

    render() {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;