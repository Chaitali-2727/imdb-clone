function Banner() {
  return (
      <div
        className="w-full h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg")`,
        }}
      >
        <div  style={{color: 'white',fontSize: '1.5rem',marginBottom: '2px',textAlign: 'center', width:'100%', background:'gray 900/60'}}>Avengers Endgame</div>

      </div>
  );
}

export default Banner;
