import React from 'react'

//function Greet(){
//    return <h1>Hello Greet</h1>
//}

//const Greet = () => <h2>Hello Greet</h2> // drugi sposob

//export const Greet = () => <h2>Hello Greet</h2> // trzeci sposob

// props
const Greet = (props) => {
    const {name, heroName} = props
//console.log(props)
return ( 
<div>
    {/*<h2>Hello {props.name} a.k.a {props.heroName}</h2> */}
    <h2>Hello {name} a.k.a {heroName}</h2> 
    {/*props.children*/}
</div>

)
}
export default Greet;