<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Huésped

    .row.g-0.rounded-4.bg-acento-contenido-a5.mb-4
      .col-lg-3.d-none.d-lg-block
        figure.m-0
          img(src="@/assets/curso/tema1/1.png", alt="alt text")
      .col-lg-9.p-4.p-lg-0
        .d-flex.align-items-center.h-100
          p.mb-0.px-lg-3 Es el cliente que se aloja en un establecimiento de servicio de alojamiento (hotel, apartahotel, posada, etc.); la palabra viene del latín #[em hospes].
  
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p Es importante comprender que cada huésped es único y que su motivación a viajar es específica; por lo que la disposición y actitud del recepcionista es indispensable para dar el servicio de calidad que se está buscando dentro del establecimiento y por el cual cada cliente paga.
        .p-4.rounded-4.bg-secundario-s5.mb-3
          p.mb-0 Los huéspedes se pueden clasificar de acuerdo con unas características, las que definen la forma como los atendemos y ayudan a segmentarlos de cara a las estrategias de servicio y de mejoramiento de ingresos.
        p.mb-0 Se estudiarán primero los tipos y características de los huéspedes según el colectivo al que pertenecen.

      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")

    .mt-4.mt-lg-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema1/3.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.banner-text--green.shadow
            p.mb-0.text-center #[strong Tipos y características de los huéspedes según el colectivo]

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t20").mb-4
      .row.justify-content-center.align-items-center.z-2(titulo="Tercera edad")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Los adultos mayores que por su disponibilidad de tiempo y recursos viajan generalmente con fines de esparcimiento. Se les conocen como la generación #[em baby boomer].
          p.mb-0 Por lo general, disponen de presupuestos más altos a la hora de viajar y suelen viajar en pareja o con amigos. Sus motivaciones de viaje los lleva a disfrutar las áreas del hotel en forma tranquila, requieren mayores explicaciones para el uso de las mismas y sus necesidades como viajeros generalmente se enfocan en salir de la rutina, por esto contar con un excelente servicio les reconforta.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Familias")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Este tipo de viajeros se da ahora con mayor frecuencia y los hoteles afrontan la solicitud del servicio de alojamiento para las familias en temporadas de vacaciones o fines de semana y/o con festivos. En este grupo la disponibilidad de dinero es más ajustada, por lo que son abiertos a escuchar ofertas de todo incluido y a las acomodaciones múltiples.
          p En las familias con niños generalmente los padres buscan tiempos de esparcimiento con sus hijos, sus solicitudes en el hotel varían de acuerdo con la edad de sus hijos, temas como la necesidad de contar con cuna, coche o silla de comedor especial entre otros, se hace presente.
          p.mb-0 En el momento de realizar su registro en el hotel, el recepcionista debe contar con la habilidad para identificar las necesidades y poder suplirlas con el equipo de trabajo.
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/5.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Diplomáticos / Gobierno")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Son personas que trabajan con el Estado y viajan por trabajo, pero tienen un matiz adicional y es que, por lo general y en virtud del cargo que desempeñan o del rango que tengan, su tratamiento puede requerir un protocolo específico, principalmente por su seguridad. Por lo tanto, el hotel determina su propio procedimiento para el manejo de ellos. 
          p.mb-0 Temas como el lugar en donde realizan su registro, habitaciones para su personal de seguridad ubicadas de manera estratégica y forma de atender sus requerimientos deben ser considerados. 
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/6.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Grupos")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Esta tipología de huéspedes son una congregación de personas que viajan en las mismas fechas y con motivaciones de viaje similares (una convención, un #[em tour], etc.). Poseen ciertos tratamientos y servicios específicos comunes a todos ellos. 
          p Cada hotel establece el número base para determinar llamar “grupo” teniendo en cuenta el número de personas y/o de habitaciones que van a alojar con un mismo código de reserva. Por lo general se puede decir que se considera grupo un número superior a 10 personas o 10 habitaciones en acomodaciones según sus necesidades. 
          p.mb-0 Para su atención también se debe establecer un protocolo, que contemple espacio especial para su recibimiento, control de equipajes, áreas especiales para el consumo de alimentos y si el motivo de viaje es empresarial, van a requerir de salones adecuados para realizar sus reuniones: se suelen otorgar descuentos en la tarifa y una serie de servicios adicionales. 
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/7.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Viajeros generación Z")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Estos son grupos de estudiantes, que deciden tomar un año sabático para conocer el mundo. Viajan con presupuestos más cuidados, pero siempre aprecian una buena conexión de internet y facilidades como lavandería, una ubicación céntrica y recomendaciones en seguridad y transporte. 
          p Es una tipología distinta al “mochilero”, ya que, aunque limitados, buscan espacios de alojamiento individuales, esperan un lugar moderno y atractivo con todas las comodidades. Les encanta publicar su experiencia en redes sociales por lo que son fuente potencial de buena o mala publicidad. 
          p.mb-0 Este grupo está cobrando gran relevancia, porque se dice que allí están los viajeros frecuentes del futuro. 
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/8.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Viajeros de lujo")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Estos viajeros son los que tienen mayores expectativas y están dispuestos a pagar por la experiencia. 
          p Por lo general el precio no es problema para ellos, son sofisticados, pero se fijan mucho en el valor de lo que obtienen (relación calidad-precio). 
          p.mb-0 Por lo general, sus viajes son muy bien planeados y con intervención de asesores especializados. La mayoría de las ocasiones son viajeros de edad adulta, entre los 40 y 60 años que viajan en pareja. 
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/9.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Mochileros")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Este tipo de viajeros prestan mucha atención a la tarifa y se caracterizan porque para alojarse solo requieren lo necesario. Su motivación principal de viaje es insertarse en la cultura y compartir con su entorno. 
          p Ellos siempre aprecian los consejos de seguridad y de actividades locales, además de una buena conectividad. 
          p.mb-0 Por lo general, se hospedan en hostales, donde el ambiente compartido los enriquece culturalmente. 
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/10.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Corporativo")
        .col-sm-10.col-lg-8.mb-4.mb-lg-0
          p Son los clientes que viajan por motivos de trabajo o negocios, su permanencia generalmente no excede una semana. Suelen ser muy exigentes con el servicio y por lo general son menos sensibles al precio. 
          p Generalmente manejan su tiempo con horarios preestablecidos, agenda de reuniones o visitas con sus clientes, por lo cual su disposición para realizar su registro en el momento de ingresar al hotel o para el pago de su cuenta en el momento de dejarlo, es limitado. 
          p.mb-0 Usualmente la empresa para la cual trabaja es la responsable de coordinar todo lo concerniente a su estadía, entre ellos solicitar la reserva, negociar la tarifa, escoger tipo de habitación y pagar la cuenta. 
        .col-sm-7.col-lg-3
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')

    .px-4.py-3.bg-secundario-s5.rounded-4.mb-5
      p.mb-0 También es posible clasificar a los huéspedes según su frecuencia de viaje; este aspecto adicional determina, junto con el tipo de viajero, las características de los huéspedes, y aspectos como la sensibilidad al precio y los servicios esperados. A continuación, se conocerán cada uno de ellos.

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-6.mb-4.mb-lg-0
              h4 Cliente #[em walk-in]
              p Es el cliente que llega al hotel sin previa reserva y no es cliente permanente del hotel, su estadía generalmente es muy corta y se da de manera fortuita.
              p Con estos huéspedes se debe tener especial cuidado por motivos de seguridad, ya que en principio desconocemos su procedencia. Suelen tener consumos en el hotel, por lo que garantizar adecuadamente el pago (pago adelantado + una garantía) es una medida pertinente.
              p.mb-0 Siempre será importante identificar su motivación con el fin de ofrecer el servicio que busca.
            .col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/tema1/12.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-6.mb-4.mb-lg-0
              h4 Cliente frecuente
              p Este tipo de cliente usa de manera asidua el hotel, es conocido por el personal que allí labora, hace del hotel su segunda casa.
              p Por lo general son clientes de tipo corporativo o parte de una tripulación que visitan periódicamente el destino.
              p Debido al continuo uso del establecimiento hotelero sus requerimientos pueden ser repetitivos, conoce muy bien el lugar y los empleados del hotel. Su familiaridad con el ambiente lo lleva a sentirse seguro y tranquilo.
              p.mb-0 Con este tipo de huéspedes es fácil caer en la rutina, por lo que conviene siempre tener una actitud abierta frente a ellos haciéndoles sentir que están en casa, pero no que son uno más de la casa.
            .col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/tema1/13.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-6.mb-4.mb-lg-0
              h4 Cliente esporádico
              p Este tipo de cliente usa el hotel de acuerdo con la circunstancia puntual que está viviendo.
              p Muy probablemente ha visitado el hotel varias veces, pero no lo hace con una frecuencia tan alta.
              p Es un tipo de huéspedes al que hay que comunicarles las situaciones nuevas del hotel sin hacerles sentir que son extraños.
              p.mb-0 Con estos clientes siempre es importante recurrir a los históricos del PMS (#[em Property Management System]) y corroborar esa información al momento del registro.
            .col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/tema1/14.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-6.mb-4.mb-lg-0
              h4 Clientes larga estadía
              p Estos clientes son por lo general corporativos o personas que por facilidad deciden estar largas temporadas en un hotel.
              p De acuerdo con las políticas del hotel, puede ser considerada larga estadía el utilizar el hotel por más de 10 noches continuas. Estos clientes identifican el hotel como su segunda casa, se sienten confiados porque conocen muy bien el establecimiento, saben que pueden encontrar todo lo que necesitan durante su estadía. Sus tarifas de alojamiento han sido negociadas previamente y pueden acordar servicios complementarios incluidos o con tarifas preferenciales, ejemplo: alimentación, llamadas telefónicas, servicio de lavandería, entre otras.
              p.mb-0 Ellos requieren habitaciones espaciosas y empiezan a tener un comportamiento similar al del huésped frecuente.
            .col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/tema1/15.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-6.mb-4.mb-lg-0
              h4 Huésped permanente
              p En una escala superior en términos de frecuencia, están los huéspedes permanentes.
              p Estos son personas que por su labor o por alguna circunstancia específica escogen vivir en el hotel. Aquí las estadías superan los 30 días continuos, alcanzando varios meses o hasta años.
              p.mb-0 Debido a la extensión de estas estadías, estos clientes tienen tratos preferentes en términos de tarifa y desean ser tratados como el huésped predilecto del hotel, no en vano el hotel es su hogar. 
            .col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/tema1/16.png', alt='')
          
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
