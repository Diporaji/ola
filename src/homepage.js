import image from './rea.jpg';
import mali from './rell.jpg';
import bobu from './rewel.jpg';
import Greetings from "./1stcomponebt"
import Greater from "./Nano"
function Ola(){
    const productDetails = [
        {
          name: 'jeans',
          image: image,
          description: 'This is a Good jean',
          price: 25000,
        },
        {
          name: 'Trouser',
          image: mali,
          description: 'Buy correct jeans',
          price: 1000,
        },
        {
          name: 'Bag',
          image: bobu,
          description: 'Buy Good shoes',
          price: 13000,
        }
      ]
    return (
        <> 
        <Greetings/>
    
          <div className='row m-auto'>
    
            {
              productDetails.map((product, index) => {
                return <Greater key={index} {...product} />
              })
            }
          </div>
        </>
      )
}


export default Ola