import React from 'react'

function FormComponent(props) {
    return (
    <main>
    <form>
        <input name="firstName" value={props.data.firstName} placeholder="Name" onChange={props.handleChange}/>
        <input name="lastName" value={props.data.lastName} placeholder="Last Name" onChange={props.handleChange}/>
        <input name="age" onChange={props.handleChange}>Age</input>
        
        <label>
            <input 
                type="radio" 
                name="gender" 
                value="male"
                checked={props.data.gender === 'male'}
                onChange={props.handleChange} />
            Male
            </label>
        <label>
            <input 
                type="radio" 
                name="gender" 
                value="female"
                checked={props.data.gender === 'female'}
                onChange={props.handleChange} />
            Male
        </label>

        <label>
            <input
            type="checkbox"
            name="vegan"
            onChange={props.handleChange}
            checked={props.data.vegan} />
            Vegan
        </label>
        <label>
            <input
            type="checkbox"
            name="vegetarian"
            onChange={props.handleChange}
            checked={props.data.vegetarian} />
            Vegetarian
        </label>
        <label>
            <input
            type="checkbox"
            name="omni"
            onChange={props.handleChange}
            checked={props.data.omni} />
            I eat all that fits
        </label>



        <select
        value={props.data.location}
        name="location"
        onChange={props.handleChange}>
        <option value="">Choose your location</option>
        <option value="prague">Prague</option>
        <option value="brno">Brno</option>   
        </select>

        <button>Submit</button>


    </form>
</main>
    )

}

export default FormComponent