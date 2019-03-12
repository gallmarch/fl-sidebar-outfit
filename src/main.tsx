import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import listenForAuthChanges from './listeners/listenForAuthChanges';
import listenForSidebarChange from './listeners/listenForSidebarChange';
import onSidebarChange from './onSidebarChange';
import './main.scss';
import reducer from './reducer';

// Create our store
const store = applyMiddleware(reduxThunk)(createStore)(reducer);

listenForAuthChanges();
listenForSidebarChange(store)(onSidebarChange);
