import { Link } from "react-router-dom"
import { useState } from "react"

const AllPuppies = (props) => {
    const [search, setSearch] = useState("");

    let filteredPuppies = props.puppyProps.filter((singlePuppyElement) => {
        let lowercaseName = singlePuppyElement.name.toLowerCase();
        console.log(lowercaseName)

        return lowercaseName.includes(search.toLowerCase())
    })
    console.log(props)


    return (
        <div>
            <h2> All Puppy Players: </h2>

            <input type="text"placeholder="Search Puppies here..."></input>

            

            {
            props.puppyProps.length ? props.puppyProps.map((singlePuppyElement, index) => {
                console.log(singlePuppyElement)
                return (  
                    <div key={index}>
                        <p>Name: {singlePuppyElement.name}
                        </p>
                        <Link to={`/puppies/${singlePuppyElement.id}`}>{singlePuppyElement.name}</Link>
                    </div> 
                )
            }) : <div> No data yet...</div>
            } 
        </div>
    )
}

export default AllPuppies;