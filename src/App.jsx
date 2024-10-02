import { useState } from 'react'
import './App.css'
import navStyle from './css/nav.module.css'
import aboutStyle from './css/about.module.css'
import styles from './css/footer.module.css';

function App() {

  return (
    <>

      <div style={{ backgroundColor: '#f9edd5', height: '95vh' }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className={navStyle.logo} src='./image/Frame-removebg-preview.png' alt="Bootstrap" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bolder ${navStyle.linkColor}">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Category</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <form className="d-flex" role="search">
                  <input className="form-control me-2 rounded" type="search" placeholder="Search" aria-label="Search" />
                  <button id={navStyle.HomeButton} className="btn" type="submit">Search</button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
        <div className={navStyle.Home} >
          <h1 className={navStyle.mainhead}>One More Friend</h1>
          <h1 className={navStyle.mainhead}>Thousands More Fun!!</h1>
          <p className={navStyle.phome}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Beatae ipsa odio tempore non. Consequuntur, maiores, ipsa</p>
          <a id={navStyle.HomeButton} href="">View Intro</a>
          <a id={navStyle.HomeButton} href="">Explore Now</a>
          <div className={navStyle.bgBanner}>
            <img className='img-fluid rounded' src="./image/Person-bg.jpg" alt="hai" />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='text-center mt-5'>
          <p>What's New?</p>
          <h3>Take a Look At Some of Our Pets</h3>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: '392px' }}>
                <img src="./image/dog1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">M0231-Pomeranian White</h5>
                  <p className="card-text text-center">Gene: Male  Age: 02 Months</p>
                  <h5 className="text-center text-danger">$6900.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: '395px' }}>
                <img src="./image/dog2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">MO502-Poodle Tiny Yellow</h5>
                  <p className="card-text text-center">Gene: Female  Age: 02 Months</p>
                  <h5 className="text-center text-danger">$3900.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: '395px' }}>
                <img src="./image/dog3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">MO102-Poodle Tiny Sepia</h5>
                  <p className="card-text text-center">Gene: Male  Age: 02 Months</p>
                  <h5 className="text-center text-danger">$4900.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: '410px' }}>
                <img src="./image/dog4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">M0512-Alaskan Malamute Grey</h5>
                  <p className="card-text text-center">Gene: Male  Age: 02 Months</p>
                  <h5 className="text-center text-danger">$8900.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: '425px' }}>
                <img src="./image/dog5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">MO502-PemBroke Cargi Tricolor</h5>
                  <p className="card-text text-center">Gene: Female  Age: 02 Months</p>
                  <h5 className="text-center text-danger">$9900.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: '425px' }}>
                <img src="./image/dog8.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">MO502-Poodle Tiny Dairy cow</h5>
                  <p className="card-text text-center">Gene: Male  Age: 02 Months</p>
                  <h5 className="text-center text-danger">$5900.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div style={{ backgroundColor: '#f9edd5', height: '60vh' }} className='container d-flex align-items-center'>
        <div className={aboutStyle.bgAboutBanner}>
          <img className='img-fluid rounded' src="./image/person-bg2.png" alt="hai" />
        </div>
        <div className={aboutStyle.about}>
          <h1 className={aboutStyle.aboutHead}>One More Friend</h1>
          <h1 className={aboutStyle.aboutHead}>Thousands More Fun!!</h1>
          <p className={aboutStyle.pAbout}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Beatae ipsa odio tempore non. Consequuntur, maiores, ipsa</p>
          <div className={aboutStyle.buttonGroup}>
            <a id={aboutStyle.aboutButton} href="">View Intro</a>
            <a id={aboutStyle.aboutButton} href="">Explore Now</a>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='text-center mt-5'>
          <p>hard to choose right products for your pets?</p>
          <h3>Our Products</h3>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: 'auto' }}>
                <img src="./image/food1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">Reflex Plus Adult Cat Food</h5>
                  <p className="card-text text-center">Product: Dog Food  Size: 388gm</p>
                  <h5 className="text-center text-danger">$6900.00</h5>
                  <a id={aboutStyle.petButton} className='btn' href="">Free pet Food & Toy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: 'auto' }}>
                <img src="./image/food2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">Reflex Plus Adult Dog Food</h5>
                  <p className="card-text text-center">Product: Cat Food  Size: 1.5kg</p>
                  <h5 className="text-center text-danger">$6900.00</h5>
                  <a id={aboutStyle.petButton} className='btn' href="">Free pet Food & Toy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: 'auto' }}>
                <img src="./image/food3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">NaturVet Dog Food</h5>
                  <p className="card-text text-center">Product: Dog Food  Size: 385gm</p>
                  <h5 className="text-center text-danger">$6900.00</h5>
                  <a id={aboutStyle.petButton} className='btn' href="">Free pet Food & Toy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: 'auto' }}>
                <img src="./image/toy1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">Cat Ball Toy</h5>
                  <p className="card-text text-center">Product: Toy</p>
                  <h5 className="text-center text-danger">$6900.00</h5>
                  <a id={aboutStyle.petButton} className='btn' href="">Free pet Food & Toy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: 'auto' }}>
                <img src="./image/toy2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">Cat Warm Nest</h5>
                  <p className="card-text text-center">Product: Toy</p>
                  <h5 className="text-center text-danger">$4900.00</h5>
                  <a id={aboutStyle.petButton} className='btn' href="">Free pet Food & Toy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '274px', height: 'auto' }}>
                <img src="./image/toy4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">Cat Costumes</h5>
                  <p className="card-text text-center">Product: Toy</p>
                  <h5 className="text-center text-danger">$5900.00</h5>
                  <a id={aboutStyle.petButton} className='btn' href="">Free pet Food & Toy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='text-center mt-5'>
          <p>Proud to be part of </p>
          <h3>Pet Sellers</h3>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-around">
          <div style={{width:'148px',height:'109px'}} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src="./image/Ad1.png" alt=""/>
          </div>
          <div style={{width:'148px',height:'109px'}} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src="./image/Ad2.png" alt=""/>
          </div>
          <div style={{width:'148px',height:'109px'}} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src="./image/Ad3.png" alt=""/>
          </div>
          <div style={{width:'148px',height:'109px'}} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src="./image/Ad4.png" alt=""/>
          </div>
          <div style={{width:'148px',height:'109px'}} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src="./image/Ad5.png" alt=""/>
          </div>
          <div style={{width:'148px',height:'109px'}} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src="./image/Ad6.png" alt=""/>
          </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='text-center mt-5'>
          <p>You Already know? </p>
          <h3>Useful Pet Knowledge</h3>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-around">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: 'auto' }}>
                <img src="./image/Know1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="text-center fw-bolder">What is Pomeranian?How to identify Pomeranian Dogs</p>
                  <p className="card-text text-center">The Pomeranian is a small, fluffy dog breed known for its vibrant personality and thick double coat. It can be identified by its fox-like face, pointed ears.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: 'auto' }}>
                <img src="./image/know2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="text-center fw-bolder">Dog Diet You Need to Know</p>
                  <p className="card-text text-center">A dog's diet should consist of high-quality protein, healthy fats, and essential vitamins, often found in commercial dog food or balanced homemade meals.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div id={navStyle.cards} className="card shadow" style={{ width: '284px', height: 'auto' }}>
                <img src="./image/know3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="text-center fw-bolder">Why Dogs Bite and Destroy Furniture and How to Prevent it Effectively</p>
                  <p className="card-text text-center">Dogs may bite and destroy furniture due to boredom, anxiety, or teething. To prevent this behavior.</p>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div id={styles.footerContainer} className='mt-5 w-100' style={{ backgroundColor: '#f9edd5', padding: '20px 0' }}>
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <div id={styles.intro} className='intro'>
      <h5><i className='fa-solid fa-paw me-2'></i> About Our Pets</h5>
      <p>Providing love and care for pets with the best food and toys available.</p>
      <p>Find everything you need to keep your pet happy and healthy!</p>
      <p>Join our community of pet lovers.</p>
    </div>
    
    <div id={styles.links} className=' d-flex flex-column mt-3 mt-md-0'>
      <h5>Links</h5>
      <a href="/food" style={{ textDecoration: 'none', color: 'black' }}>Pet Food</a>
      <a href="/toys" style={{ textDecoration: 'none', color: 'black' }}>Pet Toys</a>
      <a href="/adoption" style={{ textDecoration: 'none', color: 'black' }}>Pet Adoption</a>
    </div>
    
    <div id={styles.guides} className='d-flex flex-column mt-3 mt-md-0'>
      <h5>Guides</h5>
      <a href="https://pets.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer">Pet Care Guide</a>
      <a href="https://petfood.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer">Choosing Pet Food</a>
      <a href="https://pettoys.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer">Best Pet Toys</a>
    </div>
    
    <div id={styles.contact} className='mt-3 mt-md-0'>
      <h5>Contact Us</h5>
      <div className='d-flex mt-2'>
        <input placeholder='Enter Your Email Here...' type='text' className='form-control' />
        <button className='btn' style={{ backgroundColor: '#002A48', color: 'white', marginLeft: '10px' }}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
      <div id={styles.icons} className='d-flex justify-content-between mt-3'>
        <a href="https://twitter.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-twitter'></i></a>
        <a href="https://instagram.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-instagram'></i></a>
        <a href="https://facebook.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-facebook'></i></a>
        <a href="https://linkedin.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-linkedin'></i></a>
        <a href="https://github.com" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-github'></i></a>
        <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel="noopener noreferrer"><i className='fa-solid fa-phone'></i></a>
      </div>
    </div>
  </div>
  <p className='text-center mt-3'>CopyRight &copy; 2024 Pet Lovers. Built with Love</p>
</div>


    </>
  )
}

export default App
