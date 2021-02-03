import { Logo } from '../icons/Logo'
export const Appbar: React.FC = () => {
	return (
		<nav className='appbar'>
			<a href='https://qasimhafeez.com'>
				<Logo isLoading={false} />
			</a>
			<a href='/Qasim Hafeez.pdf' rel='noopener noreferrer' target='_blank'>
				<h2>Resume</h2>
			</a>
		</nav>
	)
}
