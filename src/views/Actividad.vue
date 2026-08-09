<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Formulación de alimento balanceado en aves de corral',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la fisiología digestiva, los requerimientos nutricionales, el análisis bromatológico, la formulación de raciones y el bienestar animal en aves de corral.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la fisiología digestiva en las aves?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar el almacenamiento del alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformar los alimentos en nutrientes aprovechables por el organismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el consumo de agua en las aves.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar únicamente la producción de huevos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la función principal del buche?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar nutrientes para el metabolismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Almacenar temporalmente el alimento y regular su paso al estómago.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producir enzimas digestivas para las grasas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los residuos del organismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué órgano realiza principalmente la digestión mecánica del alimento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proventrículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hígado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Molleja o ventrículo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Páncreas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Dónde ocurre principalmente la absorción de los nutrientes?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la cloaca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En los ciegos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el proventrículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En el intestino delgado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál de las siguientes estructuras produce la bilis?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hígado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Páncreas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Molleja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esófago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el principal objetivo de un plan alimentario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar el suministro de nutrientes según la etapa productiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el tamaño del lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de vitaminas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué nutriente constituye la principal fuente de energía para las aves?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteína.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vitaminas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carbohidratos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Minerales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función principal de las proteínas en las aves?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular únicamente la temperatura corporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Favorecer solo la digestión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar exclusivamente el consumo de agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formar y reparar tejidos del organismo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál vitamina está asociada con la prevención del raquitismo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vitamina D3.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Vitamina K.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vitamina E.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vitamina B2.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el mineral indispensable para la calidad de la cáscara del huevo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sodio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hierro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zinc.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el objetivo principal del análisis bromatológico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar la composición nutricional de los alimentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el consumo de alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el tamaño de las aves.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar únicamente el color del alimento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué parámetro bromatológico representa la cantidad de agua presente en un alimento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Materia seca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteína cruda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Extracto etéreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Humedad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué micotoxina puede deprimir el sistema inmunológico de las aves?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aflatoxinas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fumonisinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zearalenona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ocratoxinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es la finalidad del muestreo bromatológico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar materias primas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el costo del alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obtener una muestra representativa para el análisis.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué característica debe tener una ración balanceada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aportar todos los nutrientes en cantidades adecuadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contener únicamente cereales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estar elaborada con un solo ingrediente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incluir solamente suplementos vitamínicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué método de balanceo utiliza únicamente dos ingredientes para ajustar un nutriente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Método algebraico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programación lineal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prueba y error.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuadrado de Pearson.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué indicador expresa la capacidad del ave para transformar alimento en producto útil?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conversión alimenticia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Peso corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consumo de agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Índice de postura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es una de las Cinco Libertades del bienestar animal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el peso corporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la ventilación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la densidad del alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libertad de hambre y sed.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué comportamiento puede indicar un problema de bienestar o nutrición?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agrupamiento anormal de las aves.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Consumo normal de alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribución uniforme del lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actividad fisiológica normal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es uno de los beneficios de formular correctamente una dieta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar las enfermedades digestivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la calidad del producto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir el bienestar animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar la eficiencia alimenticia y el desempeño productivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
