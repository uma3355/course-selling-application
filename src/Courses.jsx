import {useEffect, useState} from "react";
import {Card, Typography} from "@mui/material";

function Courses() {

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
    return <>
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center"
        }}>
            {courses.map((course)=>{
                console.log(course)
                return  <SingleCourse course={course} />
            })}
        </div>
    </>
}

export function SingleCourse(props){
    return    <div  style={{
        display:"flex",
        justifyContent:"center"
    }}>
        <Card style={{
            margin:10,
            width:300,
            minHeight:200
        }}>
            <Typography textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
            <img src={props.course.imageLink} style={{
                width:300
            }}></img>
        </Card>
    </div>
}


export default Courses