<template>
  <div
    :class="{
      'opacity-0': !isModalActive,
      'pointer-events-none': !isModalActive,
    }"
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-30"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      @click="setModal(false)"
    ></div>

    <div
      class="modal-container font-quicksand bg-primary text-type w-11/12 h-full max-h-65 md:max-h-1/2 max-w-md md:max-w-1/3 mx-auto shadow-lg z-50 overflow-y-auto"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 flex flex-col text-left px-6 min-h-full">
        <!--Title-->
        <div class="flex flex-grow-0 justify-center pb-3">
          <p class="text-5xl text-center font-jaime tracking-wider">
            You're Invited
          </p>
        </div>
        <hr class="border-secondary" />

        <!--Body-->
        <div class="flex flex-col flex-1 text-center">
          <div class="flex-1 py-10">
            <p>
              {{ note }}
            </p>
          </div>
          <div class="flex-grow-0 mb-10">
            <p>- Dewi &amp; Reza-</p>
          </div>
        </div>

        <!--Footer-->
        <div class="flex flex-grow-0 justify-center pt-2">
          <button
            class="modal-close px-4 bg-type p-3 -lg text-white w-full"
            @click="setModal(false)"
          >
            Tap here to see more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faunadb from 'faunadb'
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnADyAW6fWACBnNNBOSFhbRMTtvS7ixFDZrPz62K',
})

export default {
  data() {
    return {
      note: '',
      guest: '',
    }
  },
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.body.className = 'overflow-hidden'
    })
  },
  created() {
    if (this.$route.query.id) {
      this.setModal(true)
      client
        .query(q.Get(q.Ref(q.Collection('invitation'), this.$route.query.id)))
        .then((res) => {
          this.note = res.data.note
          this.guest = res.data.guest
        })
    }
  },
  methods: {
    setModal(value) {
      this.$store.commit('setIsModalActive', value)
      if (!value) {
        document.body.className = ''
      }
    },
  },
}
</script>
