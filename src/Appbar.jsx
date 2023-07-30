import {Button, Typography} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Appbar() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3003/admin/me", {
            method: "GET", headers: {
                "Content-type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((data) => {
            return data.json()
        }).then((res) => {
            console.log("inside useefect  "+email)
            console.log(res.username+"    yyy")
            if (res.username) {
                setEmail(res.username)
                setIsLoading(false)
            }
            console.log(res)
        })
    }, []);

    console.log("outside useefect  "+email)
if(isLoading){
    <></>
}
    if (email) {
        return <>
            <div style={{
                display: "flex", justifyContent: "space-between", padding: 4
            }}>
                <div>
                    <Typography>Coursera</Typography>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{
                        marginRight: 10
                    }}>
                        <div>
                            {email}
                        </div>

                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                localStorage.setItem("token", null)
                                // navigate("/login")
                            }}
                        >logout</Button>
                    </div>
                </div>
            </div>

        </>
    } else {
        return <>
            <div style={{
                display: "flex", justifyContent: "space-between", padding: 4
            }}>
                <div>
                    <Typography>Coursera</Typography>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{
                        marginRight: 10
                    }}>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signup");
                            }}
                        >Sign up</Button>
                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/login");
                            }}
                        >Sign in</Button>
                    </div>
                </div>
            </div>

        </>
    }


}

export default Appbar;