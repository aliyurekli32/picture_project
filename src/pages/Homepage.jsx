import Picture from "../components/Picture"
//import data from "../helpers/data"

const Homepage=({data})=>{
    //const {data}=props

  
    
    return(
        
        <div>
            <h1>Albums</h1>
            <Picture data={data} />
        </div>
    )
}

export default Homepage 