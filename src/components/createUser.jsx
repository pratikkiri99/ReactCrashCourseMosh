import React, { Component } from "react";

export class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        isLoading: false,
        fname: '',
        lname: ''
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log("submit value :" + this.state.fname + " " + this.state.lname);

        const postData = {

            fname: this.state.fname,
            lname: this.state.lname
        }

        console.log("data : " + postData);

        fetch("http://localhost:8988/user", {
            headers: {
                'Accept': 'application/text',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(postData),
            method: 'POST'
        }).then(response => {
            console.log("response : " + response);
        }).catch(err=>err);

    }

    handleChange=event=> {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}





export default CreateUser;