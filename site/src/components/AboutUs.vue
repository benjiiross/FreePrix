<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->

  <footer class="text-white text-center text-lg-start bg-dark">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row mt-4">
        <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="link text-center text-uppercase mb-4">About company</h5>

          <p>
            Our name is Freeprix, we are a company that sell occasion and new
            clothing on the internet.
          </p>

          <p>
            We are a young company, created in 2022 and our goal is to make you
            happy !
          </p>

          <p>You can also check our social networks below :</p>

          <div class="mt-4 ml-0">
            <!-- Facebook -->
            <a
              href="#"
              type="button"
              class="btn btn-floating btn-light btn-lg bg-dark m-3"
            >
              <i
                class="bi bi-instagram"
                style="font-size: 2rem; color: #c13584"
              ></i
            ></a>
            <!-- Dribbble -->
            <a
              href="#"
              type="button"
              class="btn btn-floating btn-light btn-lg bg-dark m-3"
              ><i
                class="bi bi-twitter"
                style="font-size: 2rem; color: #1da1f2"
              ></i
            ></a>
            <!-- Twitter -->
            <a
              href="#"
              type="button"
              class="btn btn-floating btn-light btn-lg bg-dark m-3"
              ><i
                class="bi bi-snapchat"
                style="font-size: 2rem; color: #fffc00"
              ></i
            ></a>
            <!-- Google + -->
            <a
              href="#"
              type="button"
              class="btn btn-floating btn-light btn-lg bg-dark m-3"
              ><i
                class="bi bi-tiktok"
                style="font-size: 2rem; color: #ff0050"
              ></i
            ></a>
            <!-- Linkedin -->
          </div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="link text-uppercase mb-4 pb-1 text-center">Contact Us</h5>

          <img
            src="../assets/img/pinglogo.png"
            alt="Bootstrap"
            width="50"
            height="50"
            class="rounded mx-auto d-block"
          />
          <p class="mt-4 text-center">Stores in UE/UK/USA/CANADA</p>

          <ul class="fa-ul" style="margin-left: 1.65em">
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-home"></i></span
              ><span class="ms-2">Zoopal</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-envelope"></i></span
              ><span class="link ms-2">freeprixfr@gmail.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-phone"></i></span
              ><span class="ms-2">+ 33 91 91 91 91 91 </span>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="link text-uppercase pb-4 text-center">
            Stores Opening hours
          </h5>

          <table class="table text-center text-white">
            <tbody class="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8 AM - 8 PM</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8 AM - 10 PM</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9 AM - 8 PM</td>
              </tr>
            </tbody>
          </table>
          <img
            src="../assets/img/serpentlogo.png"
            alt="Bootstrap"
            width="70"
            height="70"
            class="rounded mx-auto d-block mt-5"
          />
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="link" href="https://mdbootstrap.com/">Freeprix.com</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style>
.link {
  color: white;
}

.link:hover {
  color: brown;
}

.btn:hover {
  border: 2px solid brown;
}
</style>
