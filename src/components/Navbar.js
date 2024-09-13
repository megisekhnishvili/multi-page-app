import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> | 
      <NavLink to="/create-post">Create Post</NavLink>
    </nav>
  );
};

export default Navbar;
