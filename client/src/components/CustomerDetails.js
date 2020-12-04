import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customerActions';

class CustomerDetails extends Component {
    state = {
        custname: '',
        emailID: '',
        location: ''
    }

    onSubmit = e => {
        e.preventDefault();
        //Check if record exists already
        const newCustomer = {
            custname: this.state.custname,
            emailID: this.state.emailID,
            location: this.state.location
        }
        check = this.props.checkCustomerExist(newCustomer.emailID);
        if(!check) {
            this.props.addCustomer(newCustomer);
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <div>
                            <Label for="customer">Enter Customer Name</Label>
                            <Input
                            type="text"
                            name="custname"
                            id="custname"
                            value={this.state.custname}
                            onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <Label for="customer">Enter Email Address</Label>
                            <Input
                            type="text"
                            name="emailID"
                            id="emailID"
                            value={this.state.emailID}
                            onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <Label for="customer">Enter Location</Label>
                            <Input
                            type="text"
                            name="location"
                            id="location"
                            value={this.state.location}
                            onChange={this.onChange}
                            />
                        </div>                        
                        <Button
                            color="dark"
                            style={{marginTop='2rem'}}
                            block
                            >Add Customer
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customer: state.customer
});

export default connect(mapStateToProps, { addCustomer })(CustomerDetails);