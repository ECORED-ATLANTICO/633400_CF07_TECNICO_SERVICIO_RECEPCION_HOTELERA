<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Bitácoras
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9.bg-img.rounded-4.p-4
        .pe-4
          p La bitácora de trabajo es el registro cronológico en el que el recepcionista consigna toda la información relevante que debe ser conocida y gestionada durante la jornada. Su propósito es garantizar la continuidad del servicio entre turnos y dejar evidencia de las novedades ocurridas.
          p.mb-4 Entre los aspectos que se deben registrar se encuentran:
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema8/1.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema8/2.png", alt="")
      .col-lg-8
        SlyderF(columnas="col-sm-6 col-lg-6")
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/3.svg' alt='')
            h4.text-center.mb-5 Paquetes por recoger:
            p.text-center.mb-4 correspondencia, encomiendas o domicilios recibidos a nombre de un huésped que aún no han sido entregados.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/4.svg' alt='')
            h4.text-center.mb-5 Mensajes por entregar: 
            p.text-center.mb-4 comunicaciones verbales o escritas dirigidas a huéspedes o al personal del establecimiento.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/5.svg' alt='')
            h4.text-center.mb-5 Llegadas de atenciones especiales:
            p.text-center.mb-4 registro de cortesías, detalles de bienvenida o solicitudes VIP programadas para huéspedes próximos a llegar.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/6.svg' alt='')
            h4.text-center.mb-5 Eventos por realizarse:
            p.text-center.mb-4 actividades internas o externas que afecten la operación del hotel, como grupos, convenciones, celebraciones o visitas institucionales.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/6.svg' alt='')
            h4.text-center.mb-5 Memorandos por leer:
            p.text-center.mb-4 comunicaciones internas de la gerencia o jefaturas que deben ser conocidas por el personal de recepción.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/7.svg' alt='')
            h4.text-center.mb-5 Habitaciones #[em no-shows]:
            p.text-center.mb-4 reservas que no se materializaron y cuyo estado debe ser verificado y reportado según las políticas del establecimiento.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema8/8.svg' alt='')
            h4.text-center.mb-5 Pendientes: 
            p.text-center.mb-4 tareas iniciadas en el turno anterior que no pudieron resolverse y requieren seguimiento por parte del turno entrante.

    .rounded-4.bg-img.bg-img--2.overflow-hidden.p-4.mb-4.mb-lg-5
      p.mb-0 La bitácora debe ser firmada por quien entrega el turno y quien lo recibe, como constancia de que la información fue comunicada y recibida correctamente. En establecimientos que cuenten con PMS u otras plataformas digitales de gestión, este registro puede realizarse en el sistema, siempre dejando constancia del recibo conforme por ambas partes.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema8/10.png", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start Ejemplo actividades para recibir y entregar turno.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo3_CF07_8_Actividades_para_recibir_y_entregar_turno.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema8',
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
