<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mantenimiento de infraestructura

    .row.justify-content-center.align-items-center
      .col.pt-lg-0.pt-md-4
        .p-4.j1
          p.mb-0  El mantenimiento de infraestructura se refiere a las actividades y procesos necesarios para asegurar que los sistemas y componentes de una infraestructura funcionen de manera óptima y eficiente a lo largo del tiempo. Esto incluye la inspección, reparación, actualización y reemplazo de equipos y materiales para prevenir fallos y garantizar el rendimiento continuo de la infraestructura.

      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/34.png' alt='')  
        
    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Mantenimiento preventivo     
    .row.justify-content-center.bg7.p-4.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/35.png' alt='')       
      .col.pt-lg-0.pt-md-4.j1        
        p.mb-0 La conexión con bases de datos representa uno de los aspectos primarios en la obtención de datos para análisis. Este proceso requiere un enfoque sistemático que abarca desde la configuración inicial hasta la ejecución de consultas complejas, asegurando en todo momento la eficiencia y seguridad en el acceso a los datos. La Tabla 2 brinda la información sobre cómo efectuar un mantenimiento preventivo adecuado.      

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Tabla 2. 
          span Actividades de mantenimiento preventivo
        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Actividad
                th Verificación  
                th Pruebas 

            tbody
              tr
                td.fast-bold.bgt1 Inspección de cables
                td Inspeccionar los cables para detectar cualquier signo de desgaste, como cortes, abrasiones o daños en la cubierta externa.                
                td Utilizar equipos de testeo para verificar la continuidad eléctrica de los cables y detectar posibles cortocircuitos o cables abiertos.

              tr
                td.fast-bold.bgt1 Inspección de conectores
                td Inspeccionar los pines de los conectores RJ-45 para asegurar que no estén doblados, rotos o sucios.                
                td Utilizar equipos de testeo para verificar que los conectores estén correctamente conectados y que no haya problemas de conectividad. 

              tr
                td.fast-bold.bgt1 Inspección de equipos de red
                td Inspeccionar los #[i switches y routers] para asegurar que estén funcionando correctamente y que no haya signos de sobrecalentamiento o daño físico.               
                td Asegurarse de que los equipos de red tengan el #[i firmware] más reciente instalado para mejorar el rendimiento y la seguridad.                                                 
    p Otras actividades necesarias durante el mantenimiento preventivo, las cuales se deben tener en cuenta siempre desde una mirada globalizada son:

    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Pruebas de Rendimiento del Cableado

    .row.justify-content-center.mb-5
      .col-lg-4.my-lg-0.my-3
        .bg10.p-4.brad.h-100
          p.mb-0 Pruebas de Transmisión de Datos: Utilizar equipos de certificación para verificar que el cableado cumpla con los estándares de categoría (Cat5e, Cat6, Cat6a, etc.) y que pueda soportar las velocidades de transmisión de datos requeridas.

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/36.png' alt='') 


      .col-lg-4.my-lg-0.my-3
        img.img-t.mb-4(src='@/assets/curso/temas/37.png' alt='') 
        p #[b Pruebas de Interferencia:] Verificar que el cableado no esté sufriendo interferencias electromagnéticas que puedan afectar el rendimiento de la red.    


    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Limpieza de cuartos técnicos
    .row.justify-content-center.text-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .bg13.brad.h-100
          img(src="@/assets/curso/temas/38.png", alt="alt")
          .p-4
            h4.mb-3 Eliminación de polvo y suciedad 
            p.mb-0 Limpiar regularmente los cuartos técnicos para eliminar el polvo y la suciedad que pueden acumularse en los equipos de red y afectar su rendimiento.
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .bg13.brad.h-100
          img(src="@/assets/curso/temas/39.png", alt="alt")
          .p-4
            h4.mb-3 Organización de cables 
            p.mb-0 Asegurarse de que los cables estén organizados y etiquetados correctamente para facilitar el mantenimiento y la resolución de problemas.

    .row.justify-content-start.my-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Verificación de sistemas de ventilación y control de temperatura

  
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/40.png' alt='')       
      .col-lg-8.my-lg-0.my-3.j1
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span 1
            span #[b Inspección de ventiladores:] Verificar que los ventiladores y sistemas de ventilación estén funcionando correctamente para asegurar una circulación de aire adecuada.
          hr
          li 
            .lista-ol--cuadro__vineta
              span 2
            span #[b Control de temperatura:] Monitorear la temperatura en los cuartos técnicos para asegurar que esté dentro de los rangos adecuados y que no haya sobrecalentamiento de los equipos de red.
          hr    

    Separador 

    .row.justify-content-center.mb-4
      .col-lg-9.my-lg-0.my-3
        #t_3_2.titulo-segundo.color-acento-contenido
          h2 3.2 Resolución de problemas   
        .row.justify-content-center.align-items-center.bg1.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/41.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La resolución de problemas es necesaria para el mantenimiento de la infraestructura de cableado estructurado. Cuando se detecta un problema, se debe identificar y solucionar la causa raíz de manera rápida y eficiente. Esto puede incluir la reparación de cables dañados, la sustitución de conectores defectuosos y la reconfiguración de equipos de red.
        .row.justify-content-start.my-5
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.text-white.p-0.px-4
                h3.mb-1 Reparación de cables dañados
        .row.justify-content-center
          .col-lg-6.my-lg-0.my-3
            img.img-t.mb-4(src='@/assets/curso/temas/43.png' alt='')
            p.mb-0 #[b Identificación del problema:] Utilizar equipos de testeo para identificar el cable dañado y localizar el punto de daño.
          .col-lg-6.my-lg-0.my-3
            img.img-t.mb-4(src='@/assets/curso/temas/44.png' alt='')
            p.mb-0 #[b Reparación:] Reparar el cable dañado o reemplazarlo por uno nuevo para asegurar la continuidad del servicio de red.

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/42.png' alt='')   

    .row.bg4.align-items-center
      .px-lg-5.px-4
        .row.justify-content-start.my-5
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.text-white.p-0.px-4
                h3.mb-1 Sustitución de conectores defectuosos    
        .row.justify-content-center
          .col-lg-3.d-none.d-lg-block.j1 
            img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='')
          .col-lg-9
            .bg5.brad.p-4.h-100.j1
              SlyderA(tipo="b")
                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/46.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Identificación del problema
                      p.mb-0 Utilizar equipos de testeo para identificar conectores defectuosos que puedan estar causando problemas de conectividad.   
                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/46.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Sustitución
                      p.mb-0 Reemplazar los conectores defectuosos por nuevos conectores de alta calidad para asegurar una conexión segura y confiable. 


    .row.justify-content-start.my-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Reconfiguración de equipos de red

  
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/47.png' alt='')       
      .col-lg-8.my-lg-0.my-3.j1
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span 1
            span #[b Identificación del problema:] Utilizar herramientas de diagnóstico para identificar problemas de configuración en switches, routers y otros equipos de red.
          hr
          li 
            .lista-ol--cuadro__vineta
              span 2
            span #[b Reconfiguración:] Reconfigurar los equipos de red para solucionar problemas de conectividad, rendimiento o seguridad.
          hr 

    .row.justify-content-start.my-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Uso de equipos de testeo y certificación    

    p #[i Identificación y diagnóstico:] Utilizar equipos de testeo y certificación para identificar y diagnosticar problemas de manera precisa. Estos equipos permiten realizar pruebas detalladas del cableado y los equipos de red para localizar y solucionar problemas de manera eficiente.

    Separador 

    .row.justify-content-center.mb-5
      .col-lg-9.my-lg-0.my-3
        #t_3_3.titulo-segundo.color-acento-contenido
          h2 3.3 Ampliación de sistemas
        .row.justify-content-center.align-items-center.bg14.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/48.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La ampliación de sistemas es necesaria cuando la infraestructura de cableado estructurado debe adaptarse a las necesidades cambiantes de la organización. Esto puede incluir la adición de nuevos puntos de conexión en las áreas de trabajo, la expansión de los cuartos técnicos y la actualización de los equipos de red. La ampliación de sistemas debe realizarse de manera planificada y coordinada para minimizar las interrupciones en el servicio de red.
        .row.justify-content-start.my-5
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.text-white.p-0.px-4
                h3.mb-1 Adición de nuevos puntos de conexión
        .row.justify-content-center
          .col-lg-6.my-lg-0.my-3
            img.img-t.mb-4(src='@/assets/curso/temas/43.png' alt='')
            p.mb-0 #[b Evaluación de necesidades:] Evaluar las necesidades de la organización para determinar la cantidad y ubicación de los nuevos puntos de conexión.
          .col-lg-6.my-lg-0.my-3
            img.img-t.mb-4(src='@/assets/curso/temas/44.png' alt='')
            p.mb-0 #[b Reparación:Instalación:] Instalar nuevos cables y conectores para proporcionar puntos de conexión adicionales en las áreas de trabajo.
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/49.png' alt='') 

    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Expansión de cuartos técnicos
    .row.bg4.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-6.my-2
            .bg15.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/50.png' alt='')

              h5.mb-4 Evaluación de espacio.
              p.mb-0 Evaluar el espacio disponible en los cuartos técnicos para determinar la capacidad de expansión.
          .col-lg-6.my-2
            .bg7.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/51.png' alt='')

              h5.mb-4 Instalación de nuevos equipos.
              p.mb-0 Instalar nuevos bastidores, paneles de parcheo y otros equipos de red para soportar la expansión de la infraestructura de red.

    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Actualización de equipos de red

        .row.justify-content-center.my-4
          .col-lg-8.my-lg-0.my-3.j1
            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta
                  span 1
                span #[b Evaluación de rendimiento:] Evaluar el rendimiento de los equipos de red existentes para determinar si es necesario actualizarlos.
              hr
              li 
                .lista-ol--cuadro__vineta
                  span 2
                span #[b Instalación de nuevos equipos:] Instalar nuevos switches, routers y otros equipos de red para mejorar el rendimiento y la capacidad de la infraestructura de red.
              hr               
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/52.png' alt='') 

    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Planificación y coordinación

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        .bg1.p-4.brad.h-100.j1
          p.mb-0 #[b Planificación de proyectos:] Planificar y coordinar la ampliación de sistemas para minimizar las interrupciones en el servicio de red. Esto incluye la programación de trabajos de instalación y la coordinación con los proveedores de servicios.

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/53.png' alt='') 


      .col-lg-4.my-lg-0.my-3
        .bg16.p-4.brad.h-100.j1
          p.mb-0 #[b Pruebas de rendimiento:] Realizar pruebas de rendimiento después de la ampliación para asegurar que la infraestructura de red cumpla con los estándares de calidad y rendimiento.

</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
export default {
  name: 'Tema3',
  components: { AcordionA, SlyderA },
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
