import {React,useState} from 'react';
import Data from'../Component/Data.js';
import List from '../Component/List.js';

function Main(){
	const [people,setPeople] = useState(Data);

return(
<>
<div class ="main">
<h1>Birthday Remainder</h1>
<div className ="today">
<h2> Today's Birthday</h2>
<List people = {Today(people)}/>
</div>

<div className ="upcoming">
<h2> Upcoming Birthday</h2>
<List people = {Upcoming(people, 2)}/>
</div>
<button onClick = {()=> setPeople([])}>Clear All</button>
</div>
</>
)
}



/*Find out todays Birthday */

function Today(date){

let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth();
let filter = date.filter((data) =>{
let date = new Date(data.dob).getDate();	
let month = new Date(data.dob).getMonth();

return currentDate == date && currentMonth == month
})
return filter;
}

/* Find out upcoming birthday */

function Upcoming(person, toMonth){

	let currentMonth = new Date().getMonth();

	let currentDate = new Date().getDate();

let filter = person.filter((data) => {
	let month = new Date(data.dob).getMonth();
	let  date = new Date(data.dob).getDate();

	/* Removed todays date birthday from upcoming list */

	if (currentDate == date) return false; 

	return month >= currentMonth && month <= currentMonth + toMonth;
})
 return filter;
}


export default Main;


