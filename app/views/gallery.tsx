import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function Gallery() {
    return(
        <div className="w-full flex flex-row justify-between mb-2 
        p-3 md:p-7">
            <div>
                <h3 className="text-2xl dark:text-white">Gallery</h3>
            </div>
            <div>
                <button type="button" className='w-fit p-2 rounded-2xl mx-2
                 bg-gray-200 text-black'>
                    <FontAwesomeIcon icon={faBook} className='text-black' /> Legal
                </button>
                <button type="button"  className='w-fit p-2 rounded-2xl mx-2
                 bg-gray-200 dark:text-black'>
                    <p><FontAwesomeIcon icon={faCreditCard} /> Pricing</p>
                </button>
            </div>
        </div>
    )
}