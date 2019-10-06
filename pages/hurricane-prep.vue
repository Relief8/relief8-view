<template>
  <div class="container">
    <div class="appbar"></div>

    <h1 class="title">Hurricane Preparation Checklist</h1>

    <div class="checklist">
      <span class="checklistTitle">What should I do?</span>

      <hr />

      <div class="checklistItem">
        <input type="radio" disabled />
        Listen to your local Weather Radio for critical information from the National Weather Service
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Check your disaster supplies and replace or restock as needed.
      </div>
      <div class="checklistItem">
        <input type="radio" disabled />
        Bring in anything that can be picked up by the wind (bicycles, lawn furniture).
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Close windows, doors and hurricane shutters. If you do not have hurricane shutters, close and board up all windows and doors with plywood.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Turn the refrigerator and freezer to the coldest setting and keep them closed as much as possible so that food will last longer if the power goes out.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Turn off propane tanks and unplug small appliances.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Fill your car’s gas tank.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Talk with members of your household and create an evacuation plan. Planning and practicing your evacuation plan minimizes confusion and fear during the event.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Learn about your community’s hurricane response plan. Plan routes to local shelters, register family members with special medical needs as required and make plans for your pets to be cared for.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Evacuate if advised by authorities. Be careful to avoid flooded roads and washed out bridges.
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Because standard homeowners insurance doesn’t cover flooding, it’s important to have protection from the floods associated with hurricanes, tropical storms, heavy rains and other conditions that impact the U.S.
      </div>
    </div>

    <div class="checklist">
      <span class="checklistTitle">What supplies do I need?</span>

      <hr />

      <div class="checklistItem">
        <input type="radio" disabled />
        Water—at least a 3-day supply; one gallon per person per day
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Food—at least a 3-day supply of non-perishable, easy-to-prepare food
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Flashlight
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Battery-powered or hand-crank radio
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Extra batteries
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        First aid kit
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Medications (7-day supply) and medical items (hearing aids with extra batteries, glasses, contact lenses, syringes, cane)
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Multi-purpose tool
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Sanitation and personal hygiene items
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Copies of personal documents (medication list and pertinent medical information, proof of address, deed/lease to home, passports, birth certificates, insurance policies)
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Cell phone with chargers
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Family and emergency contact information
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Extra cash
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Emergency blanket
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Map(s) of the area
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Baby supplies (bottles, formula, baby food, diapers)
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Pet supplies (collar, leash, ID, food, carrier, bowl)
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Tools/supplies for securing your home
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Extra set of car keys and house keys
      </div>

      <div class="checklistItem">
        <input type="radio" disabled />
        Extra clothing, hat and sturdy shoes
      </div>
    </div>

    <div class="btn-container">
      <a target="_blank" href="https://www.redcross.org/content/dam/redcross/atg/PDF_s/Preparedness___Disaster_Recovery/Disaster_Preparedness/Hurricane/Hurricane.pdf" class="btn">Hurricane Safety Checklist</a>
      <div class="link-info">American Red Cross</div>
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

.checklistTitle {
  color: #b1b1b1;
  font-size: 16px;
  margin: 0 0 15px;
  display: inline-block;
}

.btn-container {
  text-align: center;
  width: 100%;
}

.link-info {
    margin: 10px;
    color: #232A5E;
}

.btn {
  font-size: 20px;
  text-decoration: none;
  color: white;
  background-color: var(--red);

  padding: 20px;
  border-radius: 40px;
  min-width: 281px;
  text-align: center;
  display: inline-block;
}

.checklistItem {
  color: #232a5e;
  font-size: 14px;
  font-weight: 500;
  margin: 20px 10px;
  clear: both;
}

.checklistItem input {
  float: left;
  height: 20px;
  vertical-align: top;
  margin-right: 15px;
}

.appbar {
  background: #ec2024;
  height: 53px;
}

.checklist {
  max-width: 500px;
  margin: 0 auto 50px;
  background: #fff;
  padding: 20px;
  border-radius: 27px;
}

.title {
  color: #232a5e;
  font-size: 27px;
  padding: 40px;
  font-family: Raleway SemiBold;
  text-align: center;
}

.container {
  min-height: 100vh;
  background: #f0f0f0;
  padding-bottom: 10px;
  grid-template-rows: 1fr 1fr auto;
}

.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer img {
  margin-bottom: -5px;
}

.footer p {
  position: absolute;
  margin: 50px;
}
</style>
