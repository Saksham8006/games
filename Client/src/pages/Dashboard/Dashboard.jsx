import CardFour from '../../components/CardFour.jsx';
import CardOne from '../../components/CardOne.jsx'
import CardThree from '../../components/CardThree.jsx';
import CardTwo from '../../components/CardTwo.jsx';
// import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import TableOne from '../../components/TableOne.tsx';
import DefaultLayout from '../../layout/DefaultLayout.tsx';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        <ChartThree />
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
        {/* <ChatCard /> */}
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
