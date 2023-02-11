import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Shoppage() {
  useEffect(() => mainval(), []);
  const mainval = () => {


    fetch("https://63d75fd7afbba6b7c93bed4b.mockapi.io/Movie")
      .then(response => response.json())
      .then(data => setmaindata(data));

  };
  const [maindata, setmaindata] = useState([]);
  return <div className='furniture_container'>
    {maindata.map((nm, index) => (<Furniture key={index} img={nm.pic} name={nm.name} bio={nm.bio} Data={nm} mainval={mainval} />))}
  </div>;
}
export const formValidationSchema = yup.object({
  name: yup.string().required().min(5),
  pic: yup.string().required().min(5).url(),
});
function Furniture({ name, bio, img, DLET, Data, mainval }) {
  const [edit, setedit] = useState(true);
  const navigate = useNavigate();
  const editdata = () => {
    setedit(false);
  };
  const backbutton = () => {
    setedit(true);
  };
  const Formik = useFormik({
    initialValues: { name: `${Data.name}`, bio: "", pic: `${Data.pic}` },
    validationSchema: formValidationSchema,
    onSubmit: (data) => {
      additem(data);

    }
  });

  const additem = async (item) => {
    await fetch(`https://63d75fd7afbba6b7c93bed4b.mockapi.io/Movie/${Data.id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: { "Content-type": "application/json" }
    });
    setedit(true);
    mainval();

  };
  const Deletdata = async () => {
    await fetch(`https://63d75fd7afbba6b7c93bed4b.mockapi.io/Movie/${Data.id}`, {
      method: "DELETE"
    });
    mainval();
  };
  return <span>
    {edit ? <div className='furniture_card'>
      <img className='furniture_image' src={img} />
      <h5 className='card_title'>{name}
      </h5>
      <span className='furniture_icon'><EditIcon onClick={editdata} /><DeleteIcon onClick={Deletdata} /></span> </div> :
      <div>
        <form className='furniture_card' onSubmit={Formik.handleSubmit}>
          <div><ArrowBackIcon onClick={backbutton} /></div>
          <TextField onChange={Formik.handleChange} name='name' helperText={Formik.errors.name} value={Formik.values.name} type="text" id="outlined-basic" label="name" variant="outlined" />
          <TextField onChange={Formik.handleChange} name="pic" helperText={Formik.errors.url} value={Formik.values.pic} type="url" id="outlined-basic" label="Photo" variant="outlined" />
          <Button type="submit" variant="contained">submit</Button>
        </form>
      </div>}
  </span>;
}
