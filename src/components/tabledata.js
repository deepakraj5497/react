import React from 'react';
import { connect } from 'react-redux';

class Tabledata extends React.Component {
	componentDidMount() {
		this.totalRank(); 
	}

	getdata(index) {
		const { 
			post: { post, currentPage }, getItem, redirect
			} = this.props;
		redirect(true);
		console.log(post);
		let page = (currentPage - 1) * 5;
		const { 
			name, english, tamil, maths, science, social, id, gender, section 
		} = post[index + page];
		console.log(index);
		const i = currentPage + index;
		console.log({ name }); 
		const data = { 
			name, english, tamil, maths, science, social, id, i, gender, section 
		};
		getItem(data);
	}

	totalRank =() => {
		let rankIndex;		
		let rankArr = '';
		let unorder;
		let total;
		let ordered;
		const { 
			post: { 
				post 
				}, totalrank 
			} = this.props;
		post.forEach((n) => {
			const {
				english, tamil, maths, science, social 
			} = n;
			total = english + tamil + maths + science + social;
			rankArr = `${rankArr}${total},`;
			unorder = rankArr.split(',').map(Number);
			unorder.pop();
			ordered = unorder.slice().sort((a, b) => (
				b - a
			));
		});
		let p;
		rankIndex = '';
		let rank = '';
		let rankAll;
		for (p = 0; p < ordered.length; p += 1) {
			const data = unorder[p];
			for (let i = 0; i < ordered.length; i += 1) {
				if (ordered[i] === data) {
					rankIndex = ordered.indexOf(data) + 1;
				}
			}
			rank = `${rank + rankIndex},`;
			rankAll = rank.split(',').map(Number);
			rankAll.pop();
		}
		totalrank(unorder, rankAll);
	}

	delete(key) {
		const conform = window.confirm('are you sure you want to delete this item');
		console.log(conform);
		if (conform === true) {
			const { deleteItem, post: { post, currentPage } } = this.props;
			console.log(key);
			const { id } = post[currentPage + key];
			console.log(id);
			deleteItem(key);
		} 
	}

	render() {
		const { post: { post, pageSize, currentPage } } = this.props;
		const lastIndex = currentPage * pageSize;
		const firstIndex = lastIndex - pageSize;
		const currentItem = post.slice(firstIndex, lastIndex);
		return currentItem.map((n, i) => {
		const {
 			name, english, tamil, maths, science, social, img, gender, section, id
			} = n;
		const total = english + tamil + maths + science + social;
		return (

			<tr key={id} className="allRows">
           		<td>{name}</td>
          		<td>{english}</td>
           		<td>{tamil}</td>
           		<td>{maths}</td>
				<td>{science}</td>
				<td>{social}</td>
				<td className="total">{total}</td>
				<Rank total={total} post={post} />
				<td><img src={img} alt="students img" width="75px" height="50px" /></td>
				<td>{gender}</td>
				<td>{section}</td>
				<td>
					<button type="button" className="btn btn-info mr-3 py-0" onClick={this.getdata.bind(this, i)}>edit</button>
					<button type="button" className="btn btn-danger py-0" onClick={this.delete.bind(this, id)}>del</button>
				</td>
   </tr>
			);			
		});
	}
}

class Rank extends React.PureComponent {
	render() {
    	let rankIndex;		
		let rankArr = ''; let unorder; let tot; let ordered;
		const { post, total } = this.props;
    	post.forEach((n) => {
        	const {
 				english, tamil, maths, science, social 
				} = n;
        	tot = english + tamil + maths + science + social;
        	rankArr = `${rankArr + tot},`;
        	unorder = rankArr.split(',').map(Number);
        	unorder.pop();
        	ordered = unorder.slice().sort((a, b) => b - a);
    	});
    	let p;
    	rankIndex = '';
    	for (p = 0; p < ordered.length; p += 1) {
        	const data = unorder[p];
        	if (total === data) {
            	rankIndex = ordered.indexOf(data) + 1;
        	}
   		 }
	return <td>{rankIndex}</td>;	
	}	
}

const mapStatetoProps = (state) => ({
        post: state
    });

const mapDispatchtoProps = (dispatch) => ({
		deleteItem: (id) => { dispatch({ type: 'DELETE_POST', id }); },
		getItem: (data) => { dispatch({ type: 'UPDATE_POST', data }); },
		totalrank: (total, rank) => { dispatch({ type: 'TOTAL_RANK', total, rank }); },
		redirect: (data) => { dispatch({ type: 'REDIRECT', data }); }
    });

export default connect(mapStatetoProps, mapDispatchtoProps)(Tabledata);
