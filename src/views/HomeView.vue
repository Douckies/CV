<template>
  <v-main class="main_home_view">
    <div v-if="isActive" @click="isActive = false">
      <DisplayPicture :picture="profilPicture" :description="description " />
    </div>
    <div v-else class="presentation_organizer">
      <div class="presentation_text">
        <span @mouseover="kenobiActivated = true" @mouseleave="kenobiActivated = false">Hello there !</span>
        <p>My name is Mathieu Laloy, welcome to my online Currticulum Vitae, where you
          should be able to learn anything
          you
          need to know about me !</p>

        <p>This small website is only to give you an idea of what I can actually do with a bit of
          front-end, and share some informations about me. Check up top for my github repositories link to
          find some better projects of mine.</p>

        <p>This is only a first version which I intend to make better, as for next steps integrate it into a docker and
          make it responsive. Will see later for next steps !</p>
      </div>
      <div class="presentation_image">
        <img v-if="kenobiActivated" src="@/assets/grivious.jpg" />
        <img v-else :src="require('@/assets/' + profilPicture + '.jpg')" @click="isActive = true" />
      </div>
    </div>

  </v-main>
</template>

<script>
import DisplayPicture from '@/components/displayPicture.vue';

export default {
  name: 'App',

  components: {
    DisplayPicture
  },

  data() {
    return {
      kenobiActivated: false,
      isActive: false,
      profilPicture: "profil",
      description: "Kiruna, Laponia - Sweden - A pretty cold place during winter."
    }
  },
}
</script>

<style>
.main_home_view {
  height: 100%;
}

.presentation_organizer {
  width: 80%;
  height: 90%;
  margin: 0 auto;
  margin-top: 5%;
}

.presentation_text {
  display: block;
  float: left;
  width: 60%;
}

.presentation_image {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 40%;
  height: 80%;
}

.presentation_organizer span {
  font-size: 50px;
  font-weight: bolder;
  color: #707070;
  margin-bottom: 2%;
}
</style>
