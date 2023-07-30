import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import SignupCard from "./cards/signupCard";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupdata = () => {
    //let username = document.getElementById("username").value
    //let password = document.getElementById("password").value
    //console.log(username)
    //console.log(password)
    fetch("http://localhost:3003/admin/signup", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token",res.token)
          window.location= "/"
      });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 150,
          marginBottom: 15,
        }}
      >
        <Typography variant={"h6"}>Welcome to coursera Signup below</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Username"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            size={"medium"}
            variant="contained"
            onClick={handleSignupdata}
          >
            Sign up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
