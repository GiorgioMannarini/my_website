<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="Hi and welcome to my website! I am Giorgio, and I am a full stack developer based in Lausanne, Switzerland.">
   
  <title>Giorgio Mannarini</title>

  <link rel="icon" 
      type="image/jpg" 
      href="./bg/present-photo.jpg">
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lato:ital@0;1&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
  <link rel="stylesheet" href="style.css" />
  
</head>

<body>
  <!-- NAVBAR -->
  <nav class="navbar dark-blue-color fixed-top navbar-expand-lg navbar-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link text-white navbar-font smoothScroll" href="#about-me">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white navbar-font smoothScroll" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white navbar-font smoothScroll" href="#contacts">Message me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <div class="pages page-1">
    <div class="d-flex w-100 h-50 align-items-center">
      <div class="w-100 text-white text-center">
        <h1 class="presentation-title">
          Hi, I'm Giorgio
        </h1>
        <h4 class="presentation-subtitle">
          a full-stack developer.
        </h4>
      </div>
    </div>
    <div class="row h-50">
      <div class="col-lg-6 presentation-image"></div>
    </div>
  </div>

  <div class="w-100 pt-5 mt-5 position-relative cont">
    <div class="row w-100 pages page-2 justify-content-center align-items-center">
      <div class="col-md-6 mx-5 text-center justify-content-center">
        <div class="present-photo-container" id="about-me"></div>
        <hr />
        <h2 class="paragraph-title lato-font">Hi!</h2>
        <p class="p-3 lato-font">
          My name is Giorgio. I am a full stack developer based in Lausanne,
          Switzerland. My passions are to develop beautiful websites and
          mobile applications. I have a Bachelor in Computer Science and I'm
          also about to take a Master's Degree.
        </p>
        <div class="pt-5 text-center" id="projects">
          <h2 class="paragraph-title lato-font pb-3">
            Some projects and fun stuff
          </h2>
          <!-- CARDS -->
          <ul class="cards pt-5 pb-5 mb-5">
            <li class="cardp card-1">
              <a href="https://www.youtube.com/watch?v=p1TH_w6aYow" class="card-link">
              <div class="h-100 card">
                <img class="card-img-top" src="./bg/card-1.jpg" alt="Card image cap" />
                <div class="h-100 card-body d-flex align-items-center">
                  <div class="w-100 card-body-content">
                    <h5 class="card-title lato-font">My Tedx Talk (IT)</h5>
                    <h6 class="card-subtitle mb-2 text-muted lato-font">
                      An eco-sustainable home automation prototype
                    </h6>
                    <p class="card-text lato-font">
                      A domotic hub consisting of a Raspberry PY and some
                      recycling components.
                    </p>
                  </div>
                </div>
              </div>
            </a>
              
            </li>
            <li class="cardp card-2">
              <a href="#" class="card-link">
              <div class="h-100 card">
                <img class="card-img-top" src="./bg/card-2.jpg" alt="Card image cap" />
                <div class="h-100 card-body d-flex align-items-center">
                  <div class="w-100 card-body-content">
                    <h5 class="card-title lato-font">Stùdiolo</h5>
                    <h6 class="card-subtitle mb-2 text-muted lato-font">
                      A mobile app and a small device to monitor University
                      study rooms
                    </h6>
                    <p class="card-text lato-font">
                      It makes possible for University students to monitor the
                      crowding of the study rooms and to reserve a desk
                    </p>
                  </div>
                </div>
              </div>
            </a>
             
            </li>
            <li class="cardp card-3">
              <a href="https://github.com/GiorgioMannarini/ListaDebiti" class="card-link">
              <div class="h-100 card">
                <img class="card-img-top" src="./bg/card-3.png" alt="Card image cap" />
                <div class="h-100 card-body d-flex align-items-center">
                  <div class="w-100 card-body-content">
                    <h5 class="card-title lato-font">Lista debiti</h5>
                    <h6 class="card-subtitle mb-2 text-muted lato-font">
                      A fun mobile app to keep track of small debts in a group
                      of friends
                    </h6>
                    <p class="card-text lato-font">
                      Developed for my group of friends, still in beta. Cross
                      platform (Flutter & Django Frameworks)
                    </p>
                  </div>
                </div>
              </div>
            </a>
              
            </li>
          </ul>
          <!-- END CARDS -->
        </div>
        <!-- CONTACT FORM -->

        <div class="pt-5 mb-5 pb-5 lato-font" id="contacts">
          <hr />
          <h2 class="paragraph-title pt-5">
            Want to tell me something?
          </h2>
          <?php
          if (isset($_GET['error'])) {
          ?>
            <div class="alert alert-danger" role="alert">
              <?= $_GET['error'] ?>
            </div>
          <?php
          } else if (isset($_GET['confirm'])) {
          ?>
            <div class="alert alert-success" role="alert">
              Thank you for texting me, I'll reply as soon as possible!
            </div>
          <?php
          }

          $email_error = isset($_GET['email_error']);
          $message_error = isset($_GET['message_error']);
          ?>
          <form class="pt-5 text-left" action="./form.php" method="post">
            <div class="form-group">
              <label for="emailadd">Email address</label>
              <input type="email" class="form-control <?= $email_error ? 'is-invalid' : '' ?>" id="emailadd" name="email_address" aria-describedby="emailHelp" placeholder="Enter email" />
              <?php
              if ($email_error) {
              ?>
                <small class="text-danger">
                  <?= $_GET['email_error']; ?>
                </small>
              <?php
              }
              ?>
              <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>

            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control  <?= $message_error ? 'is-invalid' : '' ?>" id="message" name="message" rows="5"></textarea>
              <?php
              if ($message_error) {
              ?>
                <small class="text-danger">
                  <?= $_GET['message_error']; ?>
                </small>
              <?php
              }
              ?>
            </div>
            <button type="submit" class="btn dark-blue-color text-white">Submit</button>
          </form>
        </div>
        <!-- END FORM -->
      </div>
    </div>
  </div>
  <!-- SOCIAL SIDEBAR -->
  <div class="icon-bar">
    <a href="https://www.linkedin.com/in/giorgio-mannarini-aa04a778" class="linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/GiorgioMannarini" class="github" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://www.facebook.com/giorgio.mannarini" class="facebook" target="_blank"><i class="fab fa-facebook"></i></a>
    <!-- UPDATE WITH YOUR DOMAIN MAIL -->
    <a href="mailto:giorgio.mannarini@epfl.ch" class="google" target="_blank"><i class="fa fa-envelope"></i></a>
  </div>

  <!-- TODO: PHP FOR THE ELEMENTS -->
  <footer class="icon-bar-mobile">
    <a href="https://www.linkedin.com/in/giorgio-mannarini-aa04a778" class="linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/GiorgioMannarini" class="github" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://www.facebook.com/giorgio.mannarini" class="facebook" target="_blank"><i class="fab fa-facebook"></i></a>
    <!-- UPDATE WITH YOUR DOMAIN MAIL -->
    <a href="mailto:giorgio.mannarini@epfl.ch" class="google" target="_blank"><i class="fa fa-envelope"></i></a>
    
  </footer>





  <!-- INCLUDED SCRIPTS -->
  <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <!-- MY SCRIPTS -->
  <script type="text/javascript" src="./script.js">
  </script>
</body>

</html>