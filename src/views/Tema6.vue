<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Reportes

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema6/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.banner-text--green.shadow
            p.mb-0.text-center #[strong Existe una serie de reportes que se deben tener presentes en la recepción. Estos son:]

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t20").mb-4
      .row.justify-content-center.align-items-center.z-2(titulo="Lista de huéspedes")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p.mb-0 Este listado puede organizarse por número de habitación o alfabéticamente por apellido. Se utiliza para identificar de manera ágil en qué habitación se encuentra registrada una persona o quiénes están alojados en determinada habitación. Es especialmente útil cuando llegan mensajes, encomiendas o visitas para un huésped, y permite al recepcionista responder con rapidez y precisión sin necesidad de ingresar al sistema en cada consulta.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/2.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Lista de reservas")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p.mb-0 Contiene el detalle de todas las reservas confirmadas para un período determinado, generalmente el día en curso y los días siguientes. Incluye datos como nombre del huésped, tipo de habitación solicitada, tarifa aplicada, fechas de llegada y salida, y observaciones especiales. Este reporte permite anticipar la asignación de habitaciones, preparar prerregistros y coordinar con #[em housekeeping] y alimentos y bebidas los servicios incluidos en cada reserva.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/3.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Reporte de ocupación")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p.mb-0 Indica el porcentaje de habitaciones ocupadas en relación con el total disponible del establecimiento. Es uno de los indicadores operativos más importantes de la recepción, ya que permite tomar decisiones sobre disponibilidad, tarifas y asignación de recursos humanos. Se genera desde el PMS y debe ser revisado al inicio de cada turno para conocer el estado real del hotel.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/4.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Lista de llegadas y salidas pronosticadas")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p.mb-0 Relaciona los huéspedes que se espera lleguen (#[em check-in]) y los que tienen prevista su salida (#[em check-out]) durante el turno. Permite organizar la carga de trabajo de la recepción, anticipar el número de habitaciones que estarán disponibles y coordinar con #[em housekeeping] los tiempos de limpieza y entrega. Una gestión adecuada de este reporte reduce los tiempos de espera y evita conflictos por habitaciones no disponibles a la hora del ingreso.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/5.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Lista de grupos y cuentas maestras")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p.mb-0 Detalla los grupos con reserva activa en el hotel, el nombre del responsable, las habitaciones asignadas, los servicios incluidos en la cuenta maestra y los consumos que corren por cuenta de cada huésped de forma individual. Su uso correcto evita errores de facturación frecuentes, como cargar a la cuenta del grupo gastos personales del huésped o viceversa.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/6.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="<em>No-shows</em>")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p.mb-0 Son las reservas que no se materializaron: el huésped no llegó en la fecha prevista y no canceló la reserva con anticipación. Este reporte permite identificar habitaciones que figuraban como ocupadas pero que en realidad están disponibles, liberándolas para nuevas asignaciones. Dependiendo de las políticas del hotel y el tipo de garantía entregada al momento de la reserva, puede aplicarse un cargo por #[em no-show] al huésped o a la agencia responsable.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/7.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Reporte de ama de llaves")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Contiene la información detallada del estado de cada habitación del hotel. Es recibido por la recepción tres veces al día — generalmente en la mañana, al mediodía y en la noche — y se utiliza para comparar con el reporte de ocupación del PMS: ambos deben coincidir. En caso de encontrar diferencias (por ejemplo, una habitación que el sistema registra como ocupada, pero ama de llaves reporta como vacía), se debe hacer una revisión inmediata del estado real de la habitación.
          p.mb-0 En periodos de alta ocupación, este reporte puede revelar habitaciones desocupadas que por algún motivo no pasaron por caja, lo que representa un riesgo de pérdida para el establecimiento. También indica si una habitación está ocupada por una o varias personas, dato que permite verificar que los registros iniciales corresponden con la realidad del uso de la habitación.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema6/8.png', alt='')

</template>

<script>
export default {
  name: 'Tema6',
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
