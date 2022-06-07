<template>
  <div class="home">
    
   <ClownCard
              v-for="(clown, idx) in clowns"
              :key="idx"
              :clown-id="clown.id"
              :clown-pseudo="clown.pseudo"
              :clown-actif="clown.actif"
              :clown-homme="clown.homme"
              :clown-musicien="clown.musicien"
              :clown-couleur="clown.couleur"
              @onClownSelected="handleClownSelectedModalA"
            />
  </div>
</template>


<script>
import ClownCard from '@/components/ClownCard.vue';
import axios from "axios";
const ALL_INTERVS_READ_API_URL = "http://localhost:8787/api/allInterv";
const ALL_CLOWNS_READ_API_URL = "http://localhost:8787/api/allClown";

export default {
  name: 'HomeView',
   data: () => ({
                clowns:[]
            }),
  components: {
  ClownCard
  },
    async created() {
    const intervdb = await axios.get(ALL_INTERVS_READ_API_URL);
    this.intervs = intervdb.data;
    console.log(this.intervs);

    const clownsdb = await axios.get(ALL_CLOWNS_READ_API_URL);
    this.clowns = clownsdb.data;
    console.log(this.clowns);
  },
}


// const bertille = clowns where 

</script>
