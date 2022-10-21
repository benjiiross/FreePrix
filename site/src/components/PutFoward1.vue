<template>
  <div
    id="test"
    class="p-5 border border-primary position-relative border-2"
    style="
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
      margin: 4rem;
    "
  >
    <div class="text-center justify-content-center">
      <h1>THE FAMOUS<span class="text-primary"> JORDAN 1</span></h1>
      <h2 class="text-primary">OBSIDIAN UNC</h2>
      <div class="text-center p-2" style="color: grey; font-weight: bold">
        <h5>Put a foot in the future of sneakers</h5>
      </div>
      <div class="d-flex flex-row justify-content-center p-2">
        <button type="button" class="btn btn-secondary rounded-5 m-1 shadow-lg">
          Order now
          <i class="bi bi-cart rounded-5 p-1" style="color: white"></i>
        </button>

        <button type="button" class="btn btn-primary rounded-5 m-1 shadow-lg">
          More
        </button>
      </div>
    </div>
    <div class="ph d-flex flex-row mt-5" style="width: 500px; height: 500px">
      <img
        class="photo img-thumbnail d-flex flex-row shadow-lg"
        src="https://i.pinimg.com/originals/0d/89/96/0d8996b7f836bb8fc4fd6e0b936cc9d2.jpg"
        alt="jordan"
      />
      <img
        class="photo img-thumbnail d-flex flex-row shadow-lg"
        src="https://i.pinimg.com/originals/bb/6e/5d/bb6e5dddf0643d6962d631e17dd3c0fb.jpg"
        alt="jordan"
      />
    </div>
  </div>
</template>

<style scoped>
.photo {
  justify-content: center;
  margin-right: 4cm;
}

.ph {
  margin-left: 2cm;
  margin-right: 0;
}
</style>
