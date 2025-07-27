/*
  
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /menu-display.js  -----------------------------------------------
    -----------------------------------------------------------------------------
*/

const navbarList = [

    {
        dataId: 'home',
        linkName: 'Inicio'
    },


    {
        dataId: 'clase01',
        linkName: 'Clase 1. ¿Que es jQuery?'
    },

    {
        dataId: 'clase02',
        linkName: '¿ Clase 2. Es necesario utilizar jQuery en la Actualidad ?'
    },

    {
        dataId: 'clase03',
        linkName: 'Clase 3. Práctica Primeros Pasos'
    },



];



export const layoutNavBar = () => {

    //(function ($) {

        console.log('\n');
        console.warn('-----  layout-navbar.js  -----');

        //  ----------  Referencia al HTML  ----------  
        const $layoutNavBar = $('#layoutNavbar');

        const $navbar = `

            <nav class="layout__navbar">
                
                <h3 class="navbar__title"> Navigation </h3>
                
                <ul class="navbar__list">
                    
                    ${navbarList.map(item => `
                        
                        <li class="navbar__item">
                            <a href="#" data-id="${item.dataId}"> ${item.linkName} </a>
                        </li>`)
                            .join('')
                    }
                    
                </ul>

            </nav>

        `;

        $layoutNavBar.append($navbar);


    //})(jQuery);

}
