import React from 'react'
import image2 from './Wisp.jpg'
import "./style.css"
function fromNumberToGrade(number){
    if(number > 90){
        return "A+"
    }else if(number >= 85 && number<90){
        return "A"
    }
    else if(number >= 80 && number<85){
        return "A-"
    }
    else if(number >= 75 && number<80){
        return "B+"
    }
    else if(number >= 70 && number<75){
        return "B"
    }
    else if(number >= 65 && number<70){
        return "B-"
    }
    else if(number >= 60 && number<65){
        return "C+"
    }
    else if(number >= 55 && number<60){
        return "C"
    }
    else if(number >= 50 && number<55){
        return "C-"
    }
    else if(number >= 40 && number<50){
        return "D"
    }
    else if(number < 40 ){
        return "F"
    } else{
        return "unkown"
    }
}
function fromGradeToPoint(grade,subject){
    if(grade === "A+"){return 4} 
        else if(grade === "A" ){ return 4}
        else if(grade === "A-" ){ return 3.75}
        else if(grade === "B+" ){ return 3.5}
        else if(grade === "B" ){ return 3}
        else if(grade === "B-" ){ return 2.75}
        else if(grade === "C+" ){ return 2.5}
        else if(grade === "C" ){ return 2}
        else if(grade === "C-" ){ return 2.75}
        else if(grade === "D" ){ return 1}
        else if(grade === "F" ){ return 0}
    }
function gpa(subject,gradesValue){
    let gpa = 0
    for(let i = 0;i<6;i++){
        gpa = gpa + (subject[i] === 'math'? gradesValue[i] * 4: gradesValue[i] * 3)
    }
    console.log(gpa,'   ',gpa/19)
    return (gpa/19).toFixed(2)
}

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    onSubmit(){
        let total = []
        let grade = []
        let gradesValue = []
        let subjects = ['math','physics','td','cse','english','logic'] 
        for(let i = 0;i<6;i++){
            total.push(document.querySelector(`.${subjects[i]}`).value)
            grade.push(fromNumberToGrade(total[i]))
            gradesValue.push(fromGradeToPoint(grade[i]))
        }
        console.log(total)
        console.log(grade)
        console.log(gradesValue)
        document.querySelector('.result').innerHTML = `${gpa(subjects,gradesValue)}`   
    }
    render(){
        return(
            <div>
                
                <div className = 'content' >
                <h1 className = "name">From Mark(0-100)</h1>
                    <div className = 'form' > 
                        <div className = 'image'>
                            <img src = {image2}  alt = ''/>
                        </div>
                        <div className = 'form' > 
                        <div className = 'form-group' >
                            <label htmlFor = 'math' >Math</label>
                            <input  type = "text" className = 'math' name = "math" placeholder = "math" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'physics' >physics</label>
                            <input type = "text" name = "physics" className = 'physics'  placeholder = "physics" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'logic' >Logic/Civic</label>
                            <input type = "text" name = "logic" className = 'logic' placeholder = "logic/civic" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'Td' >Td</label>
                            <input type = "text" name = "td" className = 'td' placeholder = "td" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'English' >English</label>
                            <input type = "text" name = "english" className = 'english' placeholder = "English" ></input>
                        </div>
                        <div className = 'form-group' >
                            <label htmlFor = 'cse' >CSE</label>
                            <input type = "text" name = "cse" className = 'cse' placeholder = "cse" ></input>
                        </div>
                        
                        <div className = 'footer ' >
                            <button onClick = {this.onSubmit} type = "button" className = "btn">Calculate</button>
                        </div>
                        
                    </div>
                    <div className = 'rresult'>
                            Your Result is <span className = 'result' ></span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default Login