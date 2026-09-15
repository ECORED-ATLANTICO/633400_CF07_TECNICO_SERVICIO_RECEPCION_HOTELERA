<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 En un adecuado servicio hotelero intervienen diferentes factores que posibilitan la estadía agradable de los huéspedes. Para ello, se hace necesario reconocer sus necesidades e intereses que se articulan a sus estilos y posibilidades al momento de hospedarse. De allí se presenta la relación de los diferentes elementos que aportan calidad de los servicios ofrecidos, protocolos y procedimientos, los que se estudiarán a lo largo de este componente formativo.
  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
