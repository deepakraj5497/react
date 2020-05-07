import React from 'react';
import { connect } from 'react-redux';

class Tablehead extends React.Component {
    sortBynum(k) {
		const {
            post: {
                key
               }, keyItem, directionValue, allclass, icon
           } = this.props;
        keyItem(key);
        if (k !== key) {
			directionValue('asc');
			allclass();
		}
        switch (k) {
			case 'name':
				icon('nameClass', true);
				break;
			case 'english':
				icon('englishClass', true);
				break;
			case 'tamil':
				icon('tamClass', true);
				break;
			case 'maths':
				icon('mathClass', true);
				break;
			case 'science':
				icon('sciClass', true);
				break;
			case 'social':
				icon('socClass', true);
				break;
			case 'total':
				icon('totalClass', true);
				break;
			case 'rank':
				icon('rankClass', true);
				break;	
			default: break;
		}
		this.sorting(k);
    }

    sorting(key) {
		const {
            post: {
                duplicate, direction, duplicate2
               }, sort, directionValue, sortOn
           } = this.props;
		const newArray = [...duplicate];
		if (direction === 'asc') {
			if (key === 'name') {
				newArray.sort((a, b) => a.name.localeCompare(b.name));
			} else {
				newArray.sort((a, b) => a[key] - b[key]);
            }
            sort(newArray, true, false);
            directionValue('dsc');
            sortOn(true);
		} else if (direction === 'dsc') {
			if (key === 'name') {
				newArray.sort((a, b) => b.name.localeCompare(a.name));
			} else {
				newArray.sort((a, b) => b[key] - a[key]);
            }
            sort(newArray, false, true);
            directionValue('');
		} else {
            sort(duplicate2, false, false);
            directionValue('asc');
            sortOn(true);
		}	
	}

    render() {
		let nameCls; let engCls; let tamCls; 
		let mathCls; let sciCls; let socCls; let totalCls; let rankCls;
		const {
            post: {
				className1, className2, nameClass, englishClass, 
				tamClass, mathClass, sciClass, socClass, totalClass, rankClass
               } 
		   } = this.props;
		let icon;
        if (className1 === true) {
			icon = 'fa fa-caret-down';
		 } else if (className2 === true) {
			 icon = 'fa fa-caret-up';
		  } else {
			icon = '';
		  }
        if (nameClass === true) {
            nameCls = icon; 
		} else if (englishClass === true) {
			engCls = icon;
		} else if (tamClass === true) {
			tamCls = icon;
		} else if (mathClass === true) {
			mathCls = icon;
		} else if (sciClass === true) {
			sciCls = icon;
		} else if (socClass === true) {
			socCls = icon;
		} else if (totalClass === true) {
			totalCls = icon;
		} else if (rankClass === true) {
			rankCls = icon;
		} 
        return (
        <thead style={{ textAlign: 'center' }}>
			<tr style={{ backgroundColor: 'black', color: 'white' }}>
                <th style={{ width: '120px', padding: '12px 0px' }}>
					<button 
						type="button"
						onClick={this.sortBynum.bind(this, 'name')}
						style={{ padding: '12px 30px' }} 
                    	className="w-100 text-decoration-none text-white"
					>
						Name
						<i className={nameCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '80px', padding: '12px 0px' }}>
					<button
						type="button"
						onClick={this.sortBynum.bind(this, 'english')}
						style={{ padding: '12px 10x' }}
                    	className="w-100 text-decoration-none text-white"
					>
						English
						<i className={engCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '76px', padding: '12px 0px' }}>
					<button 
						type="button"
						onClick={this.sortBynum.bind(this, 'tamil')}
						style={{ padding: '12px 10px' }} 
                    	className="w-100 text-decoration-none text-white"
					>
						Tamil
						<i className={tamCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '83px', padding: '12px 0px' }}>
					<button 
						type="button"
						onClick={this.sortBynum.bind(this, 'maths')}
						style={{ padding: '12px 10px' }}
                    	className="w-100 text-decoration-none text-white"
					>
						Maths
						<i className={mathCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '92px', padding: '12px 0px' }}>
					<button 
						type="button"
						onClick={this.sortBynum.bind(this, 'science')}
						style={{ padding: '12px 10px' }}
                    	className="w-100 text-decoration-none text-white"
					>
						Science
						<i className={sciCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '80px', padding: '12px 0px' }}>
					<button
						type="button"
						onClick={this.sortBynum.bind(this, 'social')}
						style={{ padding: '12px 10px' }}
                    	className="w-100 text-decoration-none text-white"
					>
						Social
						<i className={socCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '76px', padding: '12px 0px' }}>
					<button 
						type="button"
						onClick={this.sortBynum.bind(this, 'total')}
						style={{ padding: '12px 10px' }}
                    	className="w-100 text-decoration-none text-white"
					>
						Total
						<i className={totalCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
                <th style={{ width: '73px', padding: '12px 0px' }}>
					<button 
						type="button"
						onClick={this.sortBynum.bind(this, 'rank')}
						style={{ padding: '12px 10px' }}
                    	className="w-100 text-decoration-none text-white"
					>
						Rank
						<i className={rankCls} style={{ marginLeft: '5px' }} />
					</button>
                </th>
				<th>Photo</th>
				<th>Gender</th>
				<th>Section</th>
				<th>Action</th>
			</tr>
        </thead>
        );
    }    
}

const mapStatetoProps = (state) => ({
        post: state
 });

const mapDispatchtoProps = (dispatch) => ({
        directionValue: (data) => { dispatch({ type: 'SORT_DIRECTION', data }); },
        sort: (data, class1, class2) => {
			dispatch({
 				type: 'SORTING', data, className1: class1, className2: class2 
					}); 
			},
        icon: (data) => { dispatch({ type: 'ICON', data }); },
        allclass: () => { dispatch({ type: 'ALL_CLASS' }); },
        keyItem: (data) => { dispatch({ type: 'KEY', data }); },
        sortOn: (data) => { dispatch({ type: 'SORT_ON', data }); }
    });

export default connect(mapStatetoProps, mapDispatchtoProps)(Tablehead);
