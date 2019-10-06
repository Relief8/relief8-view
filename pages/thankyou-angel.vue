<template>
  <div class="container">
    <div class="HandHolding?">
      <img src="~assets/4-people-holdng-hands.png" alt="People hodling hands" />
    </div>
    <div class="Midsec">
      <h1 class="title">Thank You</h1>
      <h2 class="subtitle">For your application</h2>
      <h3 class="comment">We will be verifying your identity and let you know once you are approved.</h3>
      <div class="option angel-option">
        <img src="~assets/high-five.svg" alt="I want to be a angel icon" />
      </div>
    </div>
    <div class="footer">
      <nuxt-link to="/map">
        <h4>-> </h4>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: "Raleway SemiBold";
  src: url("~static/fonts/raleway-font/Raleway-SemiBold.ttf");
}

.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto;
}

.title {
  display: block;
  font-family: "Raleway SemiBold";
  font-size: 49px;
  color: #ec2024;
  text-align: center;
}

.subtitle {
  display: block;
  font-family: "Helvetica";
  font-size: 17px;
  color: #232a5e;
  text-align: center;
}

.comment {
  display: block;
  font-family: "Helvetica";
  font-size: 16px;
  color: #989898;
  text-align: center;
}

.footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  color: #989898;
}

.btn {
  font-size: 20px;
  text-decoration: none;
  color: white;
  background-color: var(--red);
}

.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.option .btn {
  padding: 20px;
  border-radius: 40px;
  margin-top: 10px;
  min-width: 281px;
  text-align: center;
}

.footer img {
  margin-bottom: -5px;
}

.footer p {
  position: absolute;
  margin: 50px;
}

.need-help {
  align-self: end;
  margin-bottom: 10px;
}

.container {
  align-self: flex-end;
}

h2 {
  height: 50px;
}

h3 {
  height: 70px;
}
</style>
