// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am current managing, designing, and developing consumer and digital product initiatives at Letsremotify"
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Letsremotify.</h3>
								<h4>Permanent Full-time</h4>
								<h4>Oct 2021 - Present · 2 years, 8 mos</h4>
								<h5>Lahore, Pakistan</h5>
							</span>
							<p>
							Letsremotify is a leading innovator in technology solutions, renowned for its cutting-edge software development, robust digital transformations, and a collaborative environment that fosters excellence and creativity.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
										<h3>Senior Software Engineer</h3>
										<h4>Oct 2021 - Present · 2 years, 8 mos</h4>
									</span>
								<p>
									I was brought on to help fill Associate Software Engineer role in one of the largest work environment in Pakistan. Working with the engineering team to develop quality front-end — designing and developing complete back-ends — and improving the users experience and application KPIs through design and merchandising optimizations.
								</p>
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Full functionality interactive payment module.
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 23.7%</span>
									</li>
									<li>Designed and implemented complex software architectures.
										<span className={career.subList}><span className={career.bullet}></span>Strong application foundation compliant with latest standards</span>
									</li>
									<li>
										Design and development of the project's portfolio website.
										<span className={career.subList}><span className={career.bullet}></span>11.1% overall conversion rate </span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>CCRIPT.</h3>
								<h4>Contract full-time</h4>
								<h4>Oct 2018 - Oct 2021 · 3 year</h4>
								<h5>Remote</h5>
							</span>
							<p>
							CCRIPT is a full stack agency that helps deliver exceptional digital experiences to small and medium businesses. Branding, Marketing, and Web/Software Development.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Mindstorm</h3>
								<h4>Summer Internship</h4>
								<h4>May 2018 - Aug 2018 · 3 mos</h4>
								<h5>Lahore, Pakistan</h5>
							</span>
							<p>I was the new game enthusiast in the team 🧙‍♂️</p>
							<p>Mindstorm is one of the biggest game studios in Pakistan</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'laravel', 	    name: 'Laravel', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'tailwindcss', 	name: 'Tailwind', 			type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const stack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]