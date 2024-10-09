import React from "react";

function DisplayItem() {
  const now = new Date();
  let mydate = now.toLocaleDateString();
  let time = now.toLocaleTimeString();

  function getDayName(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  }
  let day = getDayName(now);
  return (
    <>
      <p>
        It is an Indian Clock which tells date and time ...So DOn't worry about
        being for late office or Colleges.
      </p>
      <p>
        Current Date is : {mydate} and day is {day} and time is {time}
      </p>
    </>
  );
}

export default DisplayItem;
