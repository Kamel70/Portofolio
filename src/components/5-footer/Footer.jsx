import './footer.css'

export default function Footer(){
    return(
        <footer className='flex'>
            <ul className='flex left-side'>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Speaking</a></li>
                <li><a href="#">Uses</a></li>
            </ul>
            <p className='right-side'>&copy; Spencer Sharp.All rights reserved.</p>
        </footer>
    )
}