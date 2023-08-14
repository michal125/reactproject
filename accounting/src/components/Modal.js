import React, {useState} from 'react'

export const Modal = ({closeModal, onSubmit}) => {
    const [formState, setFormState] = useState({
        page: "",
        description: "",
        status: "live"

    })

    const validateForm = () => {
        if(formState.page && formState.description && formState.status){
            return true 
        } else {
            return false
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

       onSubmit(formState)

       closeModal();
    }

  return (
    <div className="modal-container" 
        onClick={(e)=>{
            if(e.target.className === "modal-container")closeModal()}}>
        <div className="modal">
            <form>
                <div className='form-group'>
                    <label htmlFor="page">Page</label>
                    <input name="page" value={formState.page} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={formState.description}  onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="status">Status</label>
                    <select name="status"  value={formState.status} onChange={handleChange}>
                        <option value="live">Live</option>
                        <option value="draft">Draft</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    </div>
  )
}

