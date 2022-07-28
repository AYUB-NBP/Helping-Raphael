import { Input, Menu, Image, Icon, Container } from 'semantic-ui-react';
import HorizontalScroll from 'react-scroll-horizontal';
import '../styles/search.scss';

// The top value controls carousel position:May require changing is '.image-custom' height is modified in search.scss
const HorizontalScrollHeight = { height: '125px', top: '0px' };
const ElementWidth = { width: '200px', maxWidth: 'none' }

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
              <p style={{fontSize:'78%'}}>Le DJ star des nuits New Yorkaises débarque à Paris <br></br> pour une soirée de dingue...</p></div>
          </div>

        </Container>
        <Container style={{margin:'0'}}>
          <h2 style={{ color: 'white' }}>Catégories &gt;</h2>
          <br></br>
        </Container>
        <HorizontalScroll style={HorizontalScrollHeight}>
          <Image
            className='scroll-elements'
            style={ElementWidth}
            src='https://picsum.photos/1080/1920?random=2'
          />
          <Image
            className='scroll-elements'
            style={ElementWidth}
            src='https://picsum.photos/1080/1920?random=3'
          />
          <Image
            className='scroll-elements'
            style={ElementWidth}
            src='https://picsum.photos/1080/1920?random=4'
          />
          <Image
            className='scroll-elements'
            style={ElementWidth}
            src='https://picsum.photos/1080/1920?random=5'
          />
          <Image
            className='scroll-elements'
            style={ElementWidth}
            src='https://picsum.photos/1080/1920?random=6'
          />
        </HorizontalScroll>
      </Container>
    </div >
  );
}

export default SearchBar;