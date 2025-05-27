import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
      <h2>FashionShop</h2>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/products" style={{ color: 'white', marginRight: '1rem' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white' }}>Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
