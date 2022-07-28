import { Input, Menu, Image, Icon, Container } from 'semantic-ui-react';
import HorizontalScroll from 'react-scroll-horizontal';
import '../styles/search.scss';
const child = {width:'200px',height:'200px'}
function SearchBar() {
  return (
    <div className='search-container'>
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
      <Container className='results'>
        <div className='container-custom'>
          <Container className='image-container'>
            <Image
              className='image-custom'
              src='https://picsum.photos/1080/1920?random=1'
            />
            <div className='image-content'>
            </div>
          </Container>
        </div>
        <HorizontalScroll style={{height:'200px'}}>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
          <div className="test" style={child}></div>
        </HorizontalScroll>
      </Container>
    </div >
  );
}

export default SearchBar;