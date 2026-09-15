<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-12
        p.mb-0 El registro de huéspedes, o #[em check-in], es el proceso central de la recepción hotelera y el primer punto de contacto formal entre el establecimiento y el cliente. Su correcta ejecución depende del conocimiento integral de los tipos de huéspedes y sus características, el manejo eficiente de los reportes operativos, y la aplicación rigurosa de los procedimientos técnicos establecidos para cada perfil de huésped: individual, grupal, extranjero o VIP. A esto se suma el cumplimiento de la normativa vigente en materia de identificación, prevención de la ESCNNA y reporte migratorio a través del SIRE, así como la aplicación de protocolos internos de presentación personal, trato al cliente y uso de áreas. La gestión ordenada de la bitácora y la entrega de turno garantizan la continuidad del servicio y la trazabilidad de las novedades entre jornadas. En conjunto, estos elementos constituyen la base de un servicio de recepción profesional, seguro y alineado con los estándares técnicos del sector hotelero colombiano.
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama tipo mapa conceptual del componente formativo “Front office: check-in”. Desde el tema central se desprenden siete categorías: huésped, recepción hotelera, registro de huéspedes, tipos de check-in, normativa, protocolos internos y gestión operativa. Cada categoría incluye palabras clave: tipos y frecuencia; personal, funciones y relación con áreas; reserva, disponibilidad, ocupación, TRA, llaves y procedimiento técnico; individual, grupos, extranjeros, VIP y auto check-in; NTSH 003, Ley 300, Ley 2068, ESCNNA y SIRE; uniforme, presentación, trato y uso de áreas; y reportes, entrega de turno y bitácora.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
