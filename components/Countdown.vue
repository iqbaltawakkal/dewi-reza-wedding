<template>
  <div class="flex justify-between font-quicksand max-w-tiny mx-auto mt-10">
    <div class="flex flex-col items-center">
      <div class="text-4xl">{{ days }}</div>
      <div>DAYS</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-4xl">{{ hours }}</div>
      <div>HOURS</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-4xl">{{ minutes }}</div>
      <div>MINS</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-4xl">{{ seconds }}</div>
      <div class="px-1">SECS</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      endTime: Date.parse(new Date('August 22, 2020 03:00:00 UTC')) / 1000,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    }
  },
  mounted() {
    setInterval(() => {
      this.makeTimer()
    }, 1000)
  },
  methods: {
    makeTimer() {
      const now = Date.parse(new Date()) / 1000
      const timeLeft = this.endTime - now
      this.days = Math.floor(timeLeft / 86400)
      this.hours = Math.floor((timeLeft - this.days * 86400) / 3600)
      this.minutes = Math.floor(
        (timeLeft - this.days * 86400 - this.hours * 3600) / 60
      )
      this.seconds = Math.floor(
        timeLeft - this.days * 86400 - this.hours * 3600 - this.minutes * 60
      )

      if (this.hours < '10') {
        this.hours = '0' + this.hours
      }
      if (this.minutes < '10') {
        this.minutes = '0' + this.minutes
      }
      if (this.seconds < '10') {
        this.seconds = '0' + this.seconds
      }
    },
  },
}
</script>
