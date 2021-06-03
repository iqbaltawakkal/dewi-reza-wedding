<template>
  <section id="banner" class="max-h-screen h-screen">
    <div class="flex justify-center items-center banner h-full">
      <div class="text-primary z-10">
        <span class="text-7xl font-jaime">Save The Date</span>
        <span class="text-base text-center block font-quicksand -mt-8"
          >22/08/2020
        </span>
        <Countdown />
      </div>
    </div>
    <div class="img-overlay absolute inset-0"></div>
  </section>
</template>

<style scoped>
.img-overlay {
  background: rgba(0, 0, 0, 0.45);
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdHRlcm4gIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJOZXdfUGF0dGVybl80IiB2aWV3Qm94PSIwIC0yIDIgMiIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ij4NCgk8Zz4NCgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6bm9uZTsiIHBvaW50cz0iMCwtMiAyLC0yIDIsMCAwLDAgCQkiLz4NCgkJDQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAuNSIgeTE9Ii0xNjM2MSIgeDI9IjEuNSIgeTI9Ii0xNjM2MSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIC0xNjM2MikiPg0KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MCIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cG9seWdvbiBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIHBvaW50cz0iMS41LC0wLjUgMC41LC0wLjUgMC41LC0xLjUgMS41LC0xLjUgCQkiLz4NCgk8L2c+DQo8L3BhdHRlcm4+DQo8cmVjdCBzdHlsZT0ib3BhY2l0eTowLjY7ZmlsbDp1cmwoI05ld19QYXR0ZXJuXzQpOyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+DQo8L3N2Zz4=);
}
.banner {
  background: url('~assets/img/banner.JPG') no-repeat center center / cover
    rgba(0, 0, 0, 0);
}
</style>
