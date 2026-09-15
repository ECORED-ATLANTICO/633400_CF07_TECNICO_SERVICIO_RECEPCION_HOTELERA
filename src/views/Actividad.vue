<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: '<em>Front office: check-in.</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la capacidad de las y los aprendices para identificar los conceptos, procedimientos y normativa relacionados con el proceso de registro de huéspedes (<em>check-in</em>) en establecimientos de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'El <em>check-in</em> en hotelería corresponde a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso de ingreso y registro del huésped en el hotel.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La limpieza de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La salida del huésped del hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La gestión de alimentos y bebidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Uno de los objetivos principales del <em>check-in</em> es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar la limpieza de la habitación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preparar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestionar eventos del hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar al huésped y formalizar su ingreso al hotel.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es un componente del turismo comunitario?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visitantes internacionales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infraestructura hotelera externa',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunidad local',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Publicidad masiva',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'El documento que formaliza el contrato de hospedaje es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La lista de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Tarjeta de Registro de Alojamiento (TRA).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El menú del restaurante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El reporte de mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La disponibilidad de habitaciones permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el inventario de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar el estacionamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conocer qué habitaciones están libres, ocupadas o reservadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Determinar los precios del restaurante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El <em>rack</em> de ocupación se utiliza para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visualizar el estado de las habitaciones del hotel.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlar la contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar la lavandería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Un huésped walk-in es aquel que:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Viaja con una agencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un huésped VIP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiene una reserva grupal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Llega al hotel sin reserva previa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Durante el proceso de check-in el recepcionista debe:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar tareas de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solicitar documento de identidad y verificar los datos del huésped',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Preparar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'El reporte de ocupación del hotel permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conocer el porcentaje de habitaciones ocupadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gestionar la lavandería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar el menú.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El sistema PMS en hotelería se utiliza para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preparar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Gestionar información operativa del hotel y de los huéspedes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar habitaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Uno de los protocolos del personal de recepción es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar ropa informal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar al huésped.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No atender solicitudes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener una adecuada presentación personal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'El uso del uniforme en hotelería permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proyectar imagen profesional del establecimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar el trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar protocolos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La normativa ESCNNA busca:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover el turismo masivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prevenir la explotación sexual comercial de menores en turismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar las tarifas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El sistema SIRE se utiliza para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar lavandería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reportar la información de huéspedes extranjeros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Una función del recepcionista es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Atender solicitudes, quejas y requerimientos del huésped.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar mantenimiento técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preparar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar la lavandería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'El procedimiento de check-in inicia con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La limpieza de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La facturación final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La bienvenida cordial al huésped.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El cierre contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'Asignar una habitación al huésped implica:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Seleccionar una habitación disponible acorde a la reserva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar la habitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limpiar la habitación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el mobiliario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El reporte de ama de llaves permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conocer el estado de limpieza de las habitaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gestionar reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La bitácora de recepción se utiliza para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar novedades y pendientes entre turnos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La entrega de turno en recepción permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cerrar el hotel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar continuidad en la operación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar registros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos y procedimientos del proceso de check-in en la recepción hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
