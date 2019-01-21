import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from './types'

export const addReminder = (text, dueDate) => {
	const action = {
		type: ADD_REMINDER,
		dueDate,
		text
	}
	console.log('action in addReminder', action)
	return action
}

export const deleteReminder = id => {
	const action = {
		type: DELETE_REMINDER,
		id
	}
	console.log('Deleting in action', action)
	return action
}

export const clearReminders = () => {
	const action = {
		type: CLEAR_REMINDERS
	}
	return action
}
