import {useState} from 'react'

const Edit = (props) => {
    const [piano, setPiano] = useState({...props.piano})

    const handleChange = (event) => {
        setPiano({...piano, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(piano)
        props.handleUpdate(piano)
    }
    return(
        <>
            {/* ======================= MODAL WINDOW TO EDIT PIANO ======================= */}
        <a id='showBtn' type="button" class="btn btn-dark" role="button" data-bs-toggle="modal" data-bs-target="#modalEdit">Edit Piano</a>

            {/* ======================= MODAL WINDOW TO EDIT PIANO ======================= */}
        <div class="modal fade" id="modalEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Edit Piano -- {piano.name} {piano.price}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="form-group">
            <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label><br/>
                    <input type="text" class="form-control" name="name" value={piano.name}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="image">Image: </label><br/>
                    <input type="text" class="form-control" name="image" value={piano.image}
                    onChange={handleChange}/>
                    <br/>
                    <label htmlFor="price">Price: </label><br/>
                    <input type="number" class="form-control" name="price" value={piano.price}
                    onChange={handleChange}/>
                    <br/>
                    <input type="submit" class="btn btn-dark" data-bs-dismiss="modal"/>
                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
        </div>
        </>
   )
}
export default Edit
