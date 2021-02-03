interface LogoPropsI {
	isLoading: boolean
}

export const Logo: React.FC<LogoPropsI> = ({ isLoading }) => {
	return (
		<div className={isLoading ? 'center' : ''}>
			<div className={isLoading ? 'logo-wrapper' : 'logo-not-loading-wrapper'}>
				<svg
					width={!isLoading ? '77' : '105'}
					height={!isLoading ? '87' : '115'}
					className='logo-paths'
					viewBox='0 0 92 50'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M24.8594 15.4258C24.8594 18.082 24.4297 20.3932 23.5703 22.3594C22.7109 24.3125 21.5195 25.8815 19.9961 27.0664L24.7227 30.7773L20.9922 34.0781L14.9375 29.2148C14.2474 29.332 13.5312 29.3906 12.7891 29.3906C10.4323 29.3906 8.32943 28.8242 6.48047 27.6914C4.63151 26.5586 3.19922 24.944 2.18359 22.8477C1.16797 20.7383 0.653646 18.3164 0.640625 15.582V14.1758C0.640625 11.3763 1.14193 8.91536 2.14453 6.79297C3.16016 4.65755 4.58594 3.02344 6.42188 1.89062C8.27083 0.744792 10.3802 0.171875 12.75 0.171875C15.1198 0.171875 17.2227 0.744792 19.0586 1.89062C20.9076 3.02344 22.3333 4.65755 23.3359 6.79297C24.3516 8.91536 24.8594 11.3698 24.8594 14.1562V15.4258ZM18.9219 14.1367C18.9219 11.1549 18.388 8.88932 17.3203 7.33984C16.2526 5.79036 14.7292 5.01562 12.75 5.01562C10.7839 5.01562 9.26693 5.78385 8.19922 7.32031C7.13151 8.84375 6.59115 11.0833 6.57812 14.0391V15.4258C6.57812 18.3294 7.11198 20.582 8.17969 22.1836C9.2474 23.7852 10.7839 24.5859 12.7891 24.5859C14.7552 24.5859 16.2656 23.8177 17.3203 22.2812C18.375 20.7318 18.9089 18.4792 18.9219 15.5234V14.1367Z'
						fill='#5187D8'
					/>
					<path
						d='M52.3008 29H46.4414V16.8125H35.0156V29H29.1562V0.5625H35.0156V12.0859H46.4414V0.5625H52.3008V29Z'
						fill='#5187D8'
					/>
				</svg>
			</div>
		</div>
	)
}
