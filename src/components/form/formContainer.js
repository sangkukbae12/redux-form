import React from "react";
import { connect } from "react-redux";
import { reduxForm, getFormValues } from "redux-form";
import FormComponent from "./formComponent";

const FormContainer = ({ formValues, change, handleSubmit }) => {
  const submitForm = formValues => {
    console.log("submitting Form: ", formValues);
  };
  return (
    <FormComponent
      formValues={formValues}
      change={change}
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = state => ({
  formValues: getFormValues("my-very-own-form")(state)
});

const formConfiguration = {
  form: "my-very-own-form"
};

export default connect(mapStateToProps)(
  reduxForm(formConfiguration)(FormContainer)
);
