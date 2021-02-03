import { SquareBulletSvg } from '../icons'
import { Tab, Tabs } from '../util/tab'
import { useScrollAnimation } from '../util/useScrollAnimation'
export const Education: React.FC = () => {
	//use animate hook
	useScrollAnimation('.education')
	return (
		<div className='education'>
			{/* <h2></h2> */}
			<Tabs>
				<Tab title='Education'>
					<p>2014-2018</p>
					<h3>BS Software Engineering from University of Gujrat </h3>
					<h3>Pakistan</h3>
				</Tab>
				<Tab title='Certificates'>
					<p>2018</p>
					<h3>Python Developer From Datacamp</h3>
				</Tab>
				<Tab title='Certificates'>
					<p>2017</p>
					<h3>Full Stack Developer From Udemy and Pluralsight</h3>
				</Tab>
			</Tabs>
		</div>
	)
}
