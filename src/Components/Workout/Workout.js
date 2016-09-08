import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import InputField from '../InputField'

const renderLifts = ({ fields }) => (
  // <div>
  //   <Field
  //     name={`${fields}.name`}
  //     type="text"
  //     component={InputField}
  //     label="Workout Name"/>
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Lift</button>
      </li>
      {fields.map((lift, index) =>
        <li key={index}>
          <button
            type="button"
            title="Remove Lift"
            onClick={() => fields.remove(index)}>X</button>
          <h4>Lift #{index + 1}</h4>
          <Field
            name={`${lift}.name`}
            type="text"
            component={InputField}
            label="Lift Name"/>
          <Field
            name={`${lift}.weight`}
            type="text"
            component={InputField}
            label="Weight"/>
          <Field
            name={`${lift}.setTotal`}
            type="text"
            component={InputField}
            label="Set Count"/>
          <Field
            name={`${lift}.repTotal`}
            type="text"
            component={InputField}
            label="Reps"/>

          <FieldArray name={`${lift}.sets`} component={renderSets}/>
        </li>
      )}
    </ul>
  // </div>
)

const renderSets = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Set</button>
    </li>
    {fields.map((set, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Set"
          onClick={() => fields.remove(index)}>X</button>
        <Field
          name={set}
          type="text"
          component={InputField}
          label={`Set #${index + 1}`}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const singleWorkout = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="workoutName" type="text" component={InputField} label="Workout Name"/>
      <FieldArray name="lifts" component={renderLifts}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

function submit(values) {
  console.log(values);

}

export default reduxForm({
  form: 'singleWorkout'     // a unique identifier for this form
})(singleWorkout)
