<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4  
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.bg1.p-4.brad.mb-4
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/4.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 El cableado estructurado es una infraestructura de red que organiza y gestiona el cableado de manera eficiente, asegurando una conexión de red confiable y escalable. En la actualidad, el cableado estructurado es parte de la conectividad de red en edificios y campus, proporcionando una base sólida para la transmisión de datos y la comunicación. Este sistema permite la integración de diversos servicios de red, como Internet, telefonía y sistemas de almacenamiento, en una infraestructura unificada y bien organizada. 

        p Los aportes y beneficios del cableado estructurado son múltiples. En primer lugar, facilita la gestión y el mantenimiento de la infraestructura de red, permitiendo una rápida identificación y resolución de problemas. Además, el cableado estructurado asegura una alta disponibilidad y rendimiento de la red, lo que es necesario para las operaciones diarias de cualquier organización. Otro beneficio importante es la escalabilidad, ya que permite la ampliación de la infraestructura de red de manera eficiente y sin interrupciones, adaptándose a las necesidades cambiantes de la organización.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/5.png' alt='') 


    .row.justify-content-center.align-items-end.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/6.png' alt='')       
      .col.pt-lg-0.pt-md-4
        .bg2.p-4.j1
          p.mb-0 En este componente, se aprende sobre los elementos y los procesos claves del cableado estructurado, incluyendo los materiales y herramientas avanzadas, los subsistemas de cableado, el mantenimiento de la infraestructura y los data centers. Se exploran los estándares y normativas que rigen la construcción y operación de estas infraestructuras, proporcionando una comprensión profunda de cómo se diseñan y gestionan las redes de manera eficiente. Además, se abordan aspectos prácticos como la resolución de problemas y la ampliación de sistemas, ofreciendo una visión integral de la gestión de la infraestructura de red.  

    p Este apartado sirve como una guía completa para los aprendices, proporcionando conocimientos valiosos sobre cómo implementar, mantener y optimizar el cableado estructurado, asegurando que la infraestructura de red funcione de manera óptima y sin interrupciones.
    h5.mb-4 ¡Bienvenido a este mundo de la implementación del cableado estructurado!

    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/HOywmTyIIiI?si=vsSZWzBRplB0Q7_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
