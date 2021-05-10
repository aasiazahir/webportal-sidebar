import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors';
import "../node_modules/bootstrap/dist/css/bootstrap.css";


// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {
  const backgroundImage = 'images/mountain1.jpg';
  const sidebarHeader = {
    fullName: 'Authetntik Sol',
    shortName: 'AS'
  };
  const menuItems = [
    {name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'Teacher', to: '/teacher',icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Student', to: '/student',icon: '/icons/about.svg', 
      subMenuItems: [
        { name: 'Batch', to: '/batch'},        
        { name: 'Year', to: '/year'},
       
      ] },
    
    {name: 'Signin', to: '/signin', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Signup', to: '/signup', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Contacts', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] }
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.silver}
      />
      <MainView />
    </s.App>
  );
}

export default App;
