import React from 'react';

function List({people}){
	return(
		<>
		{people.map((people) =>{

const {id, name, dob, image} = people;

return( 
	<>	
<div key = {people.id} className="maincontainer">
<img src ={image}/>
	<div className = "subcontainer">
		<h3>{name}</h3>
		<p>{Old(dob)}</p>
	</div>

</div>

	</>
	)

	})}
	</>

)
}

//how old person is

function Old(personAge){
let year = new Date(personAge).getFullYear();
let currentYear = new Date().getFullYear();
let age = currentYear - year;
return age;

}



export default List;