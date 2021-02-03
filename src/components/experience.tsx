import { SquareBulletSvg } from '../icons'
import { Tab, Tabs } from '../util/tab'
import { useScrollAnimation } from '../util/useScrollAnimation'
export const Experience: React.FC = () => {
	//use animate hook
	useScrollAnimation('.experience')
	return (
		<div className='experience'>
			<h2>Experience</h2>
			<Tabs>
				<Tab title='UAE'>
					<h3>FULL STACK DEVELOPER</h3>
					<p>
						Feb 2020 - Present
						<span>
							<h4>@Zain Telecom, Dubai, UAE</h4>
						</span>
					</p>

					<section className='content-learned-items'>
						<ul>
							<li>
								<SquareBulletSvg />
								Developing recharged based application portal by using major
								distributer APIs.
							</li>
							<li>
								<SquareBulletSvg />
								Working on Local and International recharge suppliers and
								creating RESTFUL APIs and micro-services.
							</li>
							<li>
								<SquareBulletSvg />
								Built a payment gateway for sending recharge from card to
								different users
							</li>
							<li>
								<SquareBulletSvg />
								Developed and maintained their existing portal and added
								different features to it and made it 30% faster and efficient
							</li>
							<li>
								<SquareBulletSvg />
								Develop web apps using CI/CD tools like: GitHub, docker and
								kubernetes
							</li>
							<li>
								<SquareBulletSvg />
								Code optimization and load balancing using docker, kubernetes,
								NGINX
							</li>
							<li>
								<SquareBulletSvg />
								Contribute to robust and scalable software architecture
							</li>
							<li>
								<SquareBulletSvg />
								Document all related work per company’s methodology
							</li>
						</ul>
					</section>
				</Tab>
				<Tab title='Pakistan'>
					<h3>Software Engineer</h3>
					<p>May 2018 - Oct 2019</p>
					<section className='content-learned-items'>
						<ul>
							<li>
								<SquareBulletSvg />
								Built a complete e-commerce store b2b including all the major
								features like: product recommendation, payment gateways,
								products, orders and delivery modules.
							</li>
							<li>
								<SquareBulletSvg />
								Build restful APIs for garage management system. I worked as a
								backend engineer there and built modules like: garage booking,
								invoices and generate reports module.
							</li>
							<li>
								<SquareBulletSvg />
								Build few projects in web scrapping, data analytics (using
								numpy, pandas and matplotlib), custom plugin and theme
								development for wordpress and custom dynamic web applications
								living on the internet.
							</li>
						</ul>
					</section>
				</Tab>
			</Tabs>
		</div>
	)
}
