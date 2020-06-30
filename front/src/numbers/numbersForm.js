import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Button } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

const validate = values => {
    const errors = {}
    if (!values.value) {
        errors.value = 'Required'
    }
    if (!values.monthyPrice) {
        errors.value = 'Required'
    }
    return errors
}

const renderField = ({ input, meta: { touched, error, warning } }) => (
        <div>
            <input {...input}  className="form-control" />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
)

class NumbersForm extends Component {

    render() {
        const { handleSubmit, submitting, pristine } = this.props
        return (
            <Form role='form' onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Field name='value' component={renderField} placeholder="Phone Number" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Field name='monthyPrice' component={renderField} placeholder="Price" />
                </Form.Group>
                <Button disabled={pristine || submitting} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default reduxForm({ form: 'phoneNumbersForm', validate })(NumbersForm)
