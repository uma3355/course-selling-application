import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {SingleCourse} from "./Courses.jsx";
import {Card, CircularProgress, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Course() {
    const {courseId} = useParams()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("http://localhost:3003/admin/courses", {
            method: "Get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((data) => {
            return data.json()
        }).then((res) => {
            setCourses(res)
        })
    }, []);
    let course = null
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id == courseId) {
            course = courses[i]
        }
    }
    if (!course) {
        return <div>
            <CircularProgress/>
        </div>
    }

    return <div>
        <SingleCourse course={course}/>
        <UpdateCard courses={courses} course={course} setCourses={setCourses}/>
    </div>
}

function UpdateCard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const course = props.course;
    console.log("props "+props.courses)

    return <div style={{display: "flex", justifyContent: "center", margin: 100}}>
        <Card varint={"outlined"} style={{width: 400, padding: 20}}>
            <Typography>
                update course
            </Typography>
            <TextField
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label="Title"
                variant="outlined"
                style={{
                    margin: 10
                }}
            />
            {/*</div>*/}


            <TextField
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label="Description"
                variant="outlined"
                style={{
                    margin: 10
                }}
            />

            <Button
                size={"large"}
                variant="contained"
                onClick={() => {
                    function callback2(data) {
                        //alert(data.message)
                        //window.location = "/course/" + course.id
                        let updateCourses = []
                        for (let i = 0; i < props.courses.length; i++) {
                            if (props.courses[i].id == course.id) {
                                updateCourses.push({
                                    id: course.id,
                                    title: title,
                                    description: description,
                                    imageLink:""
                                })
                            }else{
                                updateCourses.push(props.courses[i])
                            }
                        }
                        props.setCourses(updateCourses)
                    }
                    function callback1(res) {
                        res.json().then(callback2)
                    }

                    fetch("http://localhost:3003/admin/courses/" + course.id, {
                        method: "PUT",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            imageLink: "",
                            published: true
                        }),
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    })
                        .then(callback1)
                }}
                style={{
                    margin: 10
                }}
            > Update course</Button>
        </Card>
    </div>
}

export default Course