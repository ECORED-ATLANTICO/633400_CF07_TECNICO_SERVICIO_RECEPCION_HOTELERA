<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Registro de huéspedes (#[em check-in])

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Es el procedimiento de ingreso del huésped y aquí el recepcionista es quien recibe al cliente y procede a realizar el registro, solicitar o verificar la forma de pago, entregar la llave de la habitación y dar información relevante para la estadía del huésped.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-lg-6.mb-3.mb-lg-0
        .bg-acento-contenido-a5.bg-special.rounded-4.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 Una buena información, y una correcta gestión, facilitan el trabajo del personal, reduce errores y riesgos, principalmente en la prestación del servicio.
            .col-lg-4.position-lg-relative.z-2
              img.position-lg-absolute.img-flotante(data-aos="fade-down")(src="@/assets/curso/tema3/2.png", alt="").img-fluid.d-none.d-lg-block
      .col-lg-6
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 En los establecimientos hoteleros se han implementado sistemas informáticos para hacer eficiente la gestión, organizando la información y ayudando en las actividades diarias. En el área de recepción se utilizan como base para el desarrollo de las funciones, unos reportes específicos.

    .p-4.rounded-4.bg-img.bg-img--5
      p.mb-0 El establecimiento que no cuente con un sistema de gestión hotelera #[em Property Management System] (PMS) debe utilizar una metodología manual organizada, lo cual permitirá encontrar la información necesaria para atender de manera eficaz a los huéspedes.
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Reserva

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8.mb-4.mb-lg-0
        p Es toda acción mediante la cual una persona de manera directa o a través de un tercero (agente), realiza una petición para contratar unos servicios, principalmente, de alojamiento y en una fecha determinada. Esta reserva puede ser individual o de grupo.
        p Una de las primeras actividades a realizar es conocer las reservas del día con el fin de preparar todo lo concerniente al recibimiento del cliente. Usualmente, es el departamento de reservas quien prepara la información y la entrega a recepción.
        p.mb-0 Con la sistematización, se presenta la facilidad de obtener un reporte en cualquier momento del día, y contiene información como:
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/3.png", alt="")
    
    .row.justify-content-center.align-items-stretch.z-2.mb-5
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center.mb-4
            .col-lg-4
              img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema3/4.svg", alt="")
            .col-lg-6
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Nombre del huésped.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Fecha de ingreso.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Fecha de salida.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Tipo de habitación.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Acomodación.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Número de personas.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Tarifa.
         
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center.mb-4
            .col-lg-4
              img.w-110.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.svg", alt="")
            .col-lg-6
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Requerimientos especiales.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Preferencias.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Forma de pago.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Garantía.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Tipo de reserva.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Reservado por.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Teléfono de contacto.
                
    .p-4.rounded-4.bg-acento-contenido-a5.mb-4.mb-lg-5
      p.mb-0 Con esta información el recepcionista debe clasificar la reserva en subgrupos, de la siguiente manera (Villanueva, 2012): 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t20").mb-4
          .row.justify-content-center.align-items-center.z-2(titulo="Reserva con garantía")
            .col-12
              p.ps-lg-5.mb-0 Son aquellas reservas que han recibido una cantidad de dinero (depósito) o un medio válido de garantía (tarjeta de crédito, carta de empresa o #[em voucher] de agencia) con el fin de asegurar la habitación. Generalmente corresponde al valor de la primera noche o al total de la estancia, de acuerdo con la política del hotel. En caso de que el huésped no llegue y no haya realizado el proceso de cancelación, esta situación se denomina #[em no-show].
          .row.justify-content-center.align-items-center.z-2(titulo="Reserva sin garantía")
            .col-12
              p.ps-lg-5.mb-0 Son aquellas que no han sido garantizadas de ninguna manera. En tal caso el hotel no tiene obligación de guardarla después de una hora determinada (aproximadamente 6:00 p. m.) y en caso de que el huésped no llegue, esas habitaciones pueden ser asignadas a otros clientes. Se puede considerar que cuando se está en baja temporada o mientras exista disponibilidad estas reservas no se cancelan. El proceso de revisión y confirmación de estas reservas es especialmente importante en momentos de alta demanda y la información siempre debe ser dada al cliente en el momento de estar realizando la reserva con el fin de evitar posteriores inconvenientes.
          .row.justify-content-center.align-items-center.z-2(titulo="Reservas especiales")
            .col-12
              p.ps-lg-5.mb-0 Son aquellas reservas en las que los huéspedes corresponden a personas importantes (VIP), clientes frecuentes, cortesías, grupos o ejecutivos de empresas hoteleras, entre otros. Estas reservas solo pueden cancelarse mediante solicitud del gerente o de una autoridad superior del establecimiento.

      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/6.png", alt="")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Disponibilidad (#[em Availability])

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema3/7.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La disponibilidad de habitaciones es un control gráfico conocido como #[em rack] de ocupación, #[em room rack] o #[em planning]. En los sistemas PMS modernos, este control se presenta en forma de gráfico digitalizado que muestra, mediante colores, el estado de cada habitación, como se presenta a continuación.

    .row.justify-content-center.align-items-center.mb-5.bg-secundario-s1.rounded-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span #[em Rack] de ocupación
        img.mb-2(data-aos="fade-up", src="@/assets/curso/tema3/8.png", alt="Panel digital de rack de ocupación en un sistema de gestión hotelera (PMS), que muestra la disponibilidad y estado de las habitaciones mediante un calendario y códigos de colores que indican habitaciones ocupadas, reservadas, disponibles o en mantenimiento.")
        figcaption Nota. Tomada de #[em EzeeFrontDesk] (s.f)

    .p-4.rounded-4.bg-acento-contenido-a5.mb-4.mb-lg-5
      p.mb-0 También se puede generar el “Reporte de estado de habitaciones”, el cual muestra la disponibilidad de habitaciones:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/9.png", alt="")
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema3/10.svg' alt='')
            h4.text-center Habitaciones desocupadas / libres: 
            p.text-center.mb-4 son aquellas habitaciones que no se encuentran reservadas y que pueden ser utilizadas para futuras reservas o pasajeros #[em Walk-in].
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema3/11.svg' alt='')
            h4.text-center Habitaciones reservadas: 
            p.text-center.mb-4 son habitaciones que se asignan a las reservas del día. De acuerdo con las solicitudes de los huéspedes, pueden o no ser reasignadas, es decir, realizarse cambios en la asignación de las mismas.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema3/12.svg' alt='')
            h4.text-center Habitaciones bloqueadas: 
            p.text-center.mb-4 son habitaciones que no pueden ser utilizadas para su uso por diferentes circunstancias, entre ellas el mantenimiento. Este procedimiento de bloqueo lo realiza el departamento de ama de llaves, por ser quienes conocen el estado real de las habitaciones.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema3/13.svg' alt='')
            h4.text-center.mb-5 Habitaciones en salida prevista: 
            p.text-center.mb-4 son las habitaciones que van a ser dejadas libres por los huéspedes.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema3/14.svg' alt='')
            h4.text-center.mb-5 Habitaciones sucias: 
            p.text-center.mb-4 son las habitaciones que los huéspedes han dejado libres y aún no han sido limpiadas por ama de llaves, por lo tanto, no están disponibles para la venta.

    p.mb-4.mb-lg-5 La siguiente figura presenta un ejemplo de un tipo de reporte.

    .row.justify-content-center.align-items-center.bg-secundario-s1.rounded-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Reporte de habitaciones
        img.mb-2(data-aos="fade-up", src="@/assets/curso/tema3/15.png", alt="Reporte de estado de habitaciones del sistema eZee que presenta un listado de números de habitación organizados por categorías como habitaciones ocupadas, suspendidas y disponibles, permitiendo visualizar la ocupación del hotel.")
        figcaption Nota. Tomada de #[em EzeeFrontDesk] (s.f)    

    Separador 

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Informe de ocupación

    .p-4.rounded-4.bg-img.bg-img--5.mb-4
      p.mb-0.text-center Haciendo uso del #[em software] hotelero se puede obtener el reporte de ocupación y de acuerdo con los parámetros que se establezcan para este reporte, la información que se puede obtener es:
      
    .row.justify-content-center.align-items-stretch.z-2.mb-5
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center
            .col-lg-4
              img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema3/16.svg", alt="")
            .col-lg-7
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Número de habitaciones ocupadas.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Número de habitaciones libres.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Número de habitaciones reservadas.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Número de huéspedes alojados.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Porcentaje de ocupación.
         
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center
            .col-lg-4
              img.w-110.mb-4.mb-lg-0(src="@/assets/curso/tema3/17.svg", alt="")
            .col-lg-7
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cuantos huéspedes se encuentran en el hotel.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Procedencia de las reservas.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Nacionalidad de los huéspedes.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Tipos de habitación en uso o en reserva.            

    .p-4.bg-acento-contenido-a5.rounded-4.z-2
      p.mb-0 Se debe tener en cuenta que estos datos son importantes para realizar la programación y coordinación del trabajo de recepción.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Formas impresas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/18.png", alt="")
      .col-lg-8
        p Las formas impresas (formatos y reportes) han ido disminuyendo su uso debido al avance de los sistemas informáticos de gestión hotelera, conocidos como #[em Property Management System] (PMS), que permiten registrar y administrar la información de los huéspedes de manera digital. No obstante, estos formatos aún pueden utilizarse en establecimientos que operan mediante procesos manuales o como respaldo documental de la información registrada en el sistema.
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 Un ejemplo de forma impresa utilizada en los establecimientos de alojamiento es la Tarjeta de Registro de Alojamiento (TRA), documento mediante el cual se formaliza el contrato de hospedaje entre el establecimiento y el huésped.
        p.mb-0 De acuerdo con el artículo 79 de la Ley 300 de 1996, modificado por el artículo 21 de la Ley 2068 de 2020, el contrato de hospedaje es un contrato de adhesión que una persona natural o jurídica celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo, por un plazo inferior a 30 días. Asimismo, conforme al parágrafo del artículo 22 de la Ley 2068 de 2020, la Tarjeta de Registro de Alojamiento (TRA) es la prueba del contrato de hospedaje, en la cual se registran los datos del huésped y de sus acompañantes, quienes responden solidariamente por las obligaciones derivadas del servicio.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-4.bg-acento-contenido-a5.rounded-4
          p Los datos mínimos que debe contener este registro son:
          ul.lista-ul--color.pe-4.m-0.mb-4.mb-lg-0
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Nombre completo del huésped.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Número de identificación.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Dirección de residencia.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Nombres completos y documento de identificación de los acompañantes.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Fecha de ingreso y fecha de salida.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/19.png", alt="")

    p.mb-5 Adicionalmente, en la operación de recepción pueden utilizarse otros formatos impresos o digitales, tales como:
    
    .row.justify-content-center.align-items-stretch.z-2
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center
            .col-lg-4
              img.w-120.mb-4.mb-lg-0(src="@/assets/curso/tema3/16.svg", alt="")
            .col-lg-7
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Hoja o carta de bienvenida.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Registro de mensajes para informar a los huéspedes sobre llamadas o visitas recibidas durante su ausencia.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Formato de reserva de habitaciones.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Requisición al almacén.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Requisición de cortesías.
         
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--4.p-4.h-100
          .row.align-items-center
            .col-lg-4
              img.w-110.mb-4.mb-lg-0(src="@/assets/curso/tema3/17.svg", alt="")
            .col-lg-7
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Solicitud de mantenimiento.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Control de quejas de huéspedes.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Pases de salida para huéspedes y objetos.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Aviso de cambio de habitación.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  | Cupones para huéspedes en planes o servicios especiales.            

    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Llaves de habitaciones

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/22.png", alt="")
      .col-lg-8
        p La llave de la habitación es el instrumento mediante el cual el huésped accede a su espacio de alojamiento; su evolución tecnológica refleja los avances en seguridad, comodidad y experiencia del huésped a lo largo de la historia hotelera.
        .p-4.bg-acento-contenido-a5.rounded-4
          p En un principio se usaron las pesadas llaves de hierro y luego de cobre. Su cometido fundamental era la apertura de las puertas, pero había algo adicional: no era tan importante la llave como el llavero, que se convirtió por bastante tiempo en la identidad visual del hotel. El peso de las llaves y sus llaveros servía para que el cliente no olvidara dejarlas en recepción al salir, lo que generaba una interacción natural con el huésped. Estas llaves se guardaban en el casillero de madera con los números de habitación, lo cual ayudaba al recepcionista a saber si el huésped estaba o no en el hotel y a brindar un trato más personalizado.

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema3/23.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-8.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.banner-text--blue.shadow
            p.mb-0.text-center #[strong A continuación se describe la evolución de los sistemas de acceso a habitaciones:] 

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t20")
      .row.justify-content-center.align-items-center.z-2(titulo="Llave mecánica")
        .col-sm-10.col-lg-9.mb-4.mb-lg-0
          p.mb-0 Es el tipo de llave para cerradura tradicional. En los establecimientos que aún la utilizan, se recomienda el uso de llaves de seguridad de alta complejidad, más difíciles de copiar, como medida de protección al huésped. Su uso en hotelería formal es cada vez menos frecuente, aunque persiste en establecimientos pequeños o de categoría básica.
        .col-sm-4.col-lg-2
          figure
            img.w-55(src='@/assets/curso/tema3/24.svg', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Tarjeta perforada (<em>VingCard</em>)")
        .col-sm-10.col-lg-9.mb-4.mb-lg-0
          p.mb-0 Fue la primera evolución de la llave mecánica hacia un sistema de tarjeta. Funcionaba mediante un patrón de perforaciones único por habitación. Aunque está en desuso, marcó el inicio de la estandarización de los sistemas de acceso en la industria hotelera.
        .col-sm-4.col-lg-2
          figure
            img.w-90(src='@/assets/curso/tema3/25.svg', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Tarjeta de banda magnética")
        .col-sm-10.col-lg-9.mb-4.mb-lg-0
          p.mb-0 Fue durante muchos años el estándar de la industria hotelera. Funciona mediante una banda magnética codificada que se activa en el momento del registro del huésped y se puede desactivar a su salida. Su principal ventaja es el bajo costo; su principal desventaja es que se desmagnetiza con facilidad al entrar en contacto con teléfonos celulares u otros dispositivos.
        .col-sm-4.col-lg-2
          figure
            img.w-90(src='@/assets/curso/tema3/26.svg', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Tarjeta RFID (<em>Radio Frequency Identification</em>)")
        .col-sm-10.col-lg-9.mb-4.mb-lg-0
          p.mb-0 Es actualmente el sistema más utilizado en los establecimientos de alojamiento de mediana y alta categoría en Colombia. Funciona por radiofrecuencia: el huésped solo acerca la tarjeta al lector sin necesidad de insertarla. Es más duradera que la banda magnética, más segura y permite una programación más precisa de los accesos y horarios de validez.
        .col-sm-4.col-lg-2
          figure
            img.w-90(src='@/assets/curso/tema3/27.svg', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Llave móvil o digital")
        .col-sm-10.col-lg-9.mb-4.mb-lg-0
          p.mb-0 Es la tendencia más reciente en la industria hotelera mundial y su adopción en Colombia crece de manera progresiva. Permite al huésped utilizar su teléfono celular como llave de habitación mediante tecnologías #[em Bluetooth] o NFC (<em>Near Field Communication</em>). El código de acceso se envía directamente al dispositivo móvil del huésped tras completar el proceso de registro, que en muchos casos se realiza de forma remota antes de la llegada al hotel. Este sistema reduce los tiempos de espera en recepción y mejora significativamente la experiencia del huésped.
        .col-sm-4.col-lg-2
          figure
            img.w-90(src='@/assets/curso/tema3/28.svg', alt='')

    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Procedimiento técnico para el registro de huéspedes

    p A continuación, se estudiarán los pasos básicos que se deben tener en cuenta al recibir a un huésped:

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        PasosA.color-amarillo.mb-5(tipo="n")
          .row.align-items-center.justify-content-center
            .col-md-9.col-lg-9.mb-4.mb-md-0
              h3 Dar la bienvenida
              p Con una sonrisa dar la cordial bienvenida al cliente.
            .col-6.col-md-3.col-lg-2
              figure
                img(src='@/assets/curso/tema3/29.png', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.col-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/30.png', alt='')
            .col-md-9.col-lg-9
              h3.text-start Realizar el registro
              p.text-start Se invita al huésped de manera amable a diligenciar la tarjeta de registro y solicitando presentación de su documento de identidad. El recepcionista debe observar que todos los datos que se soliciten se encuentren completos.
          .row.align-items-center.justify-content-center
            .col-md-9.col-lg-9.mb-4.mb-md-0
              h3 Promocionar los servicios del hotel
              p El recepcionista es un vendedor, puede ofrecer habitaciones de mejores características a las solicitadas en la reserva presentando las diferentes opciones, en caso de contar con paquetes de alimentación o servicios complementarios darlos a conocer al huésped.
            .col-6.col-md-3.col-lg-2
              figure
                img(src='@/assets/curso/tema3/31.png', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.col-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/32.png', alt='')
            .col-md-9.col-lg-9
              h3.text-start Asignar la habitación
              p.text-start Se asigna de acuerdo con las necesidades y solicitudes del cliente.
          .row.align-items-center.justify-content-center
            .col-md-9.col-lg-9.mb-4.mb-md-0
              h3 Solicitar garantía
              p Se debe preguntar al huésped cuál será su forma de pago.
            .col-6.col-md-3.col-lg-2
              figure
                img(src='@/assets/curso/tema3/33.png', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.col-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/34.png', alt='')
            .col-md-9.col-lg-9
              h3.text-start Despedida
              p.text-start Se le manifiesta al huésped que se desea una feliz estadía, se le entrega la llave al botones que lo acompañará hasta la habitación presentándose por su nombre.
    
    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Registro de huéspedes individuales

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8.mb-4.mb-lg-0
        p Es el registro que se realiza a un cliente, una pareja o una familia que hace uso del hotel con reserva previa. A efectos de localizar los datos del cliente, se le saluda con amabilidad y educación dándole la bienvenida, se le pregunta el nombre de quien tiene reservada la habitación y se le pide su documento de identidad.
        p.mb-0 Para agilizar el tiempo de registro se deben elaborar los prerregistros, en los que se incluye información que se conoce del pasajero, en el momento del registro se pide amablemente al huésped verificar que la información impresa es correcta:
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/35.png", alt="")

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-sm-4.col-xl-2.mb-4.mb-xl-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Nombre escrito correctamente.
      .col-sm-4.col-xl-2.mb-4.mb-xl-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Tipo de habitación reservada.
      .col-sm-4.col-xl-2.mb-4.mb-xl-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Número de personas.
      .col-sm-4.col-xl-2.mb-4.mb-lg-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Tarifa aplicada.
      .col-sm-4.col-xl-2.mb-4.mb-lg-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Fecha de salida.
          
    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8
        .p-4.bg-acento-contenido-a20.rounded-4
          p.mb-0.text-center Los datos para llenar, por lo general, serán:        

    .row.mb-4.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/36.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4
              p.mb-0 Dirección de domicilio.
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/37.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4
              p.mb-0 Número telefónico.
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/38.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4
              p.mb-0 Forma de pago: se debe preguntar cuál será la forma de pago. 

    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8
        .p-4.bg-acento-contenido-a20.rounded-4
          p.mb-0.text-center Así se realiza el proceso de registro para los diferentes tipos de huéspedes individuales:     

    TabsB.color-primario.mb-4.mb-lg-5
      .py-4.py-md-5(titulo="Clientes particulares / individuales / <em>walk-in</em>" :icono="require('@/assets/curso/tema3/39.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.col-xl-7.mb-4.mb-lg-0
            h4 Clientes particulares / individuales / <em>walk-in</em>
            p.mb-0 Cuando el huésped responde "con tarjeta de crédito", se le solicita amablemente la tarjeta con el fin de registrar la garantía de pago donde se toman los siguientes datos: tipo de tarjeta, nombre del titular, número de tarjeta de crédito y fecha de caducidad; explicándole que es por su propia comodidad, ya que tendrá crédito abierto en todas las áreas de consumo del hotel, y que corresponde a las políticas del establecimiento. En caso de querer pagar en efectivo, se pregunta el número de noches y se le solicita el pago anticipado de su estadía, sugiriendo además dejar un depósito adicional para cubrir los gastos extras.
          .col-sm-6.col-lg-3
            figure
              img(src='@/assets/curso/tema3/43.png', alt='')
      .py-4.py-md-5(titulo="Empresarial" :icono="require('@/assets/curso/tema3/40.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.col-xl-7.mb-4.mb-lg-0
            h4 Empresarial
            p.mb-0 En el momento de la solicitud de la reserva se ha recibido información de que la empresa será la encargada de la cuenta del alojamiento. La empresa, previo a la llegada del huésped, debe enviar una carta o correo corporativo informando qué valores serán cubiertos por ella y cuáles deberán ser cancelados directamente por el huésped.
          .col-sm-6.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema3/44.png', alt='')
      .py-4.py-md-5(titulo="Agencias de viaje" :icono="require('@/assets/curso/tema3/41.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.col-xl-7.mb-4.mb-lg-0
            h4 Agencias de viaje
            p.mb-0 Establecen acuerdos con los hoteles y disponen de tarifas especiales que usualmente incluyen el desayuno. La agencia se hace cargo mediante bonos o vouchers que entrega a los clientes para ser presentados en el hotel; a su salida, el huésped deberá pagar directamente los gastos extras o los servicios no incluidos en el acuerdo con la agencia. En el listado de llegadas debe reflejarse esta información con el fin de que el bono sea solicitado al cliente y no se le realice cargo directo a su cuenta, teniendo además claridad sobre qué servicios contrató el huésped a través de la agencia.
            p Para todos los casos de registro individual se debe tener en cuenta:

            p.mb-0 1. El registro debe llevar firma del huésped.
            p.mb-0 2. En caso de ir con acompañante(s), solicitar sus datos y verificar si pueden firmar consumos con cargo a la cuenta del titular, procediendo a registrar las firmas correspondientes.
          .col-sm-6.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema3/45.png', alt='')
      .py-4.py-md-5(titulo="Registro de grupos" :icono="require('@/assets/curso/tema3/42.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.col-xl-7.mb-4.mb-lg-0
            h4 Registro de grupos
            p El departamento de ventas y/o reservas envía con anticipación la reserva del grupo. Se hace uso de un memorándum o notificación de grupo y debe incluir la siguiente información:
            .row
              .col-lg-6
                ul.lista-ul--color.pe-4.m-0
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Nombre del grupo.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Fecha de llegada.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Fecha de salida.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Hora de llegada.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Hora de salida.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Número y tipo de habitaciones reservadas.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Nombres de los huéspedes.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Documentos de identidad (en caso de tenerlos).
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Indicaciones especiales.              
              .col-lg-6
                ul.lista-ul--color.pe-4.m-0
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Depósito.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Persona responsable.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | VIP del grupo.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Manejo de equipaje y propinas.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Programación de la estadía, eventos dentro y fuera del hotel.
                  li.d-flex.mb-0
                    i.fas.fa-minus.fa-xs.mt-2
                    | Manejo y pago de las cuentas, consumos extras.
          .col-sm-6.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema3/46.png', alt='')

    .row.justify-content-center.align-items-center.align-items-xl-stretch.mb-4.mb-lg-5
      .col-lg-4
        .p-4.rounded-4.bg-acento-contenido-a5.h-100.mb-4.mb-lg-0
          p Con base en esta información se procede a hacer el prerregistro y a la llegada de los pasajeros solo será necesaria la firma en el registro y algún dato puntual que haga falta en el mismo. En caso de tener cuenta maestra se solicita la firma del guía o conductor del grupo y será la responsable de los valores a cancelar.
          p.mb-0 Existen ocasiones que llegan grupos sin previa reserva. Para este caso se sugiere realizar el siguiente procedimiento:
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/tema3/47.png', alt='')
      .col-lg-4
        .p-4.rounded-4.bg-acento-botones-a5.h-100
          ul.lista-ul--color.pe-4.m-0
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Registrar al guía del grupo.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Realizar una lista de las personas y acomodación.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Solicitar el pago anticipado de la estadía.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Pedir depósito adicional por consumos extras o posibles daños.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Asignar un área especial para su registro.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Entregar una llave por habitación.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Acondicionar las habitaciones.

    .bg-title.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Registro de extranjeros

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p En el registro para extranjeros se sigue el mismo procedimiento que para los huéspedes nacionales, con la diferencia en el documento de identificación: se deberá presentar pasaporte vigente con visa o permiso autorizado por Migración Colombia. Los ciudadanos de la Comunidad Andina de Naciones (CAN) —Bolivia, Ecuador y Perú— pueden presentar su documento de identidad nacional.
        p.mb-4.mb-lg-0 Adicionalmente, el establecimiento está obligado a reportar al huésped extranjero en el Sistema de Información para el Reporte de Extranjeros (SIRE), plataforma electrónica administrada por la Unidad Administrativa Especial Migración Colombia, el mismo día del ingreso y también al momento del #[em check-out]. Los establecimientos registrados en el SIRE no están obligados a llevar libro físico de registro, conforme a la Resolución 2357 de 2020 de Migración Colombia. Solo en casos de ausencia de conectividad a internet, Migración Colombia habilitará el registro manual como excepción.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/48.png", alt="")

    .bg-title.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Registro VIP

    p.mb-4 #[em Very Important Person] (VIP) es la categoría asignada a huéspedes cuya influencia en su medio de desempeño puede contribuir significativamente al posicionamiento y al incremento de ventas del hotel. Aunque todos los huéspedes son importantes, este perfil recibe atención diferencial por su relevancia estratégica.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-4.rounded-4.bg-secundario-s5.mb-4.mb-lg-0
          p Pueden ser:
          ul.lista-ul--color.m-0
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Agentes de viajes.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Periodistas o publicistas del medio turístico.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Organizadores de convenciones.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Funcionarios gubernamentales o presidentes de compañías altamente reconocidas.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/49.png", alt="")

    .p-4.rounded-4.bg-acento-contenido-a5.mb-4
      p.mb-0 El registro de estas personas puede realizarse en espacios diferentes al #[em front office] y contempla detalles adicionales como:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/50.png", alt="")
      .col-lg-8
        .p-4.rounded-4.bg-acento-botones-a5.mb-4.mb-lg-0
          ul.lista-ul--color.m-0
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Asignación de habitación suite.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Arreglo floral, frutas y/o bebidas en la habitación.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Detalle típico de la región.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Carpeta con información detallada del hotel.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Crédito autorizado en todas las áreas.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | En algunos casos, según políticas del hotel, no se solicita forma de pago ni se presenta cuenta de cobro.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Traslado desde y hacia el aeropuerto.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | En algunos casos, vigilancia especial.
            li.d-flex.mb-0
              i.fas.fa-minus.fa-xs.mt-2
              | Atención directa por parte de los jefes de departamento del hotel.
          
    .bg-title.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Auto #[em check-in]

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Los sistemas PMS modernos permiten realizar el registro de manera remota, es decir, sin presencia física del huésped en la recepción. Para esto, el hotel dispone de una aplicación sincronizada con el PMS, a través de la cual se captura la información del huésped y se verifica su identidad de manera biométrica: se toma una fotografía del documento de identidad o pasaporte con un teléfono inteligente (#[em smartphone]) y se firma digitalmente. Una vez completado el proceso, el huésped únicamente se acerca a recibir o programar su llave de habitación.
        p.mb-4.mb-lg-0 Adicionalmente, existen quioscos de registro en los que el cliente, a su llegada al hotel, puede completar su #[em check-in] sin interactuar con la recepción. Esta modalidad es especialmente beneficiosa en establecimientos con alto volumen de llegadas, donde se forman filas durante el proceso de registro.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/51.png", alt="")

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/52.png", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start Para complementar el aprendizaje sobre el procedimiento de registro de huéspedes, se recomienda consultar el siguiente recurso audiovisual: Guía práctica en el procedimiento de #[em check-in].
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(href="https://www.youtube.com/watch?v=uUcVZQl-LE4" target="_blank")
                  span Abrir Video
                  i.fas.fa-file-video

    .p-4.rounded-4.bg-secundario-s10.mb-4.mb-lg-5
      p.mb-0.text-center Pódcast: asimismo, para reforzar el procedimiento técnico del #[em check-in] trabajado en este componente, se recomienda escuchar el siguiente recurso de audio: el #[em check-in] paso a paso: más allá del trámite, una experiencia de servicio.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema3/53.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-155(src="@/assets/curso/tema3/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            h5 ¿Sabías que?
            p Asimismo, para reforzar el procedimiento técnico del check-in trabajado en este componente, se recomienda escuchar el siguiente recurso de audio:
            TarjetaAudio.color-terciario.mb-3(
              texto="El <em>check-in</em> paso a paso: más allá del trámite, una experiencia de servicio."
              :audio="require('@/assets/audio/El-check-in-paso-a-paso-mas-alla-del-tramite-una-experiencia-de-servicio.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

</template>

<script>
export default {
  name: 'Tema3',
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
