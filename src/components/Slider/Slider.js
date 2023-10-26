import Article from './Article';
import './Slider.css';

function Slider() {
  return (
    <section className='slider'>
        <h2 className='sectionTitle'>Top ventas cerca de ti</h2>
        <div className='tarjetas'>
            <Article 
              price="20€" 
              title="KALENJI" 
              imgArticles="https://contents.mediadecathlon.com/p1975311/k$33d2d8a1d90630ff128023783122a820/sq/pantalon-running-transpirable-mujer-dry-negro.jpg?f=3000x3000" 
              description="Pantalón jogger fitness recto algodón Mujer Domyos negro" 
              num="3" 
            />
            <Article price="20€"/>
            <Article price="20€"/>
            <Article price="20€"/>   
        </div>
        
    </section>
  );
}

export default Slider;
