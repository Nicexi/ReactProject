import React from 'react'

import {Route,IndexRoute} from 'react-router'

import MainComponent from '../components/main'

import HomeComponent from '../components/home/home'
import CarComponent from '../components/car/car'
import CategoryComponent from '../components/category/category'
import MyComponent from '../components/my/my'


let routes = (
		<Route path="/" component={MainComponent}>
			<IndexRoute component={HomeComponent}/>
			<route path="/home" component={HomeComponent}/>
			<route path="/car" component={CarComponent}/>
			<route path="/category" component={CategoryComponent}/>
			<route path="/my" component={MyComponent}/>
		</Route>
	)

export default routes;