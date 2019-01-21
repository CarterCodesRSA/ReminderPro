import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder, deleteReminder, clearReminders } from './Actions/Actions'
import moment from 'moment'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			dueDate: ''
		}
	}

	addReminder() {
		this.props.addReminder(this.state.text, this.state.dueDate)
		console.log(
			'this.state.text, this.state.dueDate: ',
			this.state.text,
			this.state.dueDate
		)
	}

	deleteReminder(id) {
		console.log('deleting this application', id)
		console.log('this.props', this.props)
		this.props.deleteReminder(id)
	}

	renderReminders() {
		const { reminders } = this.props
		return (
			<ul className="list-group col-sm-4">
				{reminders.map(reminder => {
					return (
						<li
							key={reminder.id}
							className="list-group-item d-flex justify-content-between align-items-center"
						>
							{reminder.text}
							<em>
								{' ( '}
								{moment(new Date(reminder.dueDate)).fromNow()}
								{' ) '}
							</em>
							<span
								className="badge"
								onClick={() => this.deleteReminder(reminder.id)}
							>
								&#x2715;
							</span>
						</li>
					)
				})}
			</ul>
		)
	}

	render() {
		console.log('This.props', this.props)
		return (
			<div className="App">
				<div className="title">Reminder Pro</div>
				<div className="form-inline">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="I have to..."
							onChange={e => this.setState({ text: e.target.value })}
						/>
						<input
							className="form-control"
							type="datetime-local"
							onChange={e => this.setState({ dueDate: e.target.value })}
						/>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => this.addReminder()}
						>
							Add Reminder
						</button>
					</div>
				</div>
				{this.renderReminders()}
				<button
					className="btn btn-danger"
					onClick={() => this.props.clearReminders()}
				>
					Clear Reminders
				</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ addReminder, deleteReminder, clearReminders },
		dispatch
	)
}

function mapStateToProps(state) {
	console.log('Map state to props', state)
	return {
		reminders: state
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
