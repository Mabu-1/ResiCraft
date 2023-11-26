
import Banner from './Banner';
import BuildingDetails from './BuildingDetails';
import Coupons from './Cupons';
import LocationDetails from './LocationDetails';

const Home = () => {
  return (
    <div>
      {/* Include the Banner component here */}
     <Banner></Banner>
     <BuildingDetails />
     <Coupons></Coupons>
     <LocationDetails/>
     
    </div>
  );
};

export default Home;
