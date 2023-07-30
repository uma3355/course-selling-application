import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useState} from "react";

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div style={{display: "flex", justifyContent: "center", margin:100}}>
        <Card varint={"outlined"} style={{width: 400, padding: 20}}>
            {/*<div style={{*/}
            {/*    margin:10*/}
            {/*}}>*/}
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                    style={{
                        margin:10
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
                margin:10
            }}
        />

        <Button
            size={"large"}
            variant="contained"
            onClick={() => {
                function callback2(data) {
                   alert(data.message)
                }
                function callback1(res) {
                    res.json().then(callback2)
                }
                fetch("http://localhost:3003/admin/courses", {
                    method: "POST",
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
                margin:10
            }}
        > Add course</Button>
        </Card>
    </div>
}

export default AddCourse;