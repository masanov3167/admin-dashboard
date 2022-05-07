import React from 'react';
import Sitebar from './Components/Sitebar/Sitebar';
import Main from './Components/Main/Main';
import './main.css';
import Tickets from './Components/Tickets/Main';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import IdeasItem from './Components/IdeasItem';
import ContactsItem from './Components/ContactsItem';
import AgentsItem from './Components/AgentsItem';
import ArticlesItem from './Components/ArticlesItem';
import SettinsItem from './Components/SettingItem';
import SubscriptionItem from './Components/Subscription';

function App() {
	return (
	
			<div className='App'>

			<Sitebar />
	  <Routes >

		  <Route path='/' element={<Main/>}/>
		  <Route path='/tickets' element={<Tickets/>}/>
		  <Route path='/ideas' element={<IdeasItem />} />
		  <Route path='/contacts' element={<ContactsItem />} />
		  <Route path='/agents' element={<AgentsItem />} />
		  <Route path='/articles' element={<ArticlesItem />} />
		  <Route path='/settings' element={<SettinsItem />} />
		  <Route path='/subscription' element={<SubscriptionItem />} />
		  </Routes>
		</div>
	);
}

export default App;
