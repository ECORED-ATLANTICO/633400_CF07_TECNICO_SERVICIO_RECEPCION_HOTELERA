<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Recibo y entrega de turno

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema7/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.banner-text--green.shadow
            p.mb-0.text-center #[strong El área de recepción opera con turnos rotativos de 8 horas laborales, distribuidos así:]

    .row.mb-5.justify-content-center.z-2
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/2.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5
            .p-3
              p.mb-0 Turno mañana: 6:00 a.m. – 2:00 p.m.
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/3.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5
            .p-3
              p.mb-0 Turno tarde: 2:00 p.m. – 10:00 p.m.
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/4.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5
            .p-3
              p.mb-0 Turno noche: 10:00 p.m. – 6:00 a.m.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema7/5.png", alt="descripcion")
      .col-lg-9
        p.mb-0 Al iniciar el turno, el recepcionista debe informarse de las novedades del turno anterior, revisar los reportes de ocupación, llegadas y salidas, y verificar que todos los elementos de trabajo estén disponibles y en orden.
        p Es responsabilidad del recepcionista no dejar actividades pendientes para el siguiente turno. Al finalizar su jornada debe registrar las novedades relevantes y los pendientes que por alguna razón no pudieron resolverse, con el fin de garantizar la continuidad del servicio.
        .p-4.rounded-4.border.bg-terciario-t20
          p.mb-0 Este registro se realiza en el libro de novedades, con firma de quien entrega y quien recibe el turno. En establecimientos con PMS u otras plataformas digitales de gestión, el registro puede realizarse también en estos sistemas, siempre dejando constancia del recibo conforme por ambas partes. 
        
</template>

<script>
export default {
  name: 'Tema7',
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
