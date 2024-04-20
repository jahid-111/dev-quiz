


 
import Cover from '../components/Cover';
import Catagory from '../components/Catagory';
import { useLoaderData } from 'react-router-dom';
 

const Main = () => {
    
    const thumnails = useLoaderData();
    // console.log(thumnails.data)
    return (
        <>
            <Cover></Cover>
            
            <div className='  my-6 grid grid-cols-2 sm:grid-cols-4 justify-evenl items-center gap-2'>
                {
                    thumnails.data.map( thumnail => <Catagory
                        key={thumnail.id}
                        thumnail={thumnail}
                    ></Catagory>)
                }
            </div>
        </>
    );
};

export default Main;