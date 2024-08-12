// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I&apos;m excited about the opportunity to contribute my skills and passion as a member of a dynamic development team.</h4>
				<h2 className={looking.json}>Full-Stack : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Front End Engineer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Back End Engineer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>User Experience Designer</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>I&apos;m eager to take on product-facing roles where I can leverage my skills to make an impactful outcome across the team.</h4>
				{/* <h2>Senior <span className={looking.highlight}>User Experience</span> Designer</h2> */}
				{/* <p className="subtitle">with a focus on Product Design.</p> */}
			</Container>
		</Section>
	)
}