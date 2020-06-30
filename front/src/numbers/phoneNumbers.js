import React, { Component } from 'react'
import NumbersList from './numbersList'
import NumbersForm from './numbersForm'
import { Container, Table, Tab, Tabs, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { create } from './numbersActions'

class PhoneNumbers extends Component {

    render() {
        return (
            <Container>
                <Tabs defaultActiveKey="list" id="uncontrolled-tab">
                    <Tab eventKey="list" title="List">
                        <NumbersList />
                    </Tab>

                    <Tab eventKey="Add" title="Add">
                        <NumbersForm onSubmit={this.props.create} />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapDispathToProps = dispatch => bindActionCreators({ create }, dispatch)
export default connect(null, mapDispathToProps)(PhoneNumbers)