import {useField} from 'react'

const Checkbox=({children, ...props})=>{
    const [ field, meta] = useField ({...props, type: 'checkbox'})
    return(

<div>
        <label>

            <input type="checkbox" {...field} {...props} />
            {children}
            {MediaMetadata.touched && MediaMetadata.error?
                <div> {MediaMetadata.error} </div> : null }
        </label>

</div>

    )


}

export default Checkbox