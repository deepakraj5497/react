import React from 'react';
import { connect } from 'react-redux';

class Pagination extends React.Component {
    componentDidMount() {
        this.duplicate();
        this.show();
    }

    componentDidUpdate(prevProps) {
        const {
             post: {
                 post, currentPage, pageSize
                } 
            } = this.props;
        if (post.length !== prevProps.post.post.length) {
            this.show(currentPage);
        } else if (pageSize !== prevProps.post.pageSize) {
            this.show(currentPage);
        }
    }

    duplicate = () => {
        const {
            post: {
                post
               }, duplicateItem 
           } = this.props;
        duplicateItem(post);
    }

    show = (j) => {
        let a;
        const {
            post: {
                post, duplicate, pageSize
               }, showItem 
           } = this.props;
        a = [...post].splice(0, pageSize);
        if (j) {
            const startIndex = parseInt(j, 10);
            a = [...duplicate].splice(startIndex, pageSize);
        }
        showItem(a);
    }

    current = (i, index) => {
        const {
                currentPage
           } = this.props;
        currentPage(parseInt(i, 10));
        this.show(i);
        this.active(index);
    }

    active(index) {
        const {
            activePage
           } = this.props;
        activePage(index);
    }

	render() {
		let pagecount = '';
        let activeclass;
        const {
            post: {
                duplicate, pageSize, active
               } 
           } = this.props;
        pagecount = Math.ceil(duplicate.length / pageSize);
		const number = [];
		let a = 0;
		for (let i = 0; i < pagecount; i += 1) {
            if (active === i) {
				activeclass = 'page-item active';
			} else if (active !== i) {
				activeclass = 'page-item';
			}
            number.push(<li className={activeclass} key={1 + i}>
                            <button type="button" id={a} onClick={(e) => (this.current(e.target.id, i))} className="page-link"> 
                                {1 + i}
                            </button>
                        </li>);
			a += pageSize;
		}
		return number;
	}
}

const mapStatetoProps = (state) => ({
        post: state
    });


const mapDispatchtoProps = (dispatch) => ({
        showItem: (data) => { dispatch({ type: 'SHOW_POST', data }); },
        duplicateItem: (data) => { dispatch({ type: 'DUPLICATE_POST', data }); },
        currentPage: (data) => { dispatch({ type: 'CURRENT_PAGE', data }); },
        activePage: (data) => { dispatch({ type: 'ACTIVE_PAGE', data }); }
    
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Pagination);
