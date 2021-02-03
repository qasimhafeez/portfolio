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
							building full stack web applications using react.js, redux on
							frontend and backend services using node.js, typescript, python
							and php.. I enjoy creating things that live on the internet,
							whether that be websites, applications, or anything in between. My
							goal is to always build products of high end quality. Shortly
							after graduating from{' '}
							<span>
								<a href='https://uog.edu.pk'>University of Gujrat</a>
							</span>{' '}
							, Pakistan, I started to work as a freelance software engineer and
							built many web based projects.
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
							<li>React Native</li>
							<li>Html (S)CSS</li>
							<li>Typescript</li>
							<li>React js</li>
							<li>Node js</li>
						</ul>
					</section>
					<section className='image'>
						<img src='/asim.jpg' alt='personal-pic' />
					</section>
				</section>
			</section>
		</div>
	)
}
