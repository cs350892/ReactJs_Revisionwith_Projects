function ToDoItem1() {
  let date = "06//10/2024";
  let todo = "LeetCodeQuestions";
  return (
    <>
      <div className="row">
        <div className="col-6">ReactJS Complete</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </>
  );
}
export default ToDoItem1;
