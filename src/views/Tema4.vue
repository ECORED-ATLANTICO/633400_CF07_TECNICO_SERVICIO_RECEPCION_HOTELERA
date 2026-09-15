<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normativa

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La industria hotelera cuenta con un conjunto de normas que regulan la actividad del servicio de alojamiento. Conocerlas y aplicarlas es indispensable para prestar un servicio eficiente y evitar situaciones que puedan generar sanciones o perjuicios al establecimiento.
            p.mb-0 Para el procedimiento de registro (#[em check-in]) se debe considerar la Norma Técnica Sectorial Hotelera NTSH 003, que establece los requisitos de competencia laboral para el cargo de recepcionista de establecimiento de alojamiento y hospedaje. En el material complementario se encuentra el enlace para ampliar la información sobre esta norma.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Normativa de prevención de explotación sexual comercial de niños, niñas y adolescentes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p La Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCNNA) en el contexto de viajes y turismo está tipificada como delito en Colombia. El artículo 219 del Código Penal colombiano, sobre turismo sexual, establece que quien dirija, organice o promueva actividades turísticas que incluyan la utilización sexual de personas menores de 18 años incurrirá en prisión de cuatro (4) a ocho (8) años. Las penas para delitos relacionados con ESCNNA pueden llegar hasta 30 años de prisión dependiendo de la gravedad y las circunstancias del caso (Ley 679 de 2001 y Ley 1336 de 2009).
        .bg-img.rounded-4.p-4
          .pe-4
            p La Ley 1336 de 2009 establece que todos los prestadores de servicios turísticos y los establecimientos que presten el servicio de hospedaje deben adoptar y fijar en lugar público códigos de conducta eficaces que promuevan políticas de prevención y eviten la utilización y explotación sexual de niñas, niños y adolescentes. Adicionalmente, el Ministerio de Comercio, Industria y Turismo exige la adhesión a estos códigos de conducta como requisito para la inscripción en el Registro Nacional de Turismo (RNT).
            
      .col-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/2.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/3.png", alt="")
      .col-lg-9
        p El Manual de Buenas Prácticas para la Prevención de la ESCNNA en Viajes y Turismo (Ministerio de Comercio, Industria y Turismo, s.f.), dirigido a los prestadores de servicios turísticos, señala que cada año se producen más de 600 millones de viajes turísticos internacionales, y que un porcentaje significativo de ellos involucra la búsqueda de actividades sexuales con menores de edad. Esta realidad obliga al personal hotelero a estar en estado permanente de alerta y conocer los protocolos de actuación.
        .p-4.rounded-4.bg-acento-contenido-a5
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 Se invita a descargar y leer el Manual de Buenas Prácticas para la Prevención de la ESCNNA en Viajes y Turismo, disponible como anexo en el material complementario.
            .col-lg-3
              a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo2_CF07_ESCNNA.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    p Es deber del recepcionista conocer esta normativa y, en caso de identificar situaciones de riesgo o presuntos casos de ESCNNA, actuar de manera inmediata a través de los siguientes canales:

    .row.mb-5.justify-content-center.align-items-stretch.z-2
      .col-sm-6.col-lg-4.mb-3
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5.h-100
            .p-3
              p.mb-0 Avisar al departamento de seguridad del establecimiento hotelero.
      .col-sm-6.col-lg-4.mb-3
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5.h-100
            .p-3
              p.mb-0 Llamar a la línea 141, línea gratuita de atención a niñas, niños y adolescentes del Instituto Colombiano de Bienestar Familiar (ICBF).
      .col-sm-6.col-lg-4.mb-3
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5.h-100
            .p-3
              p.mb-0 
                span Reportar la situación a través de la aplicación Te Protejo o mediante el sitio web: 
                a(href="https://teprotejocolombia.org" target="_blank")
                  span https://teprotejocolombia.org
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5.h-100
            .p-3
              p.mb-0 Comunicarse con la Policía Nacional — Policía de Infancia y Adolescencia o la Fiscalía General de la Nación.
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop')
          .tarjeta.bg-secundario-s5.h-100
            .p-3
              p.mb-0 La omisión de denuncia ante casos conocidos de ESCNNA también está tipificada como delito en el artículo 219-B del Código Penal colombiano.

    Separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Normativa aplicable para nacionales y extranjeros

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p Solicitar los documentos de identidad tanto de adultos como de menores de edad es un requisito indispensable en el proceso de registro. En el caso de menores de edad que se alojen en el establecimiento, se debe verificar el grado de parentesco con la persona adulta acompañante.
        .p-4.rounded-4.bg-secundario-s5.mb-3
          p.mb-0 En caso de no haber parentesco, se debe solicitar el documento de autorización de los padres o tutores debidamente autenticado, en el que se informe que el menor de edad se aloja en compañía de esa persona mayor de 18 años con pleno conocimiento y consentimiento de sus representantes legales. Si el adulto indica estar casado con el menor de edad, se debe solicitar el soporte del contrato matrimonial que acredite dicho vínculo. En todos los casos, se debe anexar copia de la identificación y de los documentos presentados como evidencia de la verificación realizada durante el protocolo de registro (Ministerio de Comercio, Industria y Turismo, s.f., p. 29).
        p.mb-4.mb-lg-0 Este procedimiento está respaldado por la Ley 1336 de 2009 y la Ley 679 de 2001, que obligan a los establecimientos de hospedaje a implementar mecanismos activos de prevención de la ESCNNA, incluyendo la verificación documental en el momento del ingreso.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/9.png", alt="")

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Documentos de identificación legalmente aceptados
    
    p El documento de identidad es un documento público que contiene datos de identificación personal, emitido por una autoridad competente para permitir la identificación de los ciudadanos ante las instituciones y el sistema jurídico.
    p.mb-4 En Colombia, los documentos de identificación vigentes son:
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/10.png", alt="")
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Registro civil de nacimiento")
            .col-auto
              p.mb-0 Documento que acredita el nacimiento y la identidad de los colombianos desde su nacimiento. Es la base para la expedición de los demás documentos de identidad. 
          .row(numero="2" titulo="Tarjeta de identidad")
            .col-auto
              p.mb-0 Documento de identificación para niñas y niños colombianos desde los 7 años hasta los 17 años. Actualmente se expide en formato digital con chip electrónico por la Registraduría Nacional del Estado Civil. 
          .row(numero="3" titulo="Cédula de ciudadanía")
            .col-auto
              p.mb-0 Documento de identificación obligatorio para todos los colombianos a partir de los 18 años. Es el único documento válido para todos los actos civiles, políticos, administrativos y judiciales, conforme a la Ley 39 de 1961 y la normativa complementaria vigente. Actualmente coexisten dos formatos válidos: la cédula amarilla con hologramas y la cédula de ciudadanía digital en policarbonato con chip, expedida por la Registraduría Nacional del Estado Civil desde 2022. La versión digital puede presentarse también a través de la aplicación móvil Cédula Digital Colombia, con plena validez legal conforme a la Circular Externa 11 de 2021 de la Registraduría. 
          .row(numero="4" titulo="Cédula de extranjería")
            .col-auto
              p.mb-0 Documento expedido por la Unidad Administrativa Especial Migración Colombia para los extranjeros residentes en el país. Tiene los mismos efectos que la cédula de ciudadanía, excepto el derecho al voto. 
          .row(numero="5" titulo="Pasaporte")
            .col-auto
              p.mb-0 Documento de viaje internacional válido para la identificación de extranjeros en el proceso de registro hotelero. Para el reporte en el SIRE, el pasaporte debe estar vigente y contar con visa vigente o permiso autorizado por Migración Colombia. 
          .row.title-alto(numero="6" titulo="Documento de identidad de países de la Comunidad Andina de Naciones (CAN)")
            .col-auto
              p.mb-0 Los ciudadanos de Bolivia, Ecuador y Perú pueden ingresar y ser registrados con su documento de identidad nacional, sin necesidad de pasaporte. 
          .row(numero="7" titulo="Permiso de Protección Temporal (PPT)")
            .col-auto
              p.mb-0 Documento expedido por Migración Colombia a ciudadanos venezolanos en el marco del Estatuto Temporal de Protección para Migrantes Venezolanos (Decreto 216 de 2021). Es un documento de identificación válido para el registro hotelero y el reporte en el SIRE.
          


</template>

<script>
export default {
  name: 'Tema4',
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
