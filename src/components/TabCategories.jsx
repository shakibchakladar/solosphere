import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategories = () => {
  return (
   <div className="container px-10 py-6 mx-auto">
    <div className="px-10 my-5 space-y-4 text-center">
    <h2 className="text-5xl font-bold">Browse Our Job Category</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eveniet nemo obcaecati vitae. Accusamus provident, dolorem veniam rem veritatis reprehenderit.</p>
    </div>
     <Tabs>
      <div className="flex items-center justify-center">
      <TabList>
        <Tab>Web</Tab>
        <Tab>Graphics </Tab>
        <Tab>Digital m</Tab>
      </TabList>
      </div>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
   </div>
  );
};

export default TabCategories;
