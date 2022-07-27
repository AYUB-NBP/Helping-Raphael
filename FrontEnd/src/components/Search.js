import { Input, Menu, Container, Image } from 'semantic-ui-react';
import '../styles/search.scss';

function SearchBar() {
  return (
    <div className='search-container'>
      <Menu 
        inverted
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderRadius: '0',
        }}
      >
      <Menu.Item
        style={{
          width: '700px',
          height: '50px',
        }}
      >
          <Input
            icon= 'sliders horizontal'
            placeholder=' 🔍 Rechercher'
            size='large'
          />
          
        </Menu.Item>
      </Menu>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '20px',
          width: '700px',
          height: '400px',
          marginTop: '10px',
        }}
      >
        <Image
          src='https://picsum.photos/1080/1920' 
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
          }}
        />
      </Container>
    </div>
  );
}

export default SearchBar;