<template>
  <div>
    <nav class="top-0 left-0 right-0 flex justify-center bg-primary p-6 z-10">
      <div class="container flex items-center justify-center">
        <div class="flex items-center text-type">
          <span class="font-jaime text-4xl tracking-widest"
            >Private Invitation</span
          >
        </div>
      </div>
    </nav>
    <div class="w-full container">
      <form
        class="bg-white px-8 pt-6 pb-8 mb-4 text-type"
        @submit.prevent="submitData(password)"
      >
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="name">
            Guest Name
          </label>
          <input
            id="name"
            v-model="guest"
            class="border-type appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your guest name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="note">
            Note
          </label>
          <textarea
            id="note"
            v-model="note"
            class="border-type appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            cols="50"
            placeholder="Private note for guest"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="template">
            Note Template
          </label>
          <select
            id="template"
            v-model="template"
            class="border-type appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="pick a template"
          >
            <option disabled value="" selected>pick a template</option>
            <template v-for="(item, index) in templateOptions">
              <option :key="index" :value="item">{{ item }}</option>
            </template>
          </select>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            class="border-type appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="***********"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-type hover:bg-secondary md:w-auto w-full text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <hr class="border-type mx-8 mb-10" />
    <p class="text-center text-4xl text-type font-quicksand">
      Guest List
    </p>
    <div class="container p-8 overflow-x-auto font-quicksand">
      <table class="table-auto w-full border text-type">
        <thead>
          <tr>
            <th class="border px-4 py-2">No.</th>
            <th class="border px-4 py-2">Guest</th>
            <th class="border px-4 py-2">Note</th>
            <th class="border px-4 py-2">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataTable" :key="index">
            <td data-header="No." class="border px-4 py-2 text-center">
              {{ index + 1 }}
            </td>
            <td data-header="Guest" class="border px-4 py-2 text-left">
              {{ item.data.guest }}
            </td>
            <td data-header="Note" class="border px-4 py-2 text-left">
              {{ item.data.note }}
            </td>
            <td data-header="URL" class="border px-4 py-2 text-center">
              <button
                class="bg-type hover:bg-secondary text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                @click="copyToClipboard(item)"
              >
                Copy URL
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <section class="pt-10 pb-10 md:pb-20 bg-type">
      <span class="block text-primary md:text-md text-sm text-center">
        &#169; 2020 Iqbal Tawakkal, All Right Reserved
      </span>
    </section>
  </div>
</template>

<script>
import md5 from 'md5'
import faunadb from 'faunadb'
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnADyAW6fWACBnNNBOSFhbRMTtvS7ixFDZrPz62K',
})

export default {
  data() {
    return {
      dataTable: [],
      guest: '',
      note: '',
      template: '',
      password: '',
    }
  },
  computed: {
    templateOptions() {
      return [
        `hello ${this.guest}, jangan lupa datang ya ke nikahan kita <3`,
        `hi ${this.guest} ! ditunggu kehadiranya ke nikahan kita.`,
        `${this.guest} !!! kamu diundang ke nikahan kami, datang ya! `,
      ]
    },
  },
  watch: {
    template(value) {
      this.note = value
    },
  },
  mounted() {
    this.populateData()
  },
  methods: {
    populateData() {
      client
        .query(
          q.Map(
            q.Paginate(q.Match(q.Index('inv'))),
            q.Lambda('X', q.Get(q.Var('X')))
          )
        )
        .then((res) => {
          this.dataTable = res.data
        })
    },
    submitData(password) {
      if (md5(password) === '4d09f273e3f11071cf0e06d6dcfd244b') {
        client
          .query(
            q.Create(q.Collection('invitation'), {
              data: { guest: this.guest, note: this.note },
            })
          )
          .then((res) => {
            this.populateData()
            this.clearForm()
          })
      } else {
        alert('Password Salah')
      }
    },
    clearForm() {
      this.guest = ''
      this.note = ''
    },
    async copyToClipboard(item) {
      try {
        const toCopy = `https://dewirezawedding.com/invitation?id=${
          item.ref.id
        }&guest=${item.data.guest.trim().replace(/\s/g, '-')}`
        await navigator.clipboard.writeText(toCopy)
        alert('Text copied successfully')
      } catch (err) {
        alert('Failed to copy: ', err)
      }
    },
  },
}
</script>
