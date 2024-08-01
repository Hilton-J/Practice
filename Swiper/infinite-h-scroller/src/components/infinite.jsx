import './infinite.css'
import Animation from './hooks'

const infinite = () => {

    const scrollersRef = Animation();

    return (
        <div className='skills_container' ref={scrollersRef}>
            <h1>Infinite Scroll Animation</h1>
            <div className='scroller'>
                <ul className='tag-list scroller__inner'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>SSG</li>
                    <li>Webdev</li>
                    <li>animation</li>
                    <li>UI/UX</li>


                    {/* <li className='test'>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>SSG</li>
                    <li>Webdev</li>
                    <li>animation</li>
                    <li>UI/UX</li> */}


                </ul>
            </div>
        </div>
    )
}

export default infinite