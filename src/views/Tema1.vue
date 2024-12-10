<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materiales y herramientas avanzadas

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')       
      .col.pt-lg-0.pt-md-4
        .bg3.p-4.j1
          p.mb-0 Los materiales y herramientas avanzadas en el contexto del cableado estructurado se refieren a los equipos y componentes especializados que se utilizan para diseñar, instalar, probar y mantener una    infraestructura de red eficiente y confiable. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Equipos de testeo y certificación

    .row.justify-content-center.mb-4  
      .col-lg-8.my-lg-0.my-3
        p Los equipos de testeo y certificación son necesarios para garantizar que el cableado estructurado cumpla con los estándares de rendimiento y calidad. Estos equipos incluyen analizadores de cableado, que verifican la integridad del cableado y detectan problemas como cortocircuitos, cables abiertos y cruzados. Además, los certificadores de cableado proporcionan una evaluación completa del rendimiento del cableado, asegurando que cumpla con las especificaciones de categoría (Cat5e, Cat6, Cat6a, etc.). Estos equipos son fundamentales para asegurar que la red funcione de manera óptima y sin interrupciones.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/8.png' alt='')           

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Herramientas especializadas

    .row.justify-content-center.mb-4 
      .col-lg-9
        .row.justify-content-center
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')        
          .col-lg-8.my-lg-0.my-3
            p Las herramientas especializadas para la implementación de cableado estructurado incluyen cortadores de cable, pelacables, herramientas de punzonado y herramientas de terminación de conectores. Los cortadores de cable permiten cortar cables de manera precisa y segura, mientras que los pelacables facilitan la eliminación de la cubierta externa del cable sin dañar los conductores internos. Las herramientas de punzonado se utilizan para instalar cables en paneles de parcheo y bastidores. Las herramientas de terminación de conectores, como los crimpadores, aseguran una conexión segura y duradera de los conectores RJ-45.
        .row.justify-content-center.bg1.p-4.brad.mb-4
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/11.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Los conectores RJ-45 son dispositivos de conexión utilizados en redes de telecomunicaciones y redes de datos. El término "RJ-45" se refiere a un tipo específico de conector modular que se utiliza principalmente para conectar cables de par trenzado (twisted pair) a equipos de red, como routers, switches, computadoras y otros dispositivos de red. La siguiente tabla describe los conectores RJ-45.        
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/10.png' alt='')  

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Tabla 1. 
          span Características de los conectores RJ-45

        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Características de conectores RJ-45
                th Descripción 

            tbody
              tr
                td.fast-bold.bgt1 Diseño modular 
                td Los conectores RJ-45 tienen un diseño modular, lo que significa que se insertan en puertos correspondientes en los dispositivos de red y se aseguran mediante un mecanismo de bloqueo.

              tr
                td.fast-bold.bgt1 Pines de contacto
                td Un conector RJ-45 tiene ocho pines de contacto, que se conectan a los ocho hilos de un cable de par trenzado. Estos pines están dispuestos en una configuración estándar que permite la transmisión de datos y señales de red. 

              tr
                td.fast-bold.bgt1 Compatibilidad
                td Los conectores RJ-45 son compatibles con varios estándares de cableado, incluyendo Cat5e, Cat6 y Cat6a, que son utilizados en redes #[i Ethernet*] para proporcionar velocidades de transmisión de datos de hasta 10 Gbps.   

              tr
                td.fast-bold.bgt1 Uso común
                td Los conectores RJ-45 son ampliamente utilizados en redes de área local (LAN) y en aplicaciones de telecomunicaciones. También se utilizan en sistemas de telefonía, aunque en este caso, el término "RJ-45" puede referirse a un conector similar, pero con una configuración de pines diferente.                                                            
    .row.bg4.align-items-center
      .px-lg-5.px-4
        .row.justify-content-start.my-5
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.text-white.p-0.px-4
                h3.mb-1 Soluciones para errores de mapeo       
        .row.justify-content-center
          .col-lg-3.d-none.d-lg-block.j1 
            img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')
          .col-lg-9
            .bg5.brad.p-4.h-100.j1
              SlyderA(tipo="b")
                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/15.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Conectores macho
                      p.mb-0 Estos son los conectores que se insertan en los puertos de los dispositivos de red. Tienen pines de contacto que se conectan a los hilos del cable. 

                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/15.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Conectores hembra
                      p.mb-0 Estos son los puertos en los dispositivos de red donde se insertan los conectores macho. Tienen orificios que reciben los pines de contacto del conector macho.

                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/15.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Instalación
                      p.mb-0 La instalación de conectores RJ-45 en cables de par trenzado requiere el uso de herramientas especializadas, como crimpadores, que aseguran una conexión segura y duradera entre los hilos del cable y los pines del conector. Es importante seguir las normas de cableado estándar (T568A o T568B) para asegurar una conexión correcta y evitar problemas de rendimiento de la red.

    Separador 
    .row.justify-content-center.mb-4
      .col-lg-9.my-lg-0.my-3
        #t_1_3.titulo-segundo.color-acento-contenido
          h2 1.3 Control de calidad de materiales      
        p El control de calidad de los materiales permite asegurar que el cableado estructurado cumpla con los estándares de rendimiento y durabilidad. Esto incluye la verificación de la calidad de los cables, conectores, paneles de parcheo y otros componentes. Los cables deben cumplir con las especificaciones de categoría y estar certificados por organismos reconocidos. Los conectores y paneles de parcheo deben ser de alta calidad para garantizar una conexión segura y duradera. Además, es importante realizar pruebas periódicas de los materiales para detectar cualquier defecto o desgaste que pueda afectar el rendimiento de la red. A continuación, se detallan los aspectos clave del control de calidad de los materiales:                      
      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/temas/16.png' alt='') 

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/17.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Verificación de la calidad de los cables")
            p Los cables de red deben cumplir con las especificaciones de categoría (Cat5e, Cat6, Cat6a, etc.) y estar certificados por organismos reconocidos. Estas certificaciones garantizan que los cables cumplen con los estándares de rendimiento y calidad establecidos por organizaciones como el Telecommunications Industry Association (TIA) y el American National Standards Institute (ANSI). La verifica ción de la calidad de los cables incluye pruebas de integridad del cable, resistencia a la tracción, aislamiento y rendimiento de transmisión de datos.
          div(titulo="Verificación de la calidad de los conectores")
            p Los conectores, como los RJ-45, deben ser de alta calidad para garantizar una conexión segura y duradera. La verificación de la calidad de los conectores incluye pruebas de resistencia mecánica, integridad de los pines de contacto y compatibilidad con los estándares de cableado. Los conectores deben estar diseñados para soportar múltiples ciclos de inserción y extracción sin degradarse, asegurando una conexión fiable a lo largo del tiempo.  
          div(titulo="Verificación de la calidad de los paneles de parcheo")
            p Los paneles de parcheo son componentes que interfieren  en la infraestructura de red, ya que permiten la conexión y gestión de los cables de red. La verificación de la calidad de los paneles de parcheo incluye pruebas de resistencia mecánica, integridad de los puertos de conexión y compatibilidad con los estándares de cableado. Los paneles de parcheo deben estar diseñados para soportar un alto número de conexiones y desconexiones sin degradarse, asegurando una conexión fiable y eficiente.  
          div(titulo="Verificación de otros componentes")
            p Además de los cables, conectores y paneles de parcheo, otros componentes de la infraestructura de red, como los bastidores, las bandejas de cableado y los sistemas de gestión de cables, deben ser verificados para asegurar su calidad. Estos componentes deben cumplir con los estándares de rendimiento y durabilidad, y deben estar diseñados para soportar las condiciones de uso y el entorno en el que se instalan.  
          div(titulo="Pruebas periódicas de los materiales")
            p Es importante realizar pruebas periódicas de los materiales para detectar cualquier defecto o desgaste que pueda afectar el rendimiento de la red. Estas pruebas incluyen la inspección visual de los componentes, pruebas de rendimiento del cableado y verificaciones de la integridad de las conexiones. Las pruebas periódicas permiten identificar y corregir problemas antes de que afecten la operación de la red, asegurando una infraestructura de red eficiente y confiable.                                                          
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
export default {
  name: 'Tema1',
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
