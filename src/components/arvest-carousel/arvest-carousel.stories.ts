import { ComponentsGroup } from '../../global/ts/storybookGrouping';

export default {
  'title': `${ComponentsGroup}/Carousel`,
  parameters: {
    layout: 'fullscreen'
  }
};

export const Carousel = () => `
        <arvest-carousel>
            <img class="carousel-image" src='https://images.unsplash.com/photo-1525197134674-4c3f02da2745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' alt='image 1'>
            <img class="carousel-image" src='https://images.unsplash.com/photo-1515552638994-8ce3dc5fea97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' alt='image 2'>
            <img class="carousel-image" src='https://images.unsplash.com/photo-1516736133329-05ab83cd220e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='image 3'>
        </arvest-carousel>
        `;
    
