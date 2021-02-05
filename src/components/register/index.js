import React from 'react'
import image2 from '../login/Wisp.jpg'
import "./style.css"

function fromGradeToPoint(grade,subject){
    if(grade === "A+" || grade === "a+" ){return 4} 
        else if(grade === "A" || grade === "a"){ return 4}
        else if(grade === "A-" || grade === "a-"){ return 3.75}
        else if(grade === "B+" || grade === "b+"){ return 3.5}
        else if(grade === "B" || grade === "b"){ return 3}
        else if(grade === "B-" || grade === "b-"){ return 2.75}
        else if(grade === "C+" || grade === "c+"){ return 2.5}
         else if(grade === "C" || grade === "c"){ return 2}
        else if(grade === "C-" || grade === "c-"){ return 2.75}
         else if(grade === "D" || grade === "d"){ return 1}
         else if(grade === "F" || grade === "f"){ return 0}
    }
function gpa(subject,gradesValue){
    let gpa = 0
    for(let i = 0;i<6;i++){
        gpa = gpa + (subject[i] === 'math2'? gradesValue[i] * 4: gradesValue[i] * 3)
    }
    console.log(gpa,'   ',gpa/19)
    return (gpa/19).toFixed(2)
}
class Register extends React.Component{
    constructor(props){
        super(props)
    }
    onSubmit(){
        let grade = []
        let gradesValue = []
        let subjects = ['math2','physics2','td2','cse2','english2','logic2'] 
        for(let i = 0;i<6;i++){
            console.log(document.querySelector(`.${subjects[i]}`).value)
            grade.push(document.querySelector(`.${subjects[i]}`).value)
            gradesValue.push(fromGradeToPoint(grade[i]))
        }
        console.log(grade)
        console.log(gradesValue)
        document.querySelector('.result2').innerHTML = `${gpa(subjects,gradesValue)}`   
    }
    render(){
        return(
            <div>
                <h1 className = 'name' >From Grade(A-F)</h1>
                <div className = 'content' >
                    
                    <div className = 'form' > 
                        <div className = 'image'>
                            <img src = {image2} alt = ''/>
                        </div>
                        <div className = 'form' > 
                        <div className = 'form-group' >
                            <label htmlFor = 'math' >Math</label>
                            <input  type = "text" className = 'math2' name = "math2" placeholder = "math" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'physics2' >physics</label>
                            <input type = "text" name = "physics2" className = 'physics2'  placeholder = "physics" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'logic' >Logic/Civic</label>
                            <input type = "text" name = "logic2" className = 'logic2' placeholder = "logic/civic" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'Td2' >Td</label>
                            <input type = "text" name = "td2" className = 'td2' placeholder = "td" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'English' >English</label>
                            <input type = "text" name = "english2" className = 'english2' placeholder = "English" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'cse2' >CSE</label>
                            <input type = "text" name = "cse2" className = 'cse2' placeholder = "cse2" ></input>
                        </div>
                        
                        <div className = 'footer ' >
                            <button onClick = {this.onSubmit} type = "button" className = "btn2">Calculate</button>
                        </div>
                        
                    </div>
                    <div className = 'rresult2'>
                            Your Result is <span className = 'result2' ></span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default Register