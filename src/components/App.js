import React from 'react';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';

import store from '../reducers/store';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Header from './Header';
import PostList from './PostList';
import { getPosts } from '../assets/scripts/helpers';
import { setPosts } from '../reducers/posts/actions';
import ScrollTop from './ScrollTop';

class App extends React.Component {
	componentDidMount() {
		/**
		 * Load 10 post at first
		 */
		getPosts(10, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				store.dispatch(setPosts(data));
			}
		});
	}
	render() {
		return (
			<div className="app">
				<Header />
				<Toolbar id="back-to-top-anchor" />
				<PostList />
				<ScrollTop {...this.props}>
					<Fab color="secondary" size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</div>
		);
	}
}

export default App;
