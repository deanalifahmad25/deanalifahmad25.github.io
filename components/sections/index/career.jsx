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
					subTitle="I am a Full-Stack Web Developer with many experience backgrounds and like to learn new things."
				/>
				<section className={career.area}>
					<div className={career.position}>
						<div className={career.positionContent}>
							<span class={career.positionHeader}>
								<h3>Full-Stack Developer (PT.Transindo Data Perkasa)</h3>
								<h4>Contract Full-time</h4>
								<h4>Dec 2023 - Present</h4>
								<h5>Bandung, West Java, Indonesia</h5>
							</span>
							<p>
							Currently, I work as a full-stack developer I am responsible for all software development. This is for the front end, APIs, and the back end. Each project had to be estimated and prioritized based on its workload and immediate impact on efficiency. 
							</p>
							<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.positionAlt}></div>
					</div>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Back-End Developer (BuildWith Angga)</h3>
								<h4>Contract Full-time</h4>
								<h4>Mar 2023 - Sept 2023 · 6 mos</h4>
								<h5>Bandung, West Java, Indonesia</h5>
							</span>
							<p>
							Collaborate with designers and developers at BuildWithAngga in developing online UI/UX design and software development learning platforms.
							</p>
							<Badges list={stack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Freelance UI/UX & Web Designer</h3>
									<h4>Jan 2023 - Mar 2023 · 2 mos</h4>
									<h5>Bandung, West Java, Indonesia</h5>
								</span>
								<p>
								I work with clients independently or in partnership with agencies or other companies to create websites and applications that meet their needs.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Website Optimizer - Web Designer (Schole Fitrah)</h3>
								<h4>Internship</h4>
								<h4>Aug 2022 - Dec 2022 · 6 mos</h4>
								<h5>Bandung, West Java, Indonesia</h5>
							</span>
							<p>
								I am responsible for optimizing the UI/UX and SEO of the company's website and supporting other Divisions by providing Website needs.
							</p>
							<Badges list={stack2} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'laravel', 		name: 'Laravel', 			type: 'devicon' },
	{ key: 'vuejs', 		name: 'Vue.JS', 			type: 'devicon' },
	{ key: 'angularjs', 	name: 'Angular.JS', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'postgresql', 	name: 'PostgresSQL', 		type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const stack	= [
	{ key: 'laravel', 		name: 'Laravel', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'bootstrap', 	name: 'Bootstrap', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'digitalocean', 	name: 'Digital Ocean', 		type: 'devicon' },
]

const stack2	= [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'Wordpress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'trello', 		name: 'Trello', 			type: 'devicon' },
]