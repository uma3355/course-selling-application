import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddCourse(){

    return <div style={{display:"flex", margin : 200}}>
                <TextField
        fullWidth = {true}
        label="title" 
        variant="outlined" />
        
        <TextField
        fullWidth = {true}
        label="description" 
        variant="outlined" />
        <TextField
        fullWidth = {true}
        label="price" 
        variant="outlined" />
        <TextField
        fullWidth = {true}
        label="published" 
        variant="outlined" />
    </div>
}

export default AddCourse