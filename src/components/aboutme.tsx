import { useScrollAnimation } from '../util/useScrollAnimation'

export const Aboutme: React.FC = () => {
	//use animate hook
	useScrollAnimation('.aboutme')

	return (
		<div className='container'>
			<section className='aboutme'>
				<h2>About Me</h2>
				<section className='aboutme-grid'>
					<section className='content'>
						<p>
							Tech geek having more than 2+ years of experience in software
							development. I have a strong team lead skills and experience in
							building full stack web applications. I enjoy creating things that
							live on the internet, whether that be websites, applications, or
							anything in between. My goal is to always build products of high
							end quality. Shortly after graduating from{' '}
							<span>
								<a href='https://uog.edu.pk'>University of Gujrat</a>
							</span>{' '}
							in BS Software Engineering, Pakistan, I started to work as a
							freelance software engineer and built many web based projects.
						</p>
						<p>
							<span>
								<b>Currently</b>
							</span>{' '}
							I'm working as Full Stack Developer in a company based in Dubai,
							UAE.
						</p>
						<p>
							<span>
								<b>Technologies</b>
							</span>{' '}
							I'm working on,
						</p>
						<ul>
							<li>Javascript (ES6+)</li>
							<li>Html/CSS</li>
							<li>Typescript</li>
							<li>React js</li>
							<li>Node js</li>
							<li>Docker</li>
							<li>Kubernetes</li>
							<li>Python</li>
						</ul>
					</section>
					<section className='image'>
						<img src='/qasim.jpeg' alt='personal-pic' />
					</section>
				</section>
			</section>
		</div>
	)
}
