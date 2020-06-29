import React, { Component } from 'react'
import { getList } from './numbersActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Table, Tab, Tabs, Button } from 'react-bootstrap';

class numbersList extends Component {

    componentDidMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(num => (
            <tr key={num.id}>
                <td>{num.value}</td>
                <td>{num.monthyPrice}</td>
                <td>{num.setupPrice}</td>
            </tr>
        ))
    }

    render() {
        return (

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numbers</th>
                        <th>Month</th>

                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => ({ list: state.numbersReduce.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(numbersList)
