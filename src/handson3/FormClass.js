import React from 'react';
import { Component } from 'react';
import DisplayForm from './DisplayForm';

class FormClass extends Component {
    state = {
        Name: '',
        clicked: true,
        DeptName: '',
        Rate: '',
        EmpData: []
    }
    changeHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    toggleFunction = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    clickHandle = () => {
        let newObj = {
            Name: this.state.Name,
            DeptName: this.state.DeptName,
            Rate: this.state.Rate
        }
        this.state.EmpData.push(newObj);
        this.setState({
            EmpData: this.state.EmpData,
            Name: '',
            clicked: false,
            Rate: '',
            DeptName: ''

        })
        console.log(this.state.EmpData);
    }
    render() {
        return (
            <div >
              
                {this.state.clicked ?
                  <div>
                     <h1 className='head1'>
                        <h1>Employee Feedback Form</h1></h1>
                     <form id='FormBox'>
                     <label id='name1' htmlFor='name'>Name :</label>
                        <input
                            id='name'
                            type='text'
                            placeholder='Enter Name'
                            name='Name'
                            value={this.state.Name} 
                            onChange={this.changeHandle} required /> <br />
                        <label id='dept1' htmlFor='Dept'>Department :</label>
                        <input
                            id='dept'
                            type='text'
                            placeholder='Enter Dept Name' name='DeptName'
                            value={this.state.DeptName} onChange={this.changeHandle} required />
                        <br />
                        <label id='rate1' htmlFor='Rate'>Rating :</label>
                        <input
                            id='rate'
                            type="number"
                            min="1"
                            max="5"
                            placeholder='Enter Rating'
                            name='Rate'
                            value={this.state.Rate} onChange={this.changeHandle} required />
                        <br />
                        <button className='button1 ' type='button' onClick={this.clickHandle}>Submit</button>
                    </form>
                    </div> 
                    :

                    <DisplayForm value={this.state.EmpData} toggleFunc={this.toggleFunction} />
                }


            </div>

        )
    }
}
export default FormClass;