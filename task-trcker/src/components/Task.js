// const task=[//task in json format and takin it as body and fetching through map function
// {
//     id:1,
//     text: "go Home",
//     day: "january 1",
//     reminder: true,

// },
// {
//     id:2,
//     text: "time pass",
//     day: "2 feb",
//     reminder: true,

// },
// {id:1,
//     text: "bring food",
//     day: "january 5",
//     reminder: false,

// }]

import Tasks from "./Tasks";
function Task({tasks,onDelete, onToggle}){

    return(
    
        <div>
        {tasks.map((task, index) => 
            (<Tasks key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
             /> ))}
        </div>
    )
}
export default Task;