import { GithubSvg, Instagram, KaggleSvg, Linkedin, Twitter } from '../icons'
import { useScrollAnimation } from '../util/useScrollAnimation'

export const Findme: React.FC = () => {
	//use animation hook
	useScrollAnimation('.findme')
	return (
		<div className='container'>
			<div className='findme'>
				<h2>Reach Out</h2>
				<section className='contactme'>
					<p>
						My inbox is always open. Whether you have a question or just want to
						say hi, I'll try my best to get back to you!
					</p>
					<a href='mailto:m.qasimhafeez@outlook.com'>
						<button>Drop a Note</button>
					</a>
				</section>
				<section className='socials'>
					<a href='https://twitter.com/qasimh_' target='blank'>
						<Twitter />
					</a>
					<a href='https://www.kaggle.com/qasimh' target='blank'>
						<KaggleSvg />
					</a>
					<a href='https://github.com/qasimhafeez' target='blank'>
						<GithubSvg />
					</a>
					<a href='https://www.instagram.com/qasimh_/' target='blank'>
						<Instagram />
					</a>
					<a href='https://www.linkedin.com/in/qasimh/' target='blank'>
						<Linkedin />
					</a>
				</section>
			</div>
		</div>
	)
}
