import React, { Component } from 'react'
import NumbersList from './numbersList'
import { Container, Table, Tab, Tabs, Button } from 'react-bootstrap';

class PhoneNumbers extends Component {

    render() {
        return (
            <Container>
                <Tabs defaultActiveKey="list" id="uncontrolled-tab">
                    <Tab eventKey="list" title="List">
                        <NumbersList />
                    </Tab>

                    <Tab eventKey="Add" title="Add">
                        <h1>ola</h1>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default PhoneNumbers