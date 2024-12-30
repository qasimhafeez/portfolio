import { useScrollAnimation } from "../util/useScrollAnimation"

export const Aboutme: React.FC = () => {
	//use animate hook
	useScrollAnimation(".aboutme")

	return (
		<div className='container'>
			<section className='aboutme'>
				<h2>About Me</h2>
				<section className='aboutme-grid'>
					<section className='content'>
						<p>
							Tech geek having 7 years of experience in software
							development. I have a strong team lead skills and experience in
							building scalable web applications. I enjoy creating things that
							live on the internet, whether that be websites, applications, or
							anything in between. My goal is to always build products of high
							end quality. Shortly after graduating from{" "}
							<span>
								<a href='https://uog.edu.pk'>University of Gujrat</a>
							</span>{" "}
							in BS Software Engineering, Pakistan, I started to work as a
							freelance software engineer and built many web based projects.
						</p>
						<p>
							<span>
								<b>Currently</b>
							</span>{" "}
							I'm working as Senior Software Engineer at Emirated NBD a company based in Dubai,
							UAE.
						</p>
						<p>
							<span>
								<b>Technologies</b>
							</span>{" "}
							I have worked on:
						</p>
						<ul>
							<li>AI Integration</li>
							<li>Solidity</li>
							<li>EVM</li>
							<li>DAPP</li>
							<li>Hadoop</li>
							<li>HDFS</li>
							<li>MapReduce</li>
							<li>Cassandra</li>
							<li>HBase</li>
							<li>Kafka</li>
							<li>RabbitMQ</li>
							<li>Redis Streaming</li>
							<li>PostgreSQL</li>
							<li>MySQL</li>
							<li>MongoDB</li>
							<li>DynamoDB</li>
							<li>Node.js</li>
							<li>TypeScript</li>
							<li>Python</li>
							<li>Flask</li>
							<li>Django</li>
							<li>Golang</li>
							<li>Regression</li>
							<li>Clustering</li>
							<li>Classification</li>
							<li>Neural Networks</li>
						</ul>
						<p>These are the skills I have worked on and on weekends and in my free time, I am building some pet projects on Machine Learning and AI Automations</p>
					</section>
					<section className='image'>
						<img src='/qasim.jpg' alt='personal-pic' />
					</section>
				</section>
			</section>
		</div>
	)
}
