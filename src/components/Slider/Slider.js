import Article from '../Article/Article';
import './Slider.css';


function Slider() {
  return (
    <section className='slider'>
        <h2 className='sectionTitle'>Top ventas cerca de ti</h2>
        <div className='tarjetas'>
            <Article />
            <Article />
            <Article />
            <Article />   
        </div>
        
    </section>
  );
}

export default Slider;
