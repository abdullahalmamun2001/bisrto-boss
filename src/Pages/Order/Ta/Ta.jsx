
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu/useMenu';

const Ta = () => {
  const [menu]=useMenu();
  console.log(typeof menu);
      const pizza=menu.filter(item=>item.category==='pizza')
      console.log(typeof pizza);
      // const dessert=menu.filter(item=>item.category==='dessert')
      // const salad=menu.filter(item=>item.category==='salad')
      // const soup=menu.filter(item=>item.category==='soup')
      // const offered=menu.filter(item=>item.category==='offered')
   
    return (
        <Tabs>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soups</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
    
        <TabPanel>
         
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
       
      </Tabs>
    );
};

export default Ta;