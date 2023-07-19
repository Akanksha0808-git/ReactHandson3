import React ,{ Component} from 'react'

class DisplayForm extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value);
    }
    render(){
        return(
        <>
        <h1 className='head1'><h1>Employee Feedback Data</h1></h1>
        <div id='parentBox'>
        {this.props.value.map((item,index)=>{
            return(
              
                <div id='contentbox' >
                <span id='content' key={index}> Name: {item.Name} 
                || Department : {item.DeptName} || Rate: {item.Rate}</span>
              
             </div>
            )
        })}
        </div>
        <button id='button2' onClick={this.props.toggleFunc}>Go Back</button> 
        </>
        )
    }
}
export default DisplayForm;
