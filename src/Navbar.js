


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Walky Ideas</h1>
        <a href="/create" className="links"  style={{
            color: "white",
            backgroundColor: "orange",
            borderRadius: "8px",
        }}> Create +</a>
        <a href="/invite">Invite</a>
        <a href="/Board" >Board</a>
        <a href="/Welcome">Logout</a>  
      
    </nav>
    
  );
};

export default Navbar;
