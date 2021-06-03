<template>
  <section id="venue" class="bg-type">
    <div class="info">
      <h1 class="font-cali text-primary text-3xl md:text-5xl text-center">
        Venue
      </h1>
      <span class="text-primary block text-center font-quicksand">
        Gedung Pusdiklat Al-Muhajirien, Jln. Cut Mutia No.17, Bekasi
      </span>
      <span class="text-primary block text-center font-quicksand mb-5 md:mb-10">
        <svg
          id="Capa_1"
          class="fill-current text-primary w-4 inline-block mb-1 mr-1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392
			c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188
			h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z"
              />
            </g>
          </g>
          <g>
            <g>
              <rect x="76" y="230" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="156" y="230" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="236" y="230" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="316" y="230" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="396" y="230" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="76" y="310" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="156" y="310" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="236" y="310" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="316" y="310" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="76" y="390" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="156" y="390" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="236" y="390" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="316" y="390" width="40" height="40" />
            </g>
          </g>
          <g>
            <g>
              <rect x="396" y="310" width="40" height="40" />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        22 Agustus 2020
        <svg
          id="Capa_1"
          class="fill-current text-primary w-4 inline-block ml-1 mb-1 mr-1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 477.867 477.867"
          style="enable-background: new 0 0 477.867 477.867;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
			C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8
			s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M238.933,85.333c-9.426,0-17.067,7.641-17.067,17.067v119.467H102.4c-9.426,0-17.067,7.641-17.067,17.067
			S92.974,256,102.4,256h136.533c9.426,0,17.067-7.641,17.067-17.067V102.4C256,92.974,248.359,85.333,238.933,85.333z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        10:00 - 12:00
      </span>
    </div>
    <div class="border-b-8 border-t-8 border-secondary">
      <GMap
        ref="gMap"
        language="en"
        :center="{ lat: -6.253623, lng: 107.012887 }"
        :options="{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: true,
          gestureHandling: 'cooperative',
        }"
        :zoom="15"
      >
        <GMapMarker :position="{ lat: -6.253623, lng: 107.012887 }">
        </GMapMarker>
      </GMap>
    </div>
    <svg
      class="block fill-current text-primary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 270"
    >
      <path
        fill-opacity="1"
        d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,101.3C840,64,960,32,1080,53.3C1200,75,1320,149,1380,186.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>

<style>
.GMap__Wrapper {
  width: 100%;
  height: 550px;
}
</style>
