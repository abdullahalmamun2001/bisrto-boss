
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu/useMenu';
import FoodCard from '../../FoodCard/FoodCard';

const Ta = () => {
  const [menu] = useMenu();
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const dessert = menu.filter(item => item.category === 'dessert')
  const drinks = menu.filter(item => item.category === 'drinks')
  const popular = menu.filter(item => item.category === 'popular')
  
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
        <Tab>Offered</Tab>
      </TabList>


      <TabPanel>
        <div className='grid md:grid-cols-3 gap-10'>
          {pizza.map(item => <FoodCard key={item._id} item={item}>

          </FoodCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-3 gap-10'>
          {salad.map(item => <FoodCard key={item._id} item={item}>

          </FoodCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-3 gap-10'>
          {soup.map(item => <FoodCard key={item._id} item={item}>

          </FoodCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-3 gap-10'>
          {dessert.map(item => <FoodCard key={item._id} item={item}>

          </FoodCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-3 gap-10'>
          {drinks.map(item => <FoodCard key={item._id} item={item}>

          </FoodCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-3 gap-10'>
          {popular.map(item => <FoodCard key={item._id} item={item}>

          </FoodCard>)}
        </div>
      </TabPanel>
      

    </Tabs>
  );
};

export default Ta;