/*
    ---------------------------------------------------
    ----------  /jquery-desarrollos/  -----------------
    ----------  /src/scripts/  ------------------------
    ----------  /spa-jquery-desarrollos.js/  ----------
    ---------------------------------------------------
*/

import { routesPages } from "/src/routes/routes-pages.js";


export const spaJQueryDesarrollos = ($) => {

    
    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-jquery.js  -----');
       
    
    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
    const allRoutes = [
        ...routesPages,
    ];

  
    //  ----------  referencias al HTML  ----------
    const $layout = $('#layout');



    //  ----------  Opciones que le pasamos al plugins  ----------
    const configOptions = {
        routes: allRoutes,
        base: '',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        urlHeader: '/src/components-layout/layout-header.html',
        urlNavBar: '/src/components-layout/layout-navbar.html',
        urlFooter: '/src/components-layout/layout-footer.html',
        urlHome: '/src/pages/home/index.html',
        titlePage: 'Curso de jQuery de Escuela IT',
        homePath: '/',
        faviconPage: '/src/favicon/jquery-favicon-original.ico',
        titleHeader: 'Curso de jQuery de Escuela IT',
        draggable: true
    }


    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js  ----------
    $layout.spaWithMethodLoadFromJQuery(configOptions);

}
