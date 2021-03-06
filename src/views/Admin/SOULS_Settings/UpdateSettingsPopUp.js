import React, {Component} from 'react'
import { Modal, Button} from 'react-bootstrap'
import {updateSettings} from '../AdminFunctions'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label
  } from "reactstrap";


export default class UpdateRolePopUp extends Component{
    constructor(props){
        super(props);
        this.state= {
            status: false,
            souls_setting_id: this.props.souls_setting_id,
            type: "",
            url: "",
            description: "",
            hostname: "",
            username: "",
            password: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange=(e)=>{
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit=async (e)=>{
        e.preventDefault()
        const user = {
            souls_setting_id: this.state.souls_setting_id,
            url: this.state.url,
            description: this.state.description,
            hostname: this.state.hostname,
            username: this.state.username,
            password: this.state.password,
        };
        console.log("changing");
        let changed =await updateSettings(user);
        console.log(changed)
        if(changed) {
            console.log(" changed succesfully")
            this.setState({status: true})
        }
        
    }

    render(){
        return(
            <div>
                {this.state.status ?
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{color:"green"}}>Settings Updated !! </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.onSubmit} style={{padding:"5px", margin:"10px"}}>
                            <FormGroup row className="my-0">
                                <Label htmlFor="url" style={{color:"green"}}>URL</Label>
                                <br></br>
                                <Input type="text" id="url" placeholder="URL Updated" name="url" style={{padding: "8px"}} onChange={this.onChange} disabled={true} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <Label htmlFor="description" style={{color:"green"}}>Description</Label>
                                <br></br>
                                <Input type="text" id="description" placeholder="Description Updated" name="description" style={{padding: "8px"}} onChange={this.onChange} disabled={true}/>
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <Label htmlFor="hostname" style={{color:"green"}}>Host Name</Label>
                                <br></br>
                                <Input type="text" id="hostname" placeholder="Hostname Updated" name="hostname" style={{padding: "8px"}} onChange={this.onChange} disabled={true} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <Label htmlFor="username" style={{color:"green"}}>User Name</Label>
                                <br></br>
                                <Input type="text" id="username" placeholder="username" name="username" style={{padding: "8px"}} onChange={this.onChange} disabled={true} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <Label htmlFor="password" style={{color:"green"}}>Password</Label>
                                <br></br>
                                <Input type="text" id="password" placeholder="password" name="password" style={{padding: "8px"}} onChange={this.onChange} disabled={true}/>
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.onSubmit}  style={{padding:"5px", margin:"10px"}}>
                            <FormGroup row className="my-0">
                                <label htmlFor="url">URL</label>
                                <br></br>
                                <Input type="text" id="url" placeholder="URL" name="url" style={{padding: "8px"}} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <label htmlFor="description">Description</label>
                                <br></br>
                                <Input type="text" id="description" placeholder="Description" name="description" style={{padding: "8px"}} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <label htmlFor="hostname">Host Name</label>
                                <br></br>
                                <Input type="text" id="hostname" placeholder="Hostname" name="hostname" style={{padding: "8px"}} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <label htmlFor="username">User Name</label>
                                <br></br>
                                <Input type="text" id="username" placeholder="Username" name="username" style={{padding: "8px"}} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup row className="my-0">
                                <label htmlFor="password">Password</label>
                                <br></br>
                                <Input type="text" id="password" placeholder="Password" name="password" style={{padding: "8px"}} onChange={this.onChange} />
                            </FormGroup>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onSubmit}>
                        Update
                    </Button>
                    </Modal.Footer>
                </Modal>
                }
            </div>

        );
    }

}