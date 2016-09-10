export default function addWorkouts( state = {}, action) {
  console.log('reducer', action);
  switch (action.type) {
    case 'ADD_WORKOUT':
      return {...state, [action.workoutName]: {'lifts': action.lifts}}
    default:
      return state
  }
}
