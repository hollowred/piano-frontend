import {useState} from 'react'

const Delete = (props) => {

    const [piano, setPiano] = useState({...props.piano})


return (
    <>

 {/* ======================= MODAL WINDOW TO DELETE PIANO ======================= */}
 <a id='showBtn' type="button" class="btn btn-dark" role="button" data-bs-toggle="modal" data-bs-target="#modalDelete">Delete Piano</a>

{/* ======================= MODAL WINDOW TO DELETE PIANO ======================= */}
<div class="modal fade" id="modalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel">Delete Piano -- {piano.name}, {piano.price}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
Deleting this Piano will permanantly delete the instrument from the database. Do you want to continue?
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <button type="button" onClick={() => {props.handleDelete(props.piano)}} class="btn btn-secondary" data-bs-dismiss="modal">Delete</button>
</div>
</div>
</div>
</div>

    </>
)
}

export default Delete
