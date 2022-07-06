import {useState} from 'react'

const NavBar = (props) => {

    let emptyPiano = {name: '',image: '',price: ''}

    const [piano, setPiano] = useState(emptyPiano)


    const handleChange = (event) => {
        setPiano({...piano, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(piano)
        props.handleCreate(piano)
        setPiano({name: '',image: '',prices: ''})
    }

    return(
        <>
        {/* ======================= NAV BAR ======================= */}
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">Pianos These Are</a>
            <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul class="navbar-nav mx-auto">
                {/* ======================= HOME LINK ======================= */}
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" role='button' onClick={() => {props.homePage(props.pianos)}}>Home</a>
                </li>
                {/* ==================== MODAL TRIGGER FOR ADD SPECIES ===================== */}
                <li class="nav-item">
                    <a class="nav-link" role="button" data-bs-toggle="modal" data-bs-target="#modalAdd"><i class="bi bi-plus-circle"> Add Piano</i></a>
                </li>


            {/* ======================= ABOUT DROPDOWN NAV BAR LINK ======================= */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                    <li><a class="dropdown-item" href="https://github.com/hollowred" target='_blank' rel="noreferrer"><i class="bi bi-github"> Salem</i></a></li>

                </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" role='button' onClick={() => {props.conservationPage(props)}}>Conservation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" role='button' onClick={() => {props.sourcePage(props)}}>Sources</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">© 2022</a>
                </li>
            </ul>

            {/* ======================= NAV SEARCH BAR LINK ======================= */}

            <form class="d-flex">
                <input class="form-control me-2" type='text' placeholder="Search This Page" value={props.query} id='query' onChange={props.handleOnSearch}/>
                <button class="btn btn-outline-success" type="submit" onChange={props.handleOnSearch}>Search</button>
            </form>
            </div>
        </div>
        {/* ==================== HAMBURGER FOR SMALLER MEDIA QUERIES ==================== */}
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
            </div>
            <nav class="navbar  ms-auto navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            </nav>
        </nav>

        {/* ======================= MODAL WINDOW - ADD PIANOS ======================= */}
        <div class="modal fade" id="modalAdd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Add Pianos to Index</h5>
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

export default NavBar
