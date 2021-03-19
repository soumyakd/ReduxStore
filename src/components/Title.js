import React from 'react'
import {connect} from 'react-redux'

import {addTitle} from '../actions/titleAction'

class Title extends React.Component{
    constructor(){
        super()
        this.state = {
            title: ''       
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        const newData = {
            title: this.state.title
        }
        this.props.dispatch(addTitle(newData))
        this.setState ({
            title: ''
        })
    }

    render() {
        return (
            <div>
                <br/>
                <center>
                <div>
                    <h1> Component </h1> 
                    <form onSubmit={this.handleSubmit}> 
                        <div>
                            <label htmlFor='title'>  </label> 
                            <input type= 'text' 
                                    placeholder= 'Enter Text' 
                                    name= 'title'
                                    value= {this.state.title} 
                                    onChange= {this.handleChange} 
                            />
                        </div>
                        <br/>          
                        <input type='submit' value='Submit'/>
                    </form>
                </div> 

                <h1> Result </h1>
                
                <div>
                {
                    this.props.title.map((ele, i) =>{
                        return (
                            <div key={i}>
                                <h2> {ele.title.split('').reverse()} </h2>
                            </div>
                        )
                    })
                }
                </div>
                </center>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return{
        title: state.title
    }
}
export default connect(mapStateToProps)(Title)




