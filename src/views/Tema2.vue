<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recepción hotelera

    .mt-xl-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Es el área donde el huésped desde que llega hasta que se va, solicita sus servicios, por este motivo el trato que reciba aquí es de vital importancia en el resultado final de la estadía.

    .bg-acento-contenido-a5.bg-special.rounded-4.p-4
      .row.justify-content-center.align-items-center
        .col-lg-9
          p.mb-0 La importancia del departamento de recepción en el desarrollo de la operación del hotel es fundamental, no solo por las personas que constantemente solicitan los servicios, sino porque es el centro de operaciones y comunicación del hotel.
        .col-lg-2.position-lg-relative.z-2
          img.position-lg-absolute.img-flotante(data-aos="fade-down")(src="@/assets/curso/tema2/2.png", alt="").img-fluid.d-none.d-lg-block

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Estructura organizacional del área

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/3.png", alt="")
      .col-lg-8
        p Cada hotel adopta su propio modelo organizacional de acuerdo con sus necesidades; así en la recepción se controlan todos los servicios ofrecidos a los clientes y debe mantener una correcta y continua relación con los demás departamentos.
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 El departamento de recepción puede estar conformado por las áreas de reservas, caja y conserjería, especialmente en hoteles con mayor capacidad o volumen de clientes.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Personal de recepción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9.bg-img.rounded-4.p-4
        .pe-4
          p Este tiene unas funciones enfocadas a coadyuvar al proceso del servicio al cliente y cada hotel es el que las determina. Estas funciones varían respecto al turno (mañana, tarde, noche) y a la sección dentro del área de recepción donde se desempeñen (#[em front], #[em back], caja, auditoría). Siempre se espera que el personal de recepción sea multifuncional y pueda desempeñar la función que le corresponda en el horario asignado según la programación.
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")

    .bg-title.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Funciones

    .row.g-0.rounded-4.bg-acento-contenido-a5.mb-4
      .col-lg-3.d-none.d-lg-block
        figure.m-0
          img(src="@/assets/curso/tema2/5.png", alt="alt text")
      .col-lg-9.p-4.p-lg-0
        .d-flex.align-items-center.h-100
          div
            p.px-lg-3 Las funciones del personal de recepción son variadas y se determinan de acuerdo con el establecimiento (categoría, tamaño, políticas), pero, en general, un empleado de recepción debe abarcar muchas tareas.
            p.px-lg-3.mb-0 Entre las funciones principales están:
    
    .row.mb-5.justify-content-center.z-2
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones-a5
            .pe-2.py-4
              p.mb-0 Registro de huéspedes.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones-a5
            .pe-2.py-4
              p.mb-0 Atención al cliente.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones-a5
            .pe-2.py-4
              p.mb-0 Control de reservas del día.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones-a5
            .pe-2.py-4
              p.mb-0 Aplicación de tarifas.

    p.mb-4.mb-lg-5 También figuran las siguientes funciones:

    .row.justify-content-center.align-items-stretch.z-2.mb-5
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          ul.lista-ul--color.ms-3.pe-4
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Autorizar cambios de habitación.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Asignación de habitaciones.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Conocer procedimientos y políticas del hotel.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Hacer prerregistro de grupos.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Conocer la oferta del hotel (tipología de habitaciones, servicios, tarifas).
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Recibir solicitud de cambios y cancelaciones de reservas.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Conocer la oferta turística de la zona.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Recibir y gestionar las peticiones, quejas, reclamos y sugerencias (PQRS) de los huéspedes.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Conocer la disponibilidad de habitaciones.
      .col-sm-10.col-lg-6
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          ul.lista-ul--color.ms-3.pe-4
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Bloquear habitaciones.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Conocer la ocupación del día.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Manejar paquetes y planes de estadía.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Conocer las estadísticas de ocupación y las estrategias comerciales del hotel.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              span Operar el sistema de gestión hotelera #[em Property Management System] (PMS).
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Control de llaves.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Control de tarjetas de registro.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Entrada y salida de grupos.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Verificar reportes de ama de llaves.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Entrega de mensajes a los huéspedes.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Tener comunicación fluida con las áreas del hotel.

    .bg-title.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Responsabilidades

    .row.g-0.rounded-4.bg-acento-botones-a5.mb-4
      .col-lg-3.d-none.d-lg-block
        figure.m-0
          img(src="@/assets/curso/tema2/10.png", alt="")
      .col-lg-9.p-4.p-lg-0
        .d-flex.align-items-center.h-100
          div
            p.px-lg-3 El recepcionista adquiere la obligación de responder a las funciones inherentes a su cargo, así como el manejo adecuado de las herramientas que le son entregadas para desarrollar su labor.
            p.px-lg-3.mb-0 Dentro de esas responsabilidades, sin ser las únicas, se encuentran:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/11.svg', alt='')
          .tarjeta.bg-acento-contenido-a5.bg-color-4
            .p-4.text-center
              p.mb-0 Preservar la confidencialidad de la información y propiedad de los clientes.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/12.svg', alt='')
          .tarjeta.bg-acento-contenido-a5.bg-color-4
            .p-4.text-center
              p.mb-0 Mantener los registros disponibles, ordenados y actualizados.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/13.svg', alt='')
          .tarjeta.bg-acento-contenido-a5.bg-color-4
            .p-4.text-center
              p.mb-0 Vigilar los equipos a su cargo.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/14.svg', alt='')
          .tarjeta.bg-acento-contenido-a5.bg-color-4
            .p-4.text-center
              p.mb-0 Tener control de su área de trabajo.

    .bg-title.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Perfil del cargo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/15.png", alt="")
      .col-lg-8
        p Un perfil de un puesto de trabajo es la descripción de un conjunto de tareas y responsabilidades que se asignan a una persona dentro de una organización.
        p.mb-0 Es así que, para desarrollar la función de recepcionista, se requiere cumplir con unos requisitos para garantizar el cumplimiento satisfactorio de las actividades. Se consideran el nivel de estudios, experiencia, conocimientos, aptitudes y características específicas en su personalidad, considerando también valores éticos y morales.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema8/10.png", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start A continuación, se expone un ejemplo de perfil para el cargo de recepcionista.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo1_CF07_Perfil_cargo_recepcionista.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Relaciones con otros departamentos del hotel

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/16.png", alt="")
      .col-lg-8
        p La recepción es el primer y el último lugar de contacto con el huésped y como es el centro logístico de operaciones del establecimiento de alojamiento, desempeña un papel fundamental en la entrega del servicio de hospitalidad a los huéspedes. Para poder brindar un servicio de calidad se debe desarrollar el trabajo en equipo, de forma ordenada y profesional, lo que implica crear rutinas de comunicación interdepartamental.
        .p-4.rounded-4.bg-acento-contenido-a5
          p.mb-0 Los huéspedes están a menudo en un entorno desconocido y desean llevar a cabo sus planes de negocios o vacaciones, están ansiosos por aprender el quién, qué, cuándo, dónde y cómo de ese nuevo entorno.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Las solicitudes de información, a menudo, comienzan con el botones, el operador telefónico, el empleado de recepción, cajero o conserje, porque estos empleados son los más visibles para el huésped y se perciben como los más conocedores; estos son quienes toman el pulso de la organización y la comunidad. 
        .p-4.rounded-4.bg-secundario-s5.mb-3
          p.mb-0 Sus respuestas a las solicitudes de información de los huéspedes sobre el transporte público, ubicación de las instalaciones del hotel, eventos especiales en la comunidad, y otro sinnúmero de preguntas, indican lo bien que el hotel los ha preparado para este importante papel.
        p.mb-4.mb-lg-0 Los gerentes de recepción deben participar activamente en la recopilación de información de interés para los huéspedes. También deben estar activos en el desarrollo de procedimientos para que el área de recepción comunique esta información efectivamente. Las relaciones que el gerente de recepción desarrolla con los otros directores de departamento y sus empleados son vitales para recopilar esta información. (Bardi, 2011).
      .col-sm-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/17.png", alt="")

    p Principales departamentos con los que se relaciona la recepción:

    .row.justify-content-center.align-items-stretch.z-2.mb-5
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center.mb-4
            .col-lg-4
              img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema2/18.svg", alt="")
            .col-lg-6
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Reservas.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Ama de llaves.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Restaurante y bar.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Lavandería.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Mantenimiento.
         
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center.mb-4
            .col-lg-4
              img.w-110.mb-4.mb-lg-0(src="@/assets/curso/tema2/19.svg", alt="")
            .col-lg-6
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Contabilidad.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Recursos humanos.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Servicio a la habitación.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Botones.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Conserjería.


</template>

<script>
export default {
  name: 'Tema2',
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
