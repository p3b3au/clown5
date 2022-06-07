<template>
  
    <div
      class="cartouche"
      :style="{ backgroundColor: clownCouleur }"
      @click="selectClown"
      style="cursor: pointer"
    >
      <div>
        <img
          class="img"
          :src="require(`@/assets/static/img/${clownPseudo}.jpg`)"
        />
      </div>
      <div class="cartouche-name">
        {{ clownPseudo }}
      </div>
      <div class="cartouche-logos">{{ isMan(clownHomme) }}</div>
      <div class="cartouche-logos">{{ isMusician(clownMusicien) }}</div>
    </div>
  
</template>

<script>
export default {
  name: "ClownCard",
  props: {
    clownId: { type: Number, },
    clownPseudo: { type: String },
    clownActif: { type: Boolean },
    clownHomme: { type: Boolean },
    clownMusicien: { type: Boolean },
    clownCouleur: { type: String, default: "#2A265F" },
  },
  data: () => ({}),
  methods: {
    selectClown() {
      console.log("ça click depuis ClownCard ", this.clownId);
      // on déclenche un événément custom
      // son nom est arbitraire et ne correspond pas aux évt Js classiques
      this.$emit("onClownSelected", this.clownId );
      
      
    },
    isMan(homme) {
      let sex = "";
      if (homme == true) {
        sex = "🧔";
      } else {
        sex = "👩‍🦰";
      }
      return sex;
    },

    isMusician(musicien) {
      let music = "";
      if (musicien == true) {
        music = "🎵";
      } else {
        music = "";
      }
      return music;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartouche {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 200px;
  height: 30px;
 
}

.cartouche-name {
   padding: 7px;
  font-size: 14px;
  text-align: center;
  align-content: center;
}

.cartouche-logos {
  padding: 5px;
  position: relative;
  width: 30%;
  font-size: 15px;
}

.img {
  height: 30px;
  border-radius: 50px;
}
</style>
