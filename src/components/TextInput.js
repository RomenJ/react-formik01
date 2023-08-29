import { useField } from "formik"
const TextInput =({label,...props}) => {

const [field, meta]= useField()
console.log(field, meta)
return (

    <div> 

        <label > {label}</label>
        <input />
    </div>
)
    
}
export default TextInput