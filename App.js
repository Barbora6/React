import categories from './categories'
import allMovies from './data'
import { useState} from 'react'
import './App.css'

const App = () => {

    const[typeOfMovie, setTypeOfMovie] = useState('komedie')

    const vysledneFilmy = allMovies.filter((oneMovie) => {
        return oneMovie['category'] === typeOfMovie
    })

  return (
    <div>
        <div className='all-buttons'>
            {
                categories.map((oneCatery, index) => {
                    return <button className='one-button' key={index} onClick={() => setTypeOfMovie(oneCatery)}>{oneCatery}</button>
                } )
            }
        </div>

        <div className='all-movies'>
            {
                vysledneFilmy.map((oneMovie) => {
                    const{id, image, title, age, tags, description} = oneMovie

                    return <div className='one-movie' key={id}>
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default App


// KOD ENGETO

// import { useState } from 'react'
// import allMovies from './data'
// import categories from './categories'
// import './App.css'


// const App = () => {
//     const[typeOfMovie, setTypeOfMovie] = useState('komedie')

//     const filteredMovies = allMovies.filter(oneMovie => 
//     oneMovie.category === typeOfMovie
//     )

    
//   return (
//     <div>
//         <div className='all-buttons'>
//             {
//                 categories.map((oneCategory, index) => {
//                     return <button className='one-button' key={index} onClick={() => setTypeOfMovie(oneCategory)}>{oneCategory}</button>
//                 })
//             }
//         </div>
//         <div className='all-movies'>
//             {
//                 filteredMovies.map( oneMovie => {
//                     const {id, image, title, age, tags, description} = oneMovie
//                     // destructuring objektu

//                     return <div className='one-movie' key={id}>
//                         <img src={image} alt="" />
//                         <h2>{title}</h2>
//                         <p>{age}</p>
//                         <p>{tags}</p>
//                         <p>{description}</p>
//                     </div>

//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default App