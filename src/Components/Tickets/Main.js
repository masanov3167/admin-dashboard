import Header from '../Main/Header';
import TicketsHeroItem from './TicketsHeroItem';

import Tom from '../../Assets/Img/tom.png';
import Damon from '../../Assets/Img/damon.png';
import Downey from '../../Assets/Img/downey.png';
import Bale from '../../Assets/Img/bale.png';
import Cavil from '../../Assets/Img/covil.png';
import Evans from '../../Assets/Img/evas.png';
import Smith from '../../Assets/Img/smith.png';
import Rogers from '../../Assets/Img/rogers.png';

const Tickets = () => {
	return (
		<>
		   <main className='main'>
			<Header title='Tickets' />
			<div className='tickets'>
				<ol className='tickets__list'>
					<li>All tickets</li>

					<li>Sort <span>Filter</span></li>
				</ol>

				<div className='tickets__top'>
					<p>Ticket details</p>
					<p>Customer name</p>
					<p>Date</p>
					<p>Priority</p>
				</div>

				<ol className='tickets__hero'>
					<TicketsHeroItem
						image={Tom}
						ticket='Contact Email not Linked'
						update='Updated 1 day ago'
						userName='Tom Cruise'
						last='on 24.05.2019'
						lastDate='May 26, 2019'
						hour='6:30 PM'
						btnClass='btn btn__red'
						btnText='High'
					/>
					<TicketsHeroItem
						image={Damon}
						ticket='Adding Images to Featured Posts'
						update='Updated 1 day ago'
						userName='Matt Damon'
						last='on 24.05.2019'
						lastDate='May 26, 2019'
						hour='8:00 AM'
						btnClass='btn btn__low'
						btnText='Low'
					/>
					<TicketsHeroItem
						image={Downey}
						ticket='When will I be charged this month?'
						update='Updated 1 day ago'
						userName='Robert Downey'
						last='on 24.05.2019'
						lastDate='May 26, 2019'
						hour='7:30 PM'
						btnClass='btn btn__red'
						btnText='High'
					/>
					<TicketsHeroItem
						image={Bale}
						ticket='Payment not going through'
						update='Updated 2 day ago'
						userName='Tom Cruise'
						last='on 24.05.2019'
						lastDate='May 25, 2019'
						hour='5:00 PM'
						btnClass='btn btn__normal'
						btnText='Normal'
					/>
					<TicketsHeroItem
						image={Cavil}
						ticket='Unable to add replies'
						update='Updated 2 day ago'
						userName='Henry Cavil'
						last='on 24.05.2019'
						lastDate='May 25, 2019'
						hour='4:00 PM'
						btnClass='btn btn__red'
						btnText='High'
					/>
					<TicketsHeroItem
						image={Evans}
						ticket='Downtime since last week'
						update='Updated 3 day ago'
						userName='Chris Evans'
						last='on 23.05.2019'
						lastDate='May 25, 2019'
						hour='2:00 PM'
						btnClass='btn btn__normal'
						btnText='Normal'
					/>
					<TicketsHeroItem
						image={Smith}
						ticket='Referal Bonus'
						update='Updated 4 day ago'
						userName='Sam Smith'
						last='on 22.05.2019'
						lastDate='May 26, 2019'
						hour='11:30 AM'
						btnClass='btn btn__low'
						btnText='Low'
					/>
					<TicketsHeroItem
						image={Rogers}
						ticket='How do I change my password?'
						update='Updated 6 day ago'
						userName='Steve Rogers'
						last='on 21.05.2019'
						lastDate='May 24, 2019'
						hour='1:00 PM'
						btnClass='btn btn__normal'
						btnText='Normal'
					/>
				</ol>

                <ol className='pagination'>
                    <li>Rows per page: <time>8</time> </li>
                    <li><time>1-8 of 1240</time> <span></span> </li>
                </ol>
			</div>
		</main>
		</>
	);
};
export default Tickets;
