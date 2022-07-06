import {useState} from 'react'

const Add = (props) => {
  let emptyPiano = {name: '', image: '', price: '',}

  const [piano, setPiano] = useState(emptyPiano)

  const handleChange = (event) => {
      setPiano({...piano, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(piano)
    props.handleCreate(piano)
    setPiano({name: '',image: '',price: '',})
  }

  return (
        <>
            <details>
            <summary>Add Piano</summary>
                <form onSubmit={handleSubmit}>
                    {/* htmlFor creates a loop */}
                    <label htmlFor="name">Name: </label><br/>
                    <input type="text" name="name" value={piano.name}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="image">Image: </label><br/>
                    <input type="text" name="image" value={piano.image}
                    onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor="price">Price: </label><br/>
                    <input type="text" name="price" value={piano.price}
                    onChange={handleChange}/>
                    <  <input type="submit"/>
                </form>
            </details>
        </>
    )
}

export default Add
