export function addWorkout(workoutName, lifts) {
  console.log('action', workoutName);
  return {
    type: ADD_WORKOUT,
    workoutName,
    lifts
  }
}

export function validate(values) {
  console.log('validate', values);
  const errors = {}
  // if(!values.clubName) {
  //   errors.clubName = 'Required'
  // }
  // if (!values.members || !values.members.length) {
  //   errors.members = { _error: 'At least one member must be entered' }
  // } else {
  //   const membersArrayErrors = []
  //
  //   if(membersArrayErrors.length) {
  //     errors.members = membersArrayErrors
  //   }
  // }
  return errors
}
