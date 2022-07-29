import { Input, Menu, Image, Icon, Container } from 'semantic-ui-react';
import HorizontalScroll from 'react-scroll-horizontal';
import '../styles/search.scss';

// The top value controls carousel position:May require changing is '.image-custom' height is modified in search.scss
const ElementWidth = { width: '36vw',height:'100%', maxWidth: 'none' } //carousel images size
const whiteColor = { color: "white" } //For Catégories >
const horiScrollWidthHeight = { width: 'calc(100% - 2em', height: '22vw', top: '0px', borderRadius:'15px' }// Carousel Width Correction

function SearchBar() {
  return (
    <div className='search-container'>

      <Container>

        <Menu inverted>
          <Menu.Item>
            <Icon name='search' />
            <Input
              className='input-custom'
              icon='sliders horizontal inverted'
              placeholder='Rechercher'
              size='large'
            />
          </Menu.Item>
        </Menu>

        <Container className='image-container'>
          <Image
            className='image-custom'
            src='https://picsum.photos/1080/1920?random=1'
          />
          <div className='image-content'>
            <div className='wrapper'><div className='date'>
              <div id='cap'>28</div>
              <div id='noCap'>JUN</div>
            </div>
              <h1>Michael Korsten</h1>
              <p style={{ fontSize: '78%' }}>Le DJ star des nuits New Yorkaises débarque à Paris <br></br> pour une soirée de dingue...</p></div>
          </div>
          <Icon name='heart outline' size='big' />
        </Container>

        <Container className='heading' >
          <h2 style={whiteColor}>Catégories &gt;</h2>
        </Container>

        <HorizontalScroll style={horiScrollWidthHeight}>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=2'
            />
            <div className="labelName">Concert</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=3'
            />
            <div className="labelName">Festival</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=4'
            />
            <div className="labelName">Cocktail Party</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=5'
            />
            <div className="labelName">Fashion Show</div>
          </div>
        </HorizontalScroll>

        <Container className='heading' >
          <h2 style={whiteColor}>Top 30 en favoris &gt;</h2>
        </Container>

        <HorizontalScroll style={horiScrollWidthHeight}>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=10'
            />
            <div className="labelName">Concert</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=11'
            />
            <div className="labelName">Festival</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=12'
            />
            <div className="labelName">Cocktail Party</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=13'
            />
            <div className="labelName">Fashion Show</div>
          </div>
        </HorizontalScroll>

        <Container className='heading' >
          <h2 style={whiteColor}>Chef ... J'ai grave la dalle !</h2>
        </Container>

        <HorizontalScroll style={horiScrollWidthHeight}>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=6'
            />
            <div className="labelName">Concert</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=7'
            />
            <div className="labelName">Festival</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=8'
            />
            <div className="labelName">Cocktail Party</div>
          </div>
          <div className='cards'>
            <Image 
              className='scroll-images'
              style={ElementWidth}
              src='https://picsum.photos/1080/1920?random=9'
            />
            <div className="labelName">Fashion Show</div>
          </div>
        </HorizontalScroll>

        
      </Container>
    </div >
  );
}

export default SearchBar;