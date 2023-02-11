import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { formValidationSchema } from "./Shoppage";

export function Profile() {

  const navigate = useNavigate();


  const FormikS = useFormik({
    initialValues: { name: "", bio: "", pic: "" },
    validationSchema: formValidationSchema,
    onSubmit: (data) => additem(data)
  });

  const additem = async (item) => {
    await fetch("https://63d75fd7afbba6b7c93bed4b.mockapi.io/Movie", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-type": "application/json" }
    });
    navigate("/Shop");

  };

  return <div className='add_profile_container'>
    <form className='add_profile_card' onSubmit={FormikS.handleSubmit}>
      <TextField onChange={FormikS.handleChange} name='name' helperText={FormikS.errors.name} value={FormikS.values.name} type="text" id="outlined-basic" label="name" variant="outlined" />
      <TextField onChange={FormikS.handleChange} name="pic" helperText={FormikS.errors.url} value={FormikS.values.url} type="url" id="outlined-basic" label="Photo" variant="outlined" />
      <Button type="submit" variant="contained">submit</Button>
    </form>
  </div>;
}
