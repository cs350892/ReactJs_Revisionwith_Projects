import './App.css';
import Title  from '../../projects/1.0IndianClock/src/components/Title';
import DisplayItem from '../../projects/1.0IndianClock/src/components/DisplayItem';

function App(){
let date ="10/10/2024";
let time ="06:06pm";
let day="Monday";

return <>
 <h1>Indian Clock</h1>
 <p>It is an Indian Clock which tells date and time ...So DOn't worry about being for late office or Colleges</p>
<p>Currnet Date is : {date} and day is {day}</p>

</>


}