import { useFormik } from "formik";
import Checkbox from "./components/Checkbox";
import './App.css';
import foto1 from './Default_one_white_female_beauty_woman_smiling_and_one_white_ch_1_367c0409-78f4-4f62-96be-4c9257c7fb42_1.jpg';

import Header from './components/Header'

const validate=(values)=>{
  const errors={}
  if(!values.name){
    errors.name='El nombre  es un campo  requerido'
  }else if (values.name.length < 3){
    errors.name='El nombre es muy corto'
  }
   

  if(!values.lastname){
    errors.lastname='El apellido es un campo requerido'
  }else if (values.lastname.length < 3){
    errors.lastname='El apellido es muy corto'
  }


  if(!values.email){
    errors.email='El email es un campo requerido'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email='El email es muy corto'
  }

  return errors
  }


function App() {
  const formik=useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''


    },
  
      validate,
    onSubmit: values => console.log (values)
  })
  return (
    <div className="container">
      <h1 > React call center</h1>
  


      <a href="https://app.leonardo.ai/" title="Made with Leonardo.ai">
        <div className="photo-container">
          <img className="PhotoHeader" src={foto1} alt="fotoheader" />
       
        </div>
      </a>


    
   <form onSubmit={formik.handleSubmit}>
    <Header>Formulario de acceso 
      </Header> 
   <label>Nombre</label>
   <input 
      type='text' {...formik.getFieldProps('name')}
      className='input'
   />
     {formik.errors.name && formik.errors.name ? <div> {formik.errors.name }</div> :  null }
   <br/>
   <label>Apellidos</label>
   <input 
     
      type='text'
    {...formik.getFieldProps('lastname')}
   />
   {formik.errors.lastname &&formik.errors.lastname ? <div> {formik.errors.lastname }</div> :  null }
<br/>
   <label>Email</label>
   <input 
      type='text'
      {...formik.getFieldProps('email')}
   />
    {formik.errors.email && formik.errors.email ? <div> {formik.errors.email }</div> :  null }
   <br/>

   <button type='submit'  className="trending-button"> Enviar</button>



   </form>
   </div>
  );
}

export default App;
