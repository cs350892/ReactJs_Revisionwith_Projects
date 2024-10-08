function Random(){
    let num=Math.random()*100;
    return <h1 style={{'background-color' : '#657679'}}>Random no is : {Math.floor(num)}</h1>
}
export default Random