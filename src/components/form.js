import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
	componentDidMount() {
		const {
			redirect
			} = this.props;
		  redirect('');
		}

	handleUpdate() {
		const { 
				post: { 
					name, english, tamil, maths, science, social, id, gender, section
					}, errorclass, noerror, updateData, redirect
			} = this.props;
		const data = {
				name,
				english: parseInt(english, 10),
				tamil: parseInt(tamil, 10),
				maths: parseInt(maths, 10),
				science: parseInt(science, 10),
				social: parseInt(social, 10),
				id,
				gender,
				section 
		};
		if (name === '' || english === '' || tamil === '' || maths === '' || science === '' || social === '') {
			if (name === '') {
				errorclass('nameCheck', 'form-control error');
			} else if (english === '') {
				errorclass('englishCheck', 'form-control error');
			} else if (tamil === '') {
				errorclass('tamilCheck', 'form-control error');
			} else if (maths === '') {
				errorclass('mathsCheck', 'form-control error');
			} else if (science === '') {
				errorclass('scienceCheck', 'form-control error');
			} else if (social === '') {
				errorclass('socialCheck', 'form-control error');
			}	
			return;	
		}
		noerror('form-control');
		updateData(data);
		window.alert("Updated successfully");
		redirect(false);
	}

	handleClick() {
		const { 
			post: { 
				name, english, tamil, maths, science, social, duplicate, gender, section 
				}, errorclass, noerror, addData, redirectadd
			} = this.props;
		const id = duplicate.length + 1;
		const newData = {
 						name,
						english: parseInt(english, 10),
						tamil: parseInt(tamil, 10),
						maths: parseInt(maths, 10),
						science: parseInt(science, 10),
						social: parseInt(social, 10),
						id, 
						gender,
						section 
						};
			if (name === '' || english === '' || tamil === '' || maths === '' || science === '' || social === '') {
			if (name === '') {
				errorclass('nameCheck', 'form-control error');
			} else if (english === '') {
				errorclass('englishCheck', 'form-control error');
			} else if (tamil === '') {
				errorclass('tamilCheck', 'form-control error');
			} else if (maths === '') {
				errorclass('mathsCheck', 'form-control error');
			} else if (science === '') {
				errorclass('scienceCheck', 'form-control error');
			} else if (social === '') {
				errorclass('socialCheck', 'form-control error');
			}	
			return;	
		}
		noerror('form-control');	
		const data = duplicate.concat(newData);
		addData(data, newData);
		window.alert("Added successfully");
		redirectadd(true);
	}

	handleChange(e) {
		const { name } = e.target;
		let { value } = e.target;
		console.log(name);
		console.log(value);
		const { errorclass, inputChange } = this.props;
		if (name === 'english' || name === 'tamil' || name === 'maths' || name === 'science' || name === 'social') {
			if (value > 100) {
				return;
			} if (value < 100) {
				value = e.target.value.substr(0, 3);
			} else {
				value = e.target.value.replace(/[^0-9.]/g, '');
			}
		}
		if (name !== '') {
			if (name === 'name') {
				errorclass('nameCheck', 'form-control');
			} else if (name === 'english') {
				errorclass('englishCheck', 'form-control');
			} else if (name === 'tamil') {
				errorclass('tamilCheck', 'form-control');
			} else if (name === 'maths') {
				errorclass('mathsCheck', 'form-control');
			} else if (name === 'science') {
				errorclass('scienceCheck', 'form-control');
			} else if (name === 'social') {
				errorclass('socialCheck', 'form-control');
			}
		}
		inputChange(name, value);
	}

	render() {
		let button;
		const { 
			post: { 
					add, name, nameCheck, english, englishCheck, tamil, tamilCheck,
					maths, mathsCheck, social, socialCheck, science, scienceCheck, success, gender, section
				  }
			} = this.props;
		if (add === true) {
			button = <button type="button" className="btn btn-info" onClick={this.handleClick.bind(this)}>Add Member</button>;
		} else if (add === false) {
			button = <button type="button" className="btn btn-info" onClick={this.handleUpdate.bind(this)}>update Member</button>;
		}
		return (
			<div className="w-25 mx-auto">
				<h4 className="mt-3 text-info">STUDENT TABLE LIST UPDATER</h4>
				<p className="text-success font-weight-bold">{success}</p>
				<div className="form-group">
					<label htmlFor="name" className="font-weight-bold">
						Name:
					<br />
					<input
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange.bind(this)}
						className={nameCheck}
					/>
					</label>
					<br />
				</div>
				<div className="form-group">
					<label htmlFor="english" className="font-weight-bold">
						English:
					<br />
					<input
						type="text"
						name="english"
						value={english}
						onChange={this.handleChange.bind(this)}
						className={englishCheck}
					/>
					</label>
					<br />
				</div>
				<div className="form-group">
					<label htmlFor="tamil" className="font-weight-bold">
						Tamil:
					<br />
					<input
						type="text"
						name="tamil"
						value={tamil}
						onChange={this.handleChange.bind(this)}
						className={tamilCheck}
					/>
					</label>
				<br />
				</div>
				<div className="form-group">
					<label htmlFor="maths" className="font-weight-bold">
						Maths:
					<br />
					<input
						type="text"
						name="maths"
						value={maths}
						onChange={this.handleChange.bind(this)}
						className={mathsCheck}
					/>
					</label>
					<br />
				</div>
				<div className="form-group">
					<label htmlFor="science" className="font-weight-bold">
						Science:
						<br />
					<input
						type="text"
						name="science"
						value={science}
						onChange={this.handleChange.bind(this)}
						className={scienceCheck}
					/>
					</label>
				<br />
				</div>
				<div className="form-group">
					<label htmlFor="social" className="font-weight-bold">
						Social:
				<br />
					<input
						type="text"
						name="social"
						value={social}
						onChange={this.handleChange.bind(this)}
						className={socialCheck}
					/>
					</label>
				<br />
				</div>
				<div className="form-group">
					<input type="file" className="form-control-file border" name="file" onChange={this.handleImage} />
				<br />
				</div>
				<div className="form-group">
  					<label htmlFor="male">
					  <input type="radio" name="gender" onChange={this.handleChange.bind(this)} checked={gender === 'male'} value="male" /> 
					  Male 
				   </label>
				   <br />
  					<label htmlFor="female">
					  <input type="radio" name="gender" onChange={this.handleChange.bind(this)} checked={gender === 'female'} value="female" />  
					  Female
				   </label>
					<br />
				</div>
				<div className="form-group">
					<label htmlFor="department" className="font-weight-bold">
						Department:
				<br />
					<select onChange={this.handleChange.bind(this)} name="section">
						<option selected={section === 'A'} value="A">A</option>
						<option selected={section === 'B'} value="B">B</option>
						<option selected={section === 'C'} value="C">C</option>
					</select>
					</label>
				</div>
				{button}
			</div>
		);
	}
}

const mapStatetoProps = (state) => ({
        post: state
    });
const mapDispatchtoProps = (dispatch) => ({
		inputChange: (name, value) => { dispatch({ type: 'INPUT_CHANGE', name, value }); },
		addData: (data, newData) => { dispatch({ type: 'ADD_DATA', data, newData }); },
		updateData: (data) => { dispatch({ type: 'UPDATE_DATA', data }); },
		errorclass: (name, data) => { dispatch({ type: 'ERROR', name, data }); },
		success: (data) => { dispatch({ type: 'SUCCESS', data }); },
		noerror: (data) => { dispatch({ type: 'NOERROR', data }); },
		redirect: (data) => { dispatch({ type: 'REDIRECT', data }); },
		redirectadd: (data) => { dispatch({ type: 'REDIRECT_ADD', data }); }
    });

export default connect(mapStatetoProps, mapDispatchtoProps)(Form);
